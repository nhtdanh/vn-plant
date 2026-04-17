import { cn } from "@/lib/utils";
import React, { useState, useRef } from "react";
import { X, Check } from "lucide-react";

export interface ImageEditorRef {
  getCroppedBlob: () => Promise<Blob | null>;
  getCroppedData?: () => Promise<string | null>; // keep for legacy support if needed
}

interface ImageEditorProps {
  image: string;
  isInline?: boolean;
  className?: string;
  onSave?: (croppedImage: string) => void;
  onCancel?: () => void;
}

/**
 * ImageEditor - Fixed-Frame 4:3 Architecture
 * The image is contained within a fixed 4:3 enclosure (Khung gốc).
 * The crop frame (Khung crop) is intelligently restricted to the visible pixels.
 */
export const ImageEditor = React.forwardRef<ImageEditorRef, ImageEditorProps>(({
  image,
  isInline = false,
  className,
  onSave,
  onCancel,
}, ref) => {
  const [isReady, setIsReady] = useState(false);
  const [imgSize, setImgSize] = useState({ width: 0, height: 0 });
  const [viewBounds, setViewBounds] = useState({ x: 0, y: 0, width: 100, height: 100 });
  
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  // Crop box state in percentages (relative to the container)
  const [crop, setCrop] = useState({ x: 0, y: 0, width: 0, height: 0 });

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const { naturalWidth, naturalHeight } = e.currentTarget;
    setImgSize({ width: naturalWidth, height: naturalHeight });
    
    // Calculate effective bounds within the 4:3 container
    const container = containerRef.current?.getBoundingClientRect();
    if (!container || container.width === 0 || container.height === 0) {
      setViewBounds({ x: 0, y: 0, width: 100, height: 100 });
      setCrop({ x: 0, y: 0, width: 100, height: 100 });
      setIsReady(true);
      return;
    }
    
    const containerRatio = container.width / container.height;
    const imageRatio = naturalWidth / naturalHeight;
    
    let bounds = { x: 0, y: 0, width: 100, height: 100 };
    
    if (imageRatio > containerRatio) {
      // Image is wider than container (Letterbox top/bottom)
      bounds.height = (containerRatio / imageRatio) * 100;
      bounds.y = (100 - bounds.height) / 2;
    } else {
      // Image is taller than container (Pillarbox sides)
      bounds.width = (imageRatio / containerRatio) * 100;
      bounds.x = (100 - bounds.width) / 2;
    }
    
    setViewBounds(bounds);
    setCrop(bounds); 
    setIsReady(true);
  };

  const handleMouseDown = (corner: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const startX = e.clientX;
    const startY = e.clientY;
    const startCrop = { ...crop };
    const container = containerRef.current?.getBoundingClientRect();
    if (!container) return;

    const handleMouseMove = (moveEvent: MouseEvent) => {
      const deltaX = ((moveEvent.clientX - startX) / container.width) * 100;
      const deltaY = ((moveEvent.clientY - startY) / container.height) * 100;

      let newCrop = { ...startCrop };

      const minX = viewBounds.x;
      const maxX = viewBounds.x + viewBounds.width;
      const minY = viewBounds.y;
      const maxY = viewBounds.y + viewBounds.height;

      if (corner === "tl") {
        newCrop.x = Math.max(minX, Math.min(startCrop.x + deltaX, startCrop.x + startCrop.width - 5));
        newCrop.width = startCrop.width - (newCrop.x - startCrop.x);
        newCrop.y = Math.max(minY, Math.min(startCrop.y + deltaY, startCrop.y + startCrop.height - 5));
        newCrop.height = startCrop.height - (newCrop.y - startCrop.y);
      } else if (corner === "tr") {
        newCrop.width = Math.max(5, Math.min(startCrop.width + deltaX, maxX - startCrop.x));
        newCrop.y = Math.max(minY, Math.min(startCrop.y + deltaY, startCrop.y + startCrop.height - 5));
        newCrop.height = startCrop.height - (newCrop.y - startCrop.y);
      } else if (corner === "bl") {
        newCrop.x = Math.max(minX, Math.min(startCrop.x + deltaX, startCrop.x + startCrop.width - 5));
        newCrop.width = startCrop.width - (newCrop.x - startCrop.x);
        newCrop.height = Math.max(5, Math.min(startCrop.height + deltaY, maxY - startCrop.y));
      } else if (corner === "br") {
        newCrop.width = Math.max(5, Math.min(startCrop.width + deltaX, maxX - startCrop.x));
        newCrop.height = Math.max(5, Math.min(startCrop.height + deltaY, maxY - startCrop.y));
      } else if (corner === "center") {
        newCrop.x = Math.max(minX, Math.min(startCrop.x + deltaX, maxX - startCrop.width));
        newCrop.y = Math.max(minY, Math.min(startCrop.y + deltaY, maxY - startCrop.height));
      }

      setCrop(newCrop);
    };

    const handleMouseUp = () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  const getCroppedData = async (): Promise<string | null> => {
    if (!imageRef.current || !isReady) return null;
    const canvas = document.createElement("canvas");
    
    const pixelX = crop.width && viewBounds.width ? ((crop.x - viewBounds.x) / viewBounds.width) * imgSize.width : 0;
    const pixelY = crop.height && viewBounds.height ? ((crop.y - viewBounds.y) / viewBounds.height) * imgSize.height : 0;
    const pixelW = crop.width && viewBounds.width ? (crop.width / viewBounds.width) * imgSize.width : imgSize.width;
    const pixelH = crop.height && viewBounds.height ? (crop.height / viewBounds.height) * imgSize.height : imgSize.height;
    
    canvas.width = Math.max(1, pixelW);
    canvas.height = Math.max(1, pixelH);
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;
    
    ctx.drawImage(
      imageRef.current,
      pixelX, pixelY, pixelW, pixelH,
      0, 0, canvas.width, canvas.height
    );
    
    return canvas.toDataURL("image/jpeg", 0.95);
  };

  const getCroppedBlob = async (): Promise<Blob | null> => {
    if (!imageRef.current || !isReady) return null;
    const canvas = document.createElement("canvas");
    
    const pixelX = crop.width && viewBounds.width ? ((crop.x - viewBounds.x) / viewBounds.width) * imgSize.width : 0;
    const pixelY = crop.height && viewBounds.height ? ((crop.y - viewBounds.y) / viewBounds.height) * imgSize.height : 0;
    const pixelW = crop.width && viewBounds.width ? (crop.width / viewBounds.width) * imgSize.width : imgSize.width;
    const pixelH = crop.height && viewBounds.height ? (crop.height / viewBounds.height) * imgSize.height : imgSize.height;
    
    canvas.width = Math.max(1, pixelW);
    canvas.height = Math.max(1, pixelH);
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;
    
    ctx.drawImage(
      imageRef.current,
      pixelX, pixelY, pixelW, pixelH,
      0, 0, canvas.width, canvas.height
    );
    
    return new Promise((resolve) => {
      canvas.toBlob((blob) => resolve(blob), "image/jpeg", 0.95);
    });
  };

  React.useImperativeHandle(ref, () => ({
    getCroppedBlob,
    getCroppedData
  }), [imgSize, crop, viewBounds, isReady]);

  const handleInternalSave = async () => {
    const data = await getCroppedData();
    if (data && onSave) onSave(data);
  };

  return (
    <div className={cn(
      "flex flex-col overflow-hidden",
      !isInline ? "fixed inset-0 z-[100] bg-zinc-950" : "w-full h-full bg-zinc-50/50",
      className
    )}>
      {/* Header for Modal usage */}
      {!isInline && (
        <div className="flex items-center justify-between p-4 border-b border-white/10 bg-zinc-900/50 backdrop-blur-xl">
           <h3 className="text-white font-black uppercase tracking-widest text-xs">Biên tập ảnh</h3>
           <button onClick={onCancel} className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-rose-500 transition-colors">
              <X size={16} />
           </button>
        </div>
      )}

      <div ref={containerRef} className="relative flex-1 overflow-hidden flex items-center justify-center">
          <img 
            ref={imageRef}
            src={image} 
            onLoad={handleImageLoad}
            className="w-full h-full object-contain pointer-events-none select-none opacity-40 shadow-inner"
          />

          {isReady && (
            <div className="absolute inset-0 z-20">
                <div className="absolute inset-0 bg-white/40 pointer-events-none" />
                <div 
                  className="absolute border-2 border-white shadow-[0_0_0_9999px_rgba(255,255,255,0.7)]"
                  style={{
                    left: `${crop.x}%`,
                    top: `${crop.y}%`,
                    width: `${crop.width}%`,
                    height: `${crop.height}%`,
                  }}
                >
                  <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 opacity-30 pointer-events-none">
                    <div className="border-r border-b border-white/70" />
                    <div className="border-r border-b border-white/70" />
                    <div className="border-b border-white/70" />
                    <div className="border-r border-b border-white/70" />
                    <div className="border-r border-b border-white/70" />
                    <div className="border-b border-white/70" />
                  </div>

                  <div className="absolute inset-0 pointer-events-auto">
                    <div onMouseDown={handleMouseDown("tl")} className="absolute -top-1 -left-1 w-8 h-8 cursor-nw-resize p-1 flex items-start justify-start z-30">
                      <div className="w-4 h-4 border-t-4 border-l-4 border-white rounded-tl-sm shadow-md" />
                    </div>
                    <div onMouseDown={handleMouseDown("tr")} className="absolute -top-1 -right-1 w-8 h-8 cursor-ne-resize p-1 flex items-start justify-end z-30">
                      <div className="w-4 h-4 border-t-4 border-r-4 border-white rounded-tr-sm shadow-md" />
                    </div>
                    <div onMouseDown={handleMouseDown("bl")} className="absolute -bottom-1 -left-1 w-8 h-8 cursor-sw-resize p-1 flex items-end justify-start z-30">
                      <div className="w-4 h-4 border-b-4 border-l-4 border-white rounded-bl-sm shadow-md" />
                    </div>
                    <div onMouseDown={handleMouseDown("br")} className="absolute -bottom-1 -right-1 w-8 h-8 cursor-se-resize p-1 flex items-end justify-end z-30">
                      <div className="w-4 h-4 border-b-4 border-r-4 border-white rounded-br-sm shadow-md" />
                    </div>
                    <div onMouseDown={handleMouseDown("center")} className="absolute inset-4 cursor-move active:bg-white/10 transition-colors" />
                  </div>
                </div>

                <img 
                  src={image}
                  className="absolute inset-0 w-full h-full object-contain pointer-events-none z-10"
                  style={{
                    clipPath: `inset(${crop.y}% ${100 - crop.x - crop.width}% ${100 - crop.y - crop.height}% ${crop.x}%)`
                  }}
                />
            </div>
          )}
      </div>

      {/* Footer for Modal usage */}
      {!isInline && (
        <div className="p-6 border-t border-white/10 bg-zinc-900/50 backdrop-blur-xl flex justify-center">
            <button 
              onClick={handleInternalSave}
              className="flex items-center gap-2 px-8 py-3 bg-primary text-white font-black uppercase tracking-widest text-[11px] rounded-full shadow-2xl shadow-primary/40 hover:scale-105 transition-all"
            >
              <Check size={16} strokeWidth={3} />
              Lưu thay đổi
            </button>
        </div>
      )}
    </div>
  );
});

ImageEditor.displayName = "ImageEditor";
