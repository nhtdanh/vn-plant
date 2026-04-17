import { useState, useEffect, useRef } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { contributeImage } from "@/services/taxon.service";
import { Upload, X } from "lucide-react";
import { toast } from "sonner";
import { useAuthStore } from "@/store/useAuthStore";
import { cn } from "@/lib/utils";
import { ImageEditor } from "@/components/shared/ImageEditor";
import type { ImageEditorRef } from "@/components/shared/ImageEditor";

interface ContributionModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onFileCleared?: () => void;
  taxonId: number;
  onSuccess?: () => void;
  initialFile?: File | null;
  showCloseButton?: boolean;
}

/**
 * ContributionModal - Unified console for uploading and editing in a single view
 */
export function ContributionModal({
  isOpen,
  onOpenChange,
  onFileCleared,
  taxonId,
  onSuccess,
  initialFile = null,
  showCloseButton = true,
}: ContributionModalProps) {
  const { user } = useAuthStore();
  const editorRef = useRef<ImageEditorRef>(null);
  
  const [file, setFile] = useState<File | null>(initialFile);
  const [tempBlob, setTempBlob] = useState<string | null>(null);
  const [caption, setCaption] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  // Sync initialFile
  useEffect(() => {
    let objectUrl: string | null = null;
    if (isOpen && initialFile) {
      setFile(initialFile);
      objectUrl = URL.createObjectURL(initialFile);
      setTempBlob(objectUrl);
    }
    
    return () => {
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, [initialFile, isOpen]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      if (selectedFile.size > 5 * 1024 * 1024) {
        toast.error("Ảnh quá lớn (tối đa 5MB)");
        return;
      }
      setFile(selectedFile);
      const objectUrl = URL.createObjectURL(selectedFile);
      setTempBlob(objectUrl);
    }
  };

  const clearFile = () => {
    if (tempBlob) URL.revokeObjectURL(tempBlob);
    setFile(null);
    setTempBlob(null);
    onFileCleared?.();
  };

  const handleSubmit = async () => {
    let finalImageToUpload: File | null = null;

    try {
      setIsUploading(true);

      // 1. Get cropped image from the inline editor if visible
      if (editorRef.current && tempBlob) {
        if (typeof editorRef.current.getCroppedBlob === 'function') {
           const croppedBlob = await editorRef.current.getCroppedBlob();
           if (croppedBlob && croppedBlob.size > 0) {
             finalImageToUpload = new File([croppedBlob], "contribution.jpg", { type: "image/jpeg" });
           }
        }
      }
      
      if (!finalImageToUpload && file) {
        finalImageToUpload = file;
      }

      if (!finalImageToUpload) {
        toast.error("Vui lòng chọn ảnh");
        return;
      }

      // 2. Upload
      const formData = new FormData();
      formData.append("image", finalImageToUpload);
      formData.append("taxonId", taxonId.toString());
      formData.append("caption", caption);
      formData.append("author", user?.displayName || "Ẩn danh");
      formData.append("license", "Copyright reserved");

      await contributeImage(formData);

      toast.success("Gửi đóng góp thành công!");
      onSuccess?.();
      handleClose();
    } catch (error) {
      console.error("Upload error:", error);
      toast.error("Gửi đóng góp thất bại. Vui lòng thử lại.");
    } finally {
      setIsUploading(false);
    }
  };

  const handleClose = () => {
    onOpenChange(false);
    setTimeout(() => {
      setFile(null);
      if (tempBlob) URL.revokeObjectURL(tempBlob);
      setTempBlob(null);
      setCaption("");
    }, 300);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent
        className="p-0 overflow-hidden bg-white border-none shadow-2xl rounded-xl sm:max-w-[400px] w-[95vw] transition-all duration-300"
        showCloseButton={showCloseButton && !isUploading}
      >
        <div className="p-0">
          <DialogHeader className="sr-only">
            <DialogTitle>Đóng góp hình ảnh</DialogTitle>
            <DialogDescription>Giao diện đóng góp và biên tập hình ảnh thực vật.</DialogDescription>
          </DialogHeader>

             <div className="flex flex-col">
               {/* 1. Main Workspace (Fixed 4:3 Slot like Hero) */}
               <div className="relative w-full overflow-hidden bg-white flex items-center justify-center p-3">
                  {!tempBlob ? (
                    <div className="w-full aspect-[4/3] flex items-center justify-center">
                       <label className="group relative flex flex-col items-center justify-center w-full h-full border-2 border-dashed border-zinc-200 rounded-xl hover:border-primary hover:bg-zinc-50/50 transition-all cursor-pointer overflow-hidden bg-zinc-50/20">
                        <div className="flex flex-col items-center justify-center transition-transform group-hover:-translate-y-1 duration-300">
                          <Upload className="w-8 h-8 text-zinc-300 group-hover:text-primary mb-3" />
                          <p className="text-[11px] font-sans font-black uppercase tracking-[0.2em] text-zinc-400 group-hover:text-primary">Tải ảnh đóng góp</p>
                          <p className="text-[9px] text-zinc-300 mt-2 font-bold uppercase tracking-widest">JPG, PNG, WEBP (Tối đa 5MB)</p>
                        </div>
                        <input type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
                      </label>
                    </div>
                  ) : (
                    <div className="w-full relative animate-in fade-in duration-500 flex items-center justify-center">
                       {/* Editor slot: FIXED 4:3 Frame */}
                       <div className="w-full aspect-[4/3] relative rounded-lg overflow-hidden border border-zinc-100 shadow-sm bg-zinc-50/50">
                         <ImageEditor 
                           ref={editorRef}
                           image={tempBlob}
                           isInline={true}
                           className="w-full h-full"
                         />
                         <button 
                           onClick={clearFile}
                           className="absolute top-2 right-2 z-30 text-white/90 hover:text-rose-500 transition-colors drop-shadow-md p-1"
                         >
                           <X size={20} strokeWidth={2.5} />
                         </button>
                       </div>
                    </div>
                  )}
               </div>

               {/* 2. Control Area (Always visible if image is present) */}
               <div className={cn(
                 "p-4 bg-white transition-all duration-500",
                 !tempBlob && "hidden"
               )}>
                  <div className="space-y-4">
                     <Input
                       placeholder="Ghi chú (bộ phận nào, chụp ở đâu, thông tin thêm...)"
                       value={caption}
                       onChange={(e) => setCaption(e.target.value)}
                       className="h-11 border-zinc-100 bg-zinc-50/50 rounded-lg focus:ring-primary/10 px-4 text-sm font-medium italic text-zinc-800 placeholder:text-zinc-400 shadow-inner"
                     />
                     <Button
                        onClick={handleSubmit}
                        disabled={isUploading}
                        className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-sans font-black uppercase tracking-[0.2em] text-[11px] rounded-lg shadow-xl shadow-primary/20 transition-all active:scale-[0.98]"
                      >
                        {isUploading ? "ĐANG GỬI..." : "ĐÓNG GÓP"}
                      </Button>
                  </div>
            </div>
         </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
