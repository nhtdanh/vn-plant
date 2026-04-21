import { useState, useEffect, useRef } from "react";
import { useAuthStore } from "@/store/useAuthStore";
import { userService } from "@/services/user.service";
import type { TaxonImage, PaginatedResponse } from "@/types";
import { 
  Image as ImageIcon, 
  Clock, 
  User as UserIcon,
  ExternalLink,
  Loader2,
  Camera,
  Check,
  X,
  Pencil
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { formatDate } from "@/utils/date.utils";

// profile - trang cá nhân của người dùng, tích hợp quản lý hồ sơ và đóng góp
export function Profile() {
  const { user, checkAuth } = useAuthStore();
  const [data, setData] = useState<PaginatedResponse<TaxonImage> | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  // trạng thái chỉnh sửa hồ sơ
  const [isEditing, setIsEditing] = useState(false);
  const [displayName, setDisplayName] = useState(user?.displayName || "");
  const [isUpdating, setIsUpdating] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const contributions = await userService.getMyContributions(1, 20);
        setData(contributions.data);
      } catch (error) {
        console.error("Failed to fetch contributions:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleUpdateProfile = async () => {
    if (!displayName.trim()) {
      toast.error("Tên hiển thị không được để trống");
      return;
    }
    try {
      setIsUpdating(true);
      await userService.updateMe({ displayName });
      await checkAuth();
      setIsEditing(false);
      toast.success("Đã cập nhật tên hiển thị");
    } catch (error) {
      toast.error("Cập nhật thất bại");
    } finally {
      setIsUpdating(false);
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setIsUploading(true);
      const formData = new FormData();
      formData.append("avatar", file);
      await userService.uploadAvatar(formData);
      await checkAuth();
      toast.success("Đã cập nhật ảnh đại diện");
    } catch (error) {
      toast.error("Tải ảnh lên thất bại");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-6 pt-6 pb-20">
      {/* phần tiêu đề người dùng */}
      <section className="flex flex-col md:flex-row items-center md:items-start gap-8 pb-4">
        <div className="relative group shrink-0">
          <div className="w-28 h-28 rounded-lg bg-zinc-100 flex items-center justify-center text-zinc-300 overflow-hidden border-2 border-zinc-100 shadow-sm relative">
             {user?.avatarUrl ? (
               <img src={user.avatarUrl} alt="Avatar" className="w-full h-full object-cover" />
             ) : (
               <UserIcon size={40} strokeWidth={1} />
             )}
             
             {isUploading && (
                <div className="absolute inset-0 bg-white/80 flex items-center justify-center">
                   <Loader2 size={20} className="animate-spin text-primary" />
                </div>
             )}
          </div>
          
          <button 
            onClick={() => fileInputRef.current?.click()}
            className="absolute -bottom-2 -right-2 w-8 h-8 bg-zinc-700 text-white rounded-md flex items-center justify-center shadow-lg hover:bg-primary transition-all z-10"
          >
             <Camera size={14} />
          </button>
          
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleFileChange} 
            className="hidden" 
            accept="image/*" 
          />
        </div>

        <div className="text-center md:text-left space-y-3 flex-1 pt-1">
           <div className="space-y-1">
              {isEditing ? (
                 <div className="flex items-center gap-2 max-w-sm mx-auto md:mx-0">
                    <Input 
                       value={displayName}
                       onChange={(e) => setDisplayName(e.target.value)}
                       className="h-8 text-xs font-bold rounded-md border-zinc-200 focus:ring-primary/10"
                       autoFocus
                    />
                    <Button onClick={handleUpdateProfile} disabled={isUpdating} size="icon" className="h-8 w-8 shrink-0 bg-emerald-600 hover:bg-emerald-700 rounded-md">
                       {isUpdating ? <Loader2 size={14} className="animate-spin" /> : <Check size={14} />}
                    </Button>
                    <Button onClick={() => { setIsEditing(false); setDisplayName(user?.displayName || ""); }} variant="outline" size="icon" className="h-8 w-8 shrink-0 rounded-md">
                       <X size={14} />
                    </Button>
                 </div>
              ) : (
                 <h1 className="text-3xl font-sans font-bold uppercase tracking-tighter text-zinc-700 leading-none flex items-center gap-3 justify-center md:justify-start">
                    {user?.displayName}
                    <button
                      onClick={() => setIsEditing(true)}
                      className="text-zinc-300 hover:text-primary transition-colors p-1"
                      title="Chỉnh sửa tên"
                    >
                      <Pencil size={18} />
                    </button>
                 </h1>
              )}
           </div>
           
           <div className="flex flex-wrap items-center gap-4 justify-center md:justify-start">
              <div className="text-zinc-400 font-bold text-[11px] uppercase tracking-widest">
                {user?.email}
              </div>
           </div>
        </div>
        
        <div className="shrink-0 flex gap-2">
           {/* nút chỉnh sửa cũ đã được thay thế bằng biểu tượng bên cạnh tên */}
        </div>
      </section>

      {/* danh sách đóng góp */}
      <section className="mt-0">
        <div className="flex justify-end">
          <h2 className="text-xl font-sans font-bold uppercase tracking-tight text-zinc-700">
             Đóng góp {data?.items && data.items.length > 0 ? `(${data.items.length})` : ""}
          </h2>
        </div>

        <div className="min-h-[300px]">
           {isLoading ? (
             <div className="py-10 text-center"><Loader2 className="animate-spin mx-auto text-zinc-200 w-8 h-8" /></div>
           ) : data?.items.length === 0 ? (
              <div className="py-10 text-center space-y-4 bg-zinc-50/50 rounded-lg border border-dashed border-zinc-100">
                 <ImageIcon size={48} strokeWidth={1} className="mx-auto text-zinc-200" />
                <div className="space-y-1">
                   <h3 className="text-sm font-sans font-bold uppercase tracking-tight">Chưa có đóng góp</h3>
                   <p className="text-zinc-500 font-medium italic text-[11px]">Chia sẻ hình ảnh thực vật đầu tiên của bạn.</p>
                </div>
                <Button asChild className="bg-primary hover:bg-primary/90 text-white rounded-md px-6 font-bold uppercase tracking-widest text-[9px] h-8 shadow-sm">
                   <Link to="/browse">KHÁM PHÁ</Link>
                </Button>
              </div>
           ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data?.items.map((image) => (
                  <div key={image.id} className="group relative bg-zinc-50/80 hover:bg-zinc-100 p-2 rounded-lg border border-zinc-100 transition-all duration-300 flex items-center gap-4">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-md overflow-hidden bg-zinc-200 shrink-0 border border-zinc-50">
                      <img src={image.url} alt="Contribution" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    
                    <div className="flex-1 min-w-0 h-16 sm:h-20 flex flex-col py-0.5">
                      <div className="flex items-baseline gap-2 mb-0.5">
                        <h4 className="text-[13px] font-sans font-bold italic text-zinc-700 truncate">
                          {(image as any).taxon?.canonicalName || (image as any).taxon?.scientificName}
                        </h4>
                        <span className="text-[9px] font-sans font-bold uppercase tracking-tight text-zinc-300 shrink-0">
                          {(image as any).taxon?.vietnameseName}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-3 mb-1">
                        <div className="flex items-center gap-1.5 text-[9px] font-sans font-bold text-zinc-400 uppercase tracking-widest">
                          <Clock size={10} />
                          {formatDate(image.createdAt)}
                        </div>
                        <Link 
                          to={`/plant/${(image as any).taxon?.slug}`} 
                          className="text-[9px] text-zinc-400 font-bold uppercase tracking-widest hover:text-primary transition-colors flex items-center gap-1"
                        >
                          Chi tiết <ExternalLink size={10} />
                        </Link>
                      </div>

                      <div className="min-w-0 space-y-0.5">
                        <p className="text-[10px] text-zinc-500 font-medium line-clamp-1 pr-10">
                          Mô tả: {image.caption || "Đóng góp cộng đồng"}
                        </p>

                        {image.status === 'rejected' && image.recordNote && (
                          <p className="text-[10px] text-rose-500 font-bold leading-tight line-clamp-1 pr-10">
                            Lý do: {image.recordNote}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="absolute top-2 right-2 flex flex-col items-end gap-1">
                       <span className={cn(
                         "px-2 py-0.5 rounded-full text-[8px] font-sans font-black uppercase tracking-tighter border",
                         image.status === 'pending' ? "bg-amber-50 text-amber-600 border-amber-100" :
                         image.status === 'approved' ? "bg-emerald-50 text-emerald-600 border-emerald-100" : 
                         "bg-rose-50 text-rose-600 border-rose-100"
                       )}>
                          {image.status === 'pending' ? 'CHỜ DUYỆT' : image.status === 'approved' ? 'ĐÃ DUYỆT' : 'TỪ CHỐI'}
                       </span>
                    </div>
                  </div>
                ))}
              </div>
           )}
        </div>
      </section>
    </div>
  );
}
