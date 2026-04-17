import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Search,
  Filter,
  Edit3,
  ExternalLink,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  Database,
  Trash2,
  Leaf,
  ChevronDown,
  X
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { adminService } from "@/services/admin.service";
import type { Taxon } from "@/types";
import { ConfirmDialog } from "@/components/shared/ConfirmDialog";

/**
 * TaxonManagement - Trang quản lý danh sách loài (Admin Giai đoạn 1)
 * Tập trung vào lọc, tìm kiếm và xem nhanh trạng thái dữ liệu của 10.000+ bản ghi
 */
export function TaxonManagement() {
  const [taxons, setTaxons] = useState<Taxon[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [filterRank, setFilterRank] = useState<string>("all");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  // Advanced Filter States
  const [filterGroup, setFilterGroup] = useState<string>("all");
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [filterQuality, setFilterQuality] = useState<string>("all");

  // State cho Confirm Dialog
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const fetchTaxons = async (_page: number) => {
    setIsLoading(true);
    try {
      const result = await adminService.getTaxons({
        page: _page,
        limit: 10,
        q: searchQuery,
        rank: filterRank === "all" ? undefined : filterRank,
        plantGroup: filterGroup === "all" ? undefined : filterGroup,
        status: filterStatus === "all" ? undefined : filterStatus,
        hasImage: 
          filterQuality === "with-image" ? true : 
          filterQuality === "missing-image" ? false : undefined,
        hasDescription: 
          filterQuality === "with-desc" ? true : 
          filterQuality === "missing-desc" ? false : undefined,
      });

      if (result) {
        setTaxons(result.items || []);
        setTotalPages(result.meta?.totalPages || 1);
        setTotalItems(result.meta?.total || 0);
      }
    } catch (error) {
      toast.error("Không thể tải danh sách loài");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!deleteId) return;
    const idToDelete = deleteId;
    setIsDeleting(true);
    try {
      // Optimistic update: Xóa khỏi danh sách và giảm tổng số bản ghi ngay lập tức
      setTaxons(prev => prev.filter(t => t.id !== idToDelete));
      setTotalItems(prev => prev - 1);

      await adminService.deleteTaxon(idToDelete);
      toast.success("Xóa thành công");
      setDeleteId(null);
      // Load lại để đảm bảo đồng bộ phân trang chính xác
      fetchTaxons(currentPage);
    } catch (error: any) {
      const msg = error.response?.data?.message || "Xóa thất bại (Loài có thể đang có loài con hoặc dữ liệu ràng buộc)";
      toast.error(msg);
      fetchTaxons(currentPage); // Rollback nếu lỗi
    } finally {
      setIsDeleting(false);
    }
  };

  useEffect(() => {
    fetchTaxons(currentPage);
  }, [currentPage, filterRank, filterGroup, filterStatus, filterQuality]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentPage(1);
    fetchTaxons(1);
  };

  return (
    <div className="space-y-6 pb-10">
      {/* Header */}
      <div className="h-14 flex items-center justify-between gap-4 mt-2">
        <div className="flex flex-col">
          <h1 className="text-3xl font-sans font-normal uppercase tracking-tight text-zinc-700">
            Quản lý thực vật
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <Link to="/admin/taxons/new">
            <Button className="bg-emerald-50 text-emerald-800 font-normal uppercase tracking-widest text-[10px] h-10 px-6 rounded-sm hover:bg-emerald-100 transition-all">
              Thêm mới
            </Button>
          </Link>
        </div>
      </div>

      {/* Filters & Search Bar */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <form onSubmit={handleSearch} className="md:col-span-6 relative group">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-emerald-600 transition-colors"
            size={18}
          />
          <Input
            placeholder="Tìm theo tên khoa học hoặc tên Việt..."
            className="pl-12 h-11 bg-white border-zinc-200 rounded-sm focus:ring-4 focus:ring-emerald-600/10 transition-all text-sm font-normal"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>

        <div className="md:col-span-3">
          <select
            className="w-full h-11 px-4 bg-white border border-zinc-200 rounded-sm focus:outline-none focus:ring-4 focus:ring-emerald-600/10 text-xs font-normal uppercase tracking-widest appearance-none cursor-pointer"
            value={filterRank}
            onChange={(e) => setFilterRank(e.target.value)}
          >
            <option value="all">Tất cả cấp bậc</option>
            <option value="kingdom">Giới (Kingdom)</option>
            <option value="phylum">Ngành (Phylum)</option>
            <option value="taxonomicClass">Lớp (Class)</option>
            <option value="order">Bộ (Order)</option>
            <option value="family">Họ (Family)</option>
            <option value="genus">Chi (Genus)</option>
            <option value="species">Loài (Species)</option>
            <option value="subspecies">Dưới loài (Subspecies)</option>
            <option value="variety">Biến loại</option>
          </select>
        </div>

        <div className="md:col-span-3">
          <Button
            variant="outline"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className={cn(
              "w-full h-11 rounded-sm border-zinc-200 text-zinc-500 font-normal uppercase tracking-widest text-[10px] gap-2 transition-all hover:bg-emerald-50 hover:text-emerald-700",
              isFilterOpen && "bg-zinc-50 border-zinc-300 text-zinc-900 shadow-inner",
              (filterGroup !== "all" || filterStatus !== "all" || filterQuality !== "all") && "border-emerald-200 text-emerald-700 bg-emerald-50"
            )}
          >
            <Filter size={16} /> 
            { (filterGroup !== "all" || filterStatus !== "all" || filterQuality !== "all") ? "Đã lọc" : "Lọc nâng cao" }
            <ChevronDown size={14} className={cn("ml-auto transition-transform duration-300", isFilterOpen && "rotate-180")} />
          </Button>
        </div>
      </div>

      {/* Persistent Smart Filter Bar (Horizontal) */}
      <AnimatePresence>
        {isFilterOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="bg-zinc-50/50 p-6 rounded-sm border border-zinc-100 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 px-1">Nhóm thực vật</label>
                  <select
                    className="w-full h-10 px-4 bg-white border border-zinc-200 rounded-sm text-xs font-normal uppercase tracking-widest outline-none focus:ring-2 focus:ring-emerald-600/10 focus:border-emerald-600/30 transition-all appearance-none cursor-pointer"
                    value={filterGroup}
                    onChange={(e) => setFilterGroup(e.target.value)}
                  >
                    <option value="all">Tất cả nhóm</option>
                    <option value="angiosperm">Hạt kín (Angiosperm)</option>
                    <option value="gymnosperm">Hạt trần (Gymnosperm)</option>
                    <option value="fern">Dương xỉ (Fern)</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 px-1">Trạng thái dữ liệu</label>
                  <select
                    className="w-full h-10 px-4 bg-white border border-zinc-200 rounded-sm text-xs font-normal uppercase tracking-widest outline-none focus:ring-2 focus:ring-emerald-600/10 focus:border-emerald-600/30 transition-all appearance-none cursor-pointer"
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                  >
                    <option value="all">Tất cả trạng thái</option>
                    <option value="published">Đã công bố</option>
                    <option value="draft">Bản nháp</option>
                    <option value="archived">Lưu trữ</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 px-1">Chất lượng nội dung</label>
                  <div className="flex gap-2">
                    <select
                      className="flex-1 h-10 px-4 bg-white border border-zinc-200 rounded-sm text-xs font-normal uppercase tracking-widest outline-none focus:ring-2 focus:ring-emerald-600/10 focus:border-emerald-600/30 transition-all appearance-none cursor-pointer"
                      value={filterQuality}
                      onChange={(e) => setFilterQuality(e.target.value)}
                    >
                      <option value="all">Mọi loại</option>
                      <option value="with-image">Đã có hình ảnh</option>
                      <option value="missing-image">Chưa có hình ảnh</option>
                      <option value="with-desc">Đã có mô tả</option>
                      <option value="missing-desc">Chưa có mô tả</option>
                    </select>
                    {(filterGroup !== "all" || filterStatus !== "all" || filterQuality !== "all") && (
                       <Button 
                          variant="ghost" 
                          size="icon"
                          onClick={() => {
                            setFilterGroup("all");
                            setFilterStatus("all");
                            setFilterQuality("all");
                          }}
                          className="h-10 w-10 text-zinc-400 hover:text-rose-600 hover:bg-rose-50 rounded-sm"
                       >
                          <X size={16} />
                       </Button>
                    )}
                  </div>
                </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content: Taxon Table */}
      <div className="bg-white rounded-sm border border-zinc-100 shadow-sm overflow-hidden">
        <Table>
          <TableHeader className="bg-zinc-50/50">
            <TableRow className="hover:bg-transparent border-zinc-100">
              <TableHead className="text-xs font-medium uppercase tracking-wider pl-6 py-4 text-zinc-500 w-[80px]">Ảnh</TableHead>
              <TableHead className="text-xs font-medium uppercase tracking-wider py-4 text-zinc-500">Tên loài</TableHead>
              <TableHead className="text-xs font-medium uppercase tracking-wider py-4 text-zinc-500">Phân loại</TableHead>
              <TableHead className="text-xs font-medium uppercase tracking-wider py-4 text-zinc-500">Trạng thái</TableHead>
              <TableHead className="text-xs font-medium uppercase tracking-wider text-right pr-6 py-4 text-zinc-500">Thao tác</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              Array.from({ length: 5 }).map((_, i) => (
                <TableRow key={i} className="animate-pulse">
                  <TableCell className="pl-6 py-2.5">
                    <div className="w-12 h-12 rounded-sm bg-zinc-100" />
                  </TableCell>
                  <TableCell className="py-4">
                    <div className="space-y-2">
                       <div className="h-4 w-40 bg-zinc-100 rounded" />
                       <div className="h-3 w-24 bg-zinc-50 rounded" />
                    </div>
                  </TableCell>
                  <TableCell className="py-4">
                    <div className="flex flex-col gap-1.5">
                       <div className="h-4 w-16 bg-zinc-100 rounded" />
                       <div className="h-3 w-20 bg-zinc-50 rounded" />
                    </div>
                  </TableCell>
                  <TableCell className="py-4">
                    <div className="h-5 w-20 bg-zinc-100 rounded" />
                  </TableCell>
                  <TableCell className="text-right pr-6 py-2.5">
                    <div className="h-9 w-9 bg-zinc-100 rounded ml-auto" />
                  </TableCell>
                </TableRow>
              ))
            ) : taxons.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="h-64 text-center">
                  <div className="flex flex-col items-center justify-center text-zinc-400">
                    <Database
                      size={48}
                      strokeWidth={1}
                      className="mb-4 opacity-20"
                    />
                    <p className="text-sm font-normal uppercase tracking-widest">
                      Không tìm thấy bản ghi nào
                    </p>
                  </div>
                </TableCell>
              </TableRow>
            ) : (
              taxons.map((taxon) => (
                <TableRow
                  key={taxon.id}
                  className="group hover:bg-emerald-50/30 transition-colors border-zinc-50"
                >
                  <TableCell className="pl-6 py-2.5">
                    <div className="w-12 h-12 rounded-sm overflow-hidden bg-zinc-100 border border-zinc-200 group-hover:scale-110 transition-transform duration-300">
                      {taxon.primaryImageUrl ? (
                        <img 
                          src={taxon.primaryImageUrl} 
                          alt={taxon.scientificName} 
                          className="w-full h-full object-cover" 
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-zinc-300">
                          <Leaf size={20} strokeWidth={1.5} />
                        </div>
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="py-4">
                    <div className="flex flex-col">
                      <p className="text-sm font-bold text-zinc-900 leading-tight">
                        {taxon.vietnameseName || <span className="text-zinc-400 italic font-normal">Chưa cập nhật</span>}
                      </p>
                      <p className="text-[13px] text-zinc-500 font-sans italic mt-1 leading-tight">
                        {taxon.scientificName}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell className="py-4">
                    <div className="flex flex-col gap-1.5 items-start">
                      <Badge
                        variant="outline"
                        style={{ 
                          backgroundColor: `var(--rank-${taxon.rank})`,
                          color: `var(--rank-${taxon.rank}-fg)`
                        }}
                        className="text-[9px] font-black uppercase tracking-[0.1em] rounded-sm py-0.5 px-2 border-none shadow-sm"
                      >
                        {taxon.rank}
                      </Badge>
                      <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-zinc-400">
                        {taxon.plantGroup}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="py-4">
                    <div className="flex flex-wrap items-center gap-3">
                       {taxon.status === "published" ? (
                         <div className="flex items-center gap-1.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-[11px] font-sans font-black uppercase tracking-[0.1em] text-emerald-800">
                              Công bố
                            </span>
                         </div>
                       ) : (
                         <div className="flex items-center gap-1.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-zinc-300" />
                            <span className="text-[11px] font-sans font-black uppercase tracking-[0.1em] text-zinc-500">
                              Bản nháp
                            </span>
                         </div>
                       )}
                       
                      <div
                        className={cn(
                          "px-2 py-0.5 rounded-sm text-[9px] font-black uppercase tracking-[0.1em] border",
                          taxon.primaryImageUrl 
                            ? "bg-blue-50/50 text-blue-700 border-blue-100" 
                            : "bg-zinc-50 text-zinc-500 border-zinc-200 opacity-80",
                        )}
                      >
                        {taxon.primaryImageUrl ? "Có ảnh" : "Thiếu ảnh"}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-right pr-6 py-2.5">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        to={`/plant/${taxon.slug}`}
                        target="_blank"
                      >
                        <Button
                          variant="ghost"
                          size="icon"
                          className="w-9 h-9 text-zinc-400 hover:text-emerald-700 hover:bg-emerald-50 rounded-sm"
                        >
                          <ExternalLink size={18} />
                        </Button>
                      </Link>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="w-9 h-9 text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100 rounded-sm"
                          >
                            <MoreVertical size={18} />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                          align="end"
                          className="w-48 p-2 rounded-sm border-zinc-100 shadow-xl"
                        >
                          <DropdownMenuItem 
                            asChild 
                            className="flex items-center gap-3 py-2.5 rounded-sm text-zinc-600 focus:text-emerald-700 cursor-pointer"
                          >
                            <Link to={`/admin/taxons/edit/${taxon.id}`}>
                              <Edit3 size={16} />{" "}
                              <span className="text-xs font-normal uppercase tracking-widest">
                                Chỉnh sửa
                              </span>
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem 
                            onClick={() => setDeleteId(taxon.id)}
                            className="flex items-center gap-3 py-2.5 rounded-sm text-rose-600 focus:text-rose-700 focus:bg-rose-50 cursor-pointer"
                          >
                            <Trash2 size={16} />{" "}
                            <span className="text-xs font-normal uppercase tracking-widest">
                              Xóa vĩnh viễn
                            </span>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>

        {/* Improved Pagination */}
        {!isLoading && totalItems > 0 && (
          <div className="p-6 bg-zinc-50/50 border-t border-zinc-100 flex items-center justify-between">
            <p className="text-[11px] font-sans font-bold text-zinc-400 uppercase tracking-widest">
              Hiển thị {taxons.length} / {totalItems} loài
            </p>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                className="w-10 h-10 rounded-sm border-zinc-200 hover:bg-emerald-50 hover:text-emerald-700"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((prev) => prev - 1)}
              >
                <ChevronLeft size={18} />
              </Button>
              <div className="flex items-center gap-1">
                {Array.from({ length: Math.min(5, totalPages) }).map((_, i) => (
                  <Button
                    key={i}
                    variant={currentPage === i + 1 ? "default" : "ghost"}
                    className={cn(
                      "w-10 h-10 rounded-sm font-bold font-mono text-sm",
                      currentPage === i + 1
                        ? "bg-emerald-600/90 text-white shadow-lg shadow-emerald-600/20"
                        : "text-zinc-500 hover:bg-emerald-50 hover:text-emerald-700",
                    )}
                    onClick={() => setCurrentPage(i + 1)}
                  >
                    {i + 1}
                  </Button>
                ))}
              </div>
              <Button
                variant="outline"
                size="icon"
                className="w-10 h-10 rounded-sm border-zinc-200 hover:bg-emerald-50 hover:text-emerald-700"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((prev) => prev + 1)}
              >
                <ChevronRight size={18} />
              </Button>
            </div>
          </div>
        )}
      </div>

      <ConfirmDialog 
        isOpen={!!deleteId}
        onClose={() => setDeleteId(null)}
        onConfirm={handleDelete}
        isLoading={isDeleting}
        title="Xóa bản ghi"
        description="Bản ghi này sẽ bị xóa vĩnh viễn khỏi hệ thống."
        variant="destructive"
      />
    </div>
  );
}
