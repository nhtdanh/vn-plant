import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Eye, 
  Check, 
  X, 
  Clock, 
  User, 
  ImageIcon, 
  Database,
} from "lucide-react";
import type { TaxonImage, PaginatedResponse, ImageStatus } from "@/types";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { adminService } from "@/services/admin.service";
import { toast } from "sonner";

// adminimagereview - trang duyệt ảnh đóng góp từ người dùng
export function AdminImageReview() {
  const [data, setData] = useState<PaginatedResponse<TaxonImage> | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  // khôi phục bộ lọc từ localstorage nếu có
  const [activeTab, setActiveTab] = useState<string>(() => {
    return localStorage.getItem("admin_image_review_filter") || "pending";
  });

  const [selectedImage, setSelectedImage] = useState<TaxonImage | null>(null);
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const [isRejectDialogOpen, setIsRejectDialogOpen] = useState(false);
  const [rejectReason, setRejectReason] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  // lưu bộ lọc khi thay đổi
  useEffect(() => {
    localStorage.setItem("admin_image_review_filter", activeTab);
  }, [activeTab]);

  // lấy dữ liệu
  const fetchImages = async (page = 1) => {
    try {
      setIsLoading(true);
      const statusParam = activeTab === "all" ? undefined : (activeTab as ImageStatus);
      const res = await adminService.getPendingImages(page, 10, statusParam);
      setData(res);
    } catch (error) {
      toast.error("Không thể tải danh sách ảnh");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchImages(1);
  }, [activeTab]);

  const handleApprove = async (id: number) => {
    try {
      setIsProcessing(true);
      // cập nhật lạc quan (optimistic update): xóa khỏi giao diện ngay để tăng trải nghiệm người dùng
      if (data && activeTab === 'pending') {
        setData(prev => prev ? {
          ...prev,
          items: prev.items.filter(img => img.id !== id)
        } : null);
      }
      
      await adminService.reviewImage(id, 'approved');
      toast.success("Đã phê duyệt hình ảnh");
      
      // tải lại để đồng bộ chính xác với cơ sở dữ liệu
      fetchImages(data?.meta?.page);
    } catch (error) {
      toast.error("Phê duyệt thất bại");
      fetchImages(data?.meta?.page); // hoàn tác nếu lỗi
    } finally {
      setIsProcessing(false);
    }
  };

  const handleReject = async () => {
    if (!selectedImage || !rejectReason.trim()) return;
    
    const id = selectedImage.id;
    try {
      setIsProcessing(true);
      
      // cập nhật lạc quan (optimistic update): xóa khỏi giao diện ngay
      if (data && activeTab === 'pending') {
        setData(prev => prev ? {
          ...prev,
          items: prev.items.filter(img => img.id !== id)
        } : null);
      }

      await adminService.reviewImage(id, 'rejected', rejectReason);
      toast.success("Đã từ chối hình ảnh");
      setIsRejectDialogOpen(false);
      setRejectReason("");
      setSelectedImage(null);
      
      fetchImages(data?.meta?.page);
    } catch (error) {
      toast.error("Từ chối thất bại");
      fetchImages(data?.meta?.page); // Rollback
    } finally {
      setIsProcessing(false);
    }
  };

  const openZoom = (image: TaxonImage) => {
    setSelectedImage(image);
    setIsZoomOpen(true);
  };

  const openRejectDialog = (image: TaxonImage) => {
    setSelectedImage(image);
    setIsRejectDialogOpen(true);
  };

  const tabs = [
    { id: "pending", label: "Chờ duyệt", icon: Clock },
    { id: "approved", label: "Đã duyệt", icon: Check },
    { id: "rejected", label: "Từ chối", icon: X },
    { id: "all", label: "Tất cả", icon: Database },
  ];

  return (
    <div className="space-y-6">
      {/* phần tiêu đề */}
      <div className="h-14 flex items-center justify-between gap-4 mt-2">
        <div>
          <p className="text-3xl font-sans font-normal uppercase tracking-tight text-zinc-700">Quản lý hình ảnh</p>
        </div>
      </div>

      {/* bộ lọc - tinh gọn */}
      <div className="flex items-center justify-end -mt-8 mb-4">
        <div className="relative min-w-[160px]">
          <select 
            value={activeTab}
            onChange={(e) => setActiveTab(e.target.value)}
            className="w-full h-9 px-3 pr-8 rounded-sm border border-zinc-100 bg-white font-sans font-bold uppercase tracking-widest text-[9px] appearance-none focus:ring-0 focus:border-zinc-300 outline-none transition-all cursor-pointer text-zinc-500"
          >
            {tabs.map(tab => (
              <option key={tab.id} value={tab.id}>{tab.label}</option>
            ))}
          </select>
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400">
             <Clock size={14} />
          </div>
        </div>
      </div>

      {/* phần bảng */}
      <div className="bg-white rounded-sm border border-zinc-100 shadow-sm overflow-hidden">
        <Table>
          <TableHeader className="bg-zinc-50/50">
            <TableRow>
                <TableHead className="text-xs font-medium uppercase tracking-wider pl-6 py-2 text-zinc-500">Hình ảnh</TableHead>
                <TableHead className="text-xs font-medium uppercase tracking-wider py-2 text-zinc-500">Thông tin loài</TableHead>
                <TableHead className="text-xs font-medium uppercase tracking-wider py-2 text-zinc-500">Người đóng góp</TableHead>
                <TableHead className="text-xs font-medium uppercase tracking-wider py-2 text-zinc-500">Trạng thái</TableHead>
                <TableHead className="text-xs font-medium uppercase tracking-wider text-right pr-6 py-2 text-zinc-500">Thao tác</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <AnimatePresence>
              {isLoading ? (
                Array.from({ length: 5 }).map((_, i) => (
                  <TableRow key={`skeleton-${i}`}>
                    <TableCell className="pl-6 py-4"><div className="w-16 h-16 bg-zinc-100 animate-pulse rounded-sm" /></TableCell>
                    <TableCell className="py-4"><div className="space-y-2.5"><div className="h-4 w-40 bg-zinc-100 animate-pulse rounded" /><div className="h-3 w-24 bg-zinc-50 animate-pulse rounded" /></div></TableCell>
                    <TableCell className="py-4"><div className="flex items-center gap-3"><div className="w-8 h-8 rounded-full bg-zinc-100 animate-pulse" /><div className="space-y-1.5"><div className="h-3 w-16 bg-zinc-100 animate-pulse rounded" /><div className="h-2 w-20 bg-zinc-50 animate-pulse rounded" /></div></div></TableCell>
                    <TableCell className="py-4"><div className="h-5 w-20 bg-zinc-100 animate-pulse rounded" /></TableCell>
                    <TableCell className="text-right pr-6 py-4"><div className="flex justify-end gap-2"><div className="h-8 w-16 bg-zinc-100 animate-pulse rounded-sm" /><div className="h-8 w-16 bg-zinc-50 animate-pulse rounded-sm" /></div></TableCell>
                  </TableRow>
                ))
              ) : data?.items?.length === 0 ? (
                <TableRow key="empty-state">
                  <TableCell colSpan={5} className="h-64 text-center">
                    <div className="flex flex-col items-center justify-center text-zinc-400">
                      <ImageIcon size={48} strokeWidth={1} className="mb-4 opacity-20" />
                      <p className="text-sm font-medium text-zinc-500 uppercase tracking-wider">Không tìm thấy hình ảnh nào</p>
                    </div>
                  </TableCell>
                </TableRow>
              ) : (
                data?.items?.map((image) => (
                  <TableRow key={image.id} className="group transition-colors border-zinc-50 hover:bg-emerald-50/30">
                    <TableCell className="pl-6 py-2.5">
                      <div className="flex items-center gap-4">
                        <button 
                          onClick={() => openZoom(image)}
                          className="relative w-16 h-16 rounded-sm overflow-hidden border border-zinc-100 bg-zinc-50 cursor-zoom-in group-hover:shadow-md transition-all"
                        >
                          <img src={image.url} alt="Preview" className="w-full h-full object-cover" />
                          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                            <Eye size={16} className="text-white" />
                          </div>
                        </button>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-zinc-900 line-clamp-1">
                          {image.taxon?.vietnameseName || <span className="text-zinc-400 italic font-normal">Chưa cập nhật</span>}
                        </span>
                        <span className="text-[13px] text-zinc-500 mt-0.5 line-clamp-1">{image.taxon?.scientificName}</span>
                      </div>
                    </TableCell>
                    <TableCell className="py-2.5">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center overflow-hidden shrink-0">
                          {image.contributor?.avatarUrl ? (
                            <img src={image.contributor.avatarUrl} alt="Avatar" className="w-full h-full object-cover" />
                          ) : (
                            <span className="text-zinc-400 text-[10px] font-medium uppercase">{image.contributor?.displayName?.charAt(0) || image.contributor?.email?.charAt(0)}</span>
                          )}
                        </div>
                        <div className="flex flex-col max-w-[120px]">
                           <span className="text-xs font-medium text-zinc-800 truncate">{image.contributor?.displayName || "Ẩn danh"}</span>
                           <span className="text-[10px] text-zinc-400 lowercase truncate mt-0.5">{image.contributor?.email}</span>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="py-2.5">
                      {image.status === "pending" && (
                        <div className="flex items-center gap-1.5 text-amber-600">
                          <Clock size={12} />
                          <span className="text-[10px] font-bold uppercase tracking-wider">Chờ duyệt</span>
                        </div>
                      )}
                      {image.status === "approved" && (
                        <div className="flex items-center gap-1.5 text-emerald-600">
                          <Check size={12} />
                          <span className="text-[10px] font-bold uppercase tracking-wider">Đã duyệt</span>
                        </div>
                      )}
                      {image.status === "rejected" && (
                        <div className="flex items-center gap-1.5 text-rose-500">
                          <X size={12} />
                          <span className="text-[10px] font-bold uppercase tracking-wider">Từ chối</span>
                        </div>
                      )}
                    </TableCell>
                    <TableCell className="text-right pr-6 py-2.5">
                      <div className="flex items-center justify-end gap-2">
                        {image.status === "pending" ? (
                          <>
                            <Button
                              onClick={() => handleApprove(image.id)}
                              disabled={isProcessing}
                              className="bg-emerald-600 text-white font-bold text-[10px] uppercase tracking-wider px-3 h-8 rounded-sm hover:bg-emerald-700 transition-all shadow-none"
                            >
                              Duyệt
                            </Button>
                            <Button
                              onClick={() => openRejectDialog(image)}
                              disabled={isProcessing}
                              variant="outline"
                              className="bg-white text-rose-500 border-rose-100 font-bold text-[10px] uppercase tracking-wider px-3 h-8 rounded-sm hover:bg-rose-50 transition-all shadow-none"
                            >
                              Từ chối
                            </Button>
                          </>
                        ) : (
                          <Button
                            onClick={() => openZoom(image)}
                            variant="outline"
                            className="bg-zinc-50 text-zinc-500 font-bold text-[10px] uppercase tracking-wider px-3 h-8 rounded-sm hover:bg-zinc-100 transition-all shadow-none"
                          >
                            Xem lại
                          </Button>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </AnimatePresence>
          </TableBody>
        </Table>
        
        {/* thông tin phân trang */}
        {!isLoading && (data?.meta?.totalPages || 0) > 1 && (
          <div className="p-4 bg-zinc-50/30 border-t border-zinc-100 flex items-center justify-between">
            <span className="text-[11px] font-normal text-zinc-400 uppercase tracking-widest">
              Trang {data?.meta?.page} / {data?.meta?.totalPages}
            </span>
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                size="sm" 
                disabled={data?.meta?.page === 1 || isProcessing}
                onClick={() => data?.meta?.page && fetchImages(data.meta.page - 1)}
                className="h-8 text-[10px] font-normal uppercase tracking-widest hover:bg-emerald-50 hover:text-emerald-700"
              >
                Trước
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                disabled={data?.meta?.page === data?.meta?.totalPages || isProcessing}
                onClick={() => data?.meta?.page && fetchImages(data.meta.page + 1)}
                className="h-8 text-[10px] font-normal uppercase tracking-widest hover:bg-emerald-50 hover:text-emerald-700"
              >
                Sau
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* các hộp thoại */}
      
      {/* 1. hình ảnh phóng to (lightbox custom) */}
      <AnimatePresence>
        {isZoomOpen && selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-10 cursor-default"
            onClick={() => setIsZoomOpen(false)}
          >
            {/* nút đóng */}
            <motion.button
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="absolute top-6 right-6 text-white/50 hover:text-white z-[110] p-2 hover:bg-white/10 rounded-full transition-colors"
              onClick={() => setIsZoomOpen(false)}
            >
              <X size={32} />
            </motion.button>

            {/* vùng nội dung */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-7xl h-full flex flex-col items-center justify-center gap-6"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage.url} 
                alt="Full preview" 
                className="max-w-full max-h-[82vh] object-contain shadow-2xl rounded-sm"
              />

              {/* thông tin metadata bên dưới ảnh */}
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="flex flex-wrap items-center justify-center gap-3 text-white/40 text-[10px] font-sans font-bold uppercase tracking-widest">
                  {selectedImage.caption && (
                    <span className="italic text-white/70 font-normal normal-case text-sm">
                      "{selectedImage.caption}"
                    </span>
                  )}
                  {selectedImage.caption && (selectedImage.author || selectedImage.license) && (
                    <span className="opacity-20 px-1">|</span>
                  )}
                  <div className="flex items-center gap-4">
                    {selectedImage.author && (
                      <span className="flex items-center gap-2">
                        <User size={10} className="text-white/30" />
                        {selectedImage.author}
                      </span>
                    )}
                    {selectedImage.author && selectedImage.license && (
                      <span className="opacity-20">•</span>
                    )}
                    {selectedImage.license && (
                      <span className="bg-white/5 px-2 py-0.5 rounded-sm">{selectedImage.license}</span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. hộp thoại từ chối kèm lý do */}
      <Dialog 
        open={isRejectDialogOpen} 
        onOpenChange={(open) => {
          setIsRejectDialogOpen(open);
          if (!open) {
            setRejectReason("");   // cài lại lý do từ chối
            setSelectedImage(null); // cài lại ảnh đang chọn
          }
        }}
      >
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Từ chối hình ảnh</DialogTitle>
            <DialogDescription>Vui lòng cung cấp lý do từ chối để thông báo cho người đóng góp.</DialogDescription>
          </DialogHeader>
          <div className="py-4 space-y-4">
            <Input 
              placeholder="Ví dụ: Ảnh bị mờ, Sai loài thực vật..." 
              value={rejectReason}
              onChange={(e) => setRejectReason(e.target.value)}
              className="h-12"
              autoFocus
            />
          </div>
          <DialogFooter className="gap-2">
            <Button 
               variant="outline" 
               className="font-normal uppercase tracking-widest text-[10px] h-10 px-6 rounded-sm text-zinc-500 hover:bg-zinc-50 hover:text-zinc-700"
               onClick={() => setIsRejectDialogOpen(false)} 
               disabled={isProcessing}
            >
               Hủy
            </Button>
            <Button 
               className="bg-zinc-100 text-zinc-600 font-normal uppercase tracking-widest text-[10px] h-10 px-6 rounded-sm hover:bg-zinc-200 transition-all border border-zinc-200"
               onClick={handleReject}
               disabled={isProcessing}
            >
               Xác nhận từ chối
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
