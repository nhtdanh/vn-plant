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
  Users,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  UserCheck,
  UserX,
  Plus,
  Mail,
  Lock,
  User as UserIcon,
  Trash2,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { adminService } from "@/services/admin.service";
import type { User, UserStatus } from "@/types";
import { ConfirmDialog } from "@/components/shared/ConfirmDialog";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { formatDate } from "@/utils/date.utils";

const createUserSchema = z.object({
  email: z.string().email("Email không hợp lệ"),
  password: z.string().min(6, "Mật khẩu phải từ 6 ký tự"),
  displayName: z.string().min(2, "Tên hiển thị quá ngắn"),
});

type CreateUserForm = z.infer<typeof createUserSchema>;

// adminusermanagement - quản trị người dùng toàn diện (clean & minimalist version)
export function AdminUserManagement() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [isProcessing, setIsProcessing] = useState<string | null>(null);

  // trạng thái cho các hộp thoại (modal)
  const [confirmUser, setConfirmUser] = useState<{ id: string, status: UserStatus } | null>(null);
  const [isAddUserOpen, setIsAddUserOpen] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [deleteUserId, setDeleteUserId] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateUserForm>({
    resolver: zodResolver(createUserSchema),
  });

  const fetchUsers = async (page: number) => {
    setIsLoading(true);
    try {
      const response = await adminService.getUsers(page, 10, searchQuery);
      setUsers(response?.items || []);
      setTotalPages(response?.meta?.totalPages || 1);
      setTotalItems(response?.meta?.total || 0);
    } catch (error) {
      toast.error("Không thể tải danh sách người dùng");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers(currentPage);
  }, [currentPage]); // searchquery không cần vì handlesearch gọi fetchusers(1) thủ công

  const handleUpdateStatus = async () => {
    if (!confirmUser) return;
    try {
      setIsProcessing(confirmUser.id);
      await adminService.updateUserStatus(confirmUser.id, confirmUser.status);
      toast.success(`Tài khoản đã được ${confirmUser.status === "active" ? "kích hoạt" : "vô hiệu hóa"}`);
      setConfirmUser(null);
      fetchUsers(currentPage);
    } catch (error) {
      toast.error("Cập nhật trạng thái thất bại");
    } finally {
      setIsProcessing(null);
    }
  };

  const handleDeleteUser = async () => {
    if (!deleteUserId) return;
    try {
      setIsProcessing(deleteUserId);
      await adminService.deleteUser(deleteUserId);
      toast.success("Đã xóa tài khoản thành viên");
      setDeleteUserId(null);
      fetchUsers(currentPage);
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Xóa tài khoản thất bại");
    } finally {
      setIsProcessing(null);
    }
  };

  const handleCreateUser = async (data: CreateUserForm) => {
    try {
      setIsCreating(true);
      // chuẩn hóa email về chữ thường để đồng bộ logic auth
      const normalizedData = { 
        ...data, 
        email: data.email.toLowerCase().trim() 
      };
      await adminService.createUser(normalizedData);
      toast.success("Tạo tài khoản thành viên thành công");
      setIsAddUserOpen(false);
      reset();
      fetchUsers(1);
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Không thể tạo tài khoản");
    } finally {
      setIsCreating(false);
    }
  };

  const getStatusBadge = (status: UserStatus) => {
    return status === "active" ? (
      <Badge className="bg-emerald-50 text-emerald-700 border-emerald-100 shadow-none hover:bg-emerald-50 font-normal uppercase tracking-widest text-[9px] h-5 rounded-sm">
        Hoạt động
      </Badge>
    ) : (
      <Badge className="bg-rose-50 text-rose-700 border-rose-100 shadow-none hover:bg-rose-50 font-normal uppercase tracking-widest text-[9px] h-5 rounded-sm">
        Bị khóa
      </Badge>
    );
  };

  return (
    <div className="space-y-6 pb-10">
      {/* tiêu đề */}
      <div className="h-14 flex items-center justify-between gap-4 mt-2">
        <div className="flex flex-col">
          <h1 className="text-3xl font-sans font-normal uppercase tracking-tight text-zinc-700">
            Quản lý thành viên
          </h1>
        </div>
        <Button 
          onClick={() => setIsAddUserOpen(true)}
          className="h-10 px-5 bg-emerald-600 text-white hover:bg-emerald-700 rounded-sm font-bold uppercase tracking-widest text-[10px] shadow-lg shadow-emerald-700/10"
        >
          <Plus size={16} className="mr-2" /> Thêm thành viên
        </Button>
      </div>

      {/* thanh tìm kiếm */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <form className="md:col-span-12 relative group" onSubmit={(e) => { e.preventDefault(); setCurrentPage(1); fetchUsers(1); }}>
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-emerald-600 transition-colors"
            size={18}
          />
          <Input
            placeholder="Tìm theo tên hoặc email người dùng..."
            className="pl-12 h-11 bg-white border-zinc-200 rounded-sm focus:ring-4 focus:ring-emerald-600/10 transition-all text-sm font-normal"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>
      </div>

      {/* bảng người dùng */}
      <div className="bg-white rounded-sm border border-zinc-100 shadow-sm overflow-hidden">
        <Table>
          <TableHeader className="bg-zinc-50/50">
            <TableRow className="hover:bg-transparent border-zinc-100">
               <TableHead className="text-[11px] font-bold uppercase tracking-wider pl-6 py-3 text-zinc-500">Người dùng</TableHead>
               <TableHead className="text-[11px] font-bold uppercase tracking-wider py-3 text-zinc-500">Ngày tham gia</TableHead>
               <TableHead className="text-[11px] font-bold uppercase tracking-wider py-3 text-zinc-500">Trạng thái</TableHead>
               <TableHead className="text-[11px] font-bold uppercase tracking-wider text-right pr-6 py-3 text-zinc-500">Thao tác</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              Array.from({ length: 5 }).map((_, i) => (
                <TableRow key={i} className="animate-pulse">
                  <TableCell className="pl-6 py-3.5"><div className="flex gap-3"><div className="w-10 h-10 rounded-full bg-zinc-100" /><div className="space-y-2"><div className="h-4 w-32 bg-zinc-100 rounded" /><div className="h-3 w-40 bg-zinc-50 rounded" /></div></div></TableCell>
                  <TableCell className="py-3.5"><div className="h-4 w-20 bg-zinc-100 rounded" /></TableCell>
                  <TableCell className="py-3.5"><div className="h-6 w-20 bg-zinc-100 rounded" /></TableCell>
                  <TableCell className="pr-6 py-3.5 text-right"><div className="h-8 w-8 bg-zinc-100 rounded ml-auto" /></TableCell>
                </TableRow>
              ))
            ) : users.length === 0 ? (
               <TableRow>
                 <TableCell colSpan={4} className="h-64 text-center">
                    <div className="flex flex-col items-center justify-center text-zinc-400">
                       <Users size={48} strokeWidth={1} className="mb-4 opacity-10" />
                       <p className="text-[11px] font-bold uppercase tracking-widest text-zinc-500">Không có thành viên nào thỏa mãn tiêu chí</p>
                    </div>
                 </TableCell>
               </TableRow>
            ) : (
              users.map((user) => (
                <TableRow key={user.id} className="group hover:bg-zinc-50/40 transition-colors border-zinc-50">
                  <TableCell className="pl-6 py-3.5">
                    <div className="flex items-center gap-4">
                       <div className="w-10 h-10 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center overflow-hidden shrink-0 shadow-sm">
                          {user.avatarUrl ? (
                            <img src={user.avatarUrl} alt="Avatar" className="w-full h-full object-cover" />
                          ) : (
                            <span className="text-zinc-500 text-sm font-medium uppercase">{user.displayName?.charAt(0) || user.email.charAt(0)}</span>
                          )}
                       </div>
                        <div className="flex flex-col min-w-0">
                           <span className="text-sm text-zinc-900 truncate tracking-tight font-bold">{user.displayName || <span className="text-zinc-400 italic font-normal">Chưa cập nhật</span>}</span>
                           <span className="text-[12px] text-zinc-400 truncate lowercase mt-0.5">{user.email}</span>
                        </div>
                    </div>
                  </TableCell>
                  <TableCell className="py-3.5">
                    <span className="text-xs font-mono text-zinc-500">
                       {formatDate(user.createdAt)}
                    </span>
                  </TableCell>
                  <TableCell className="py-3.5">
                    {getStatusBadge(user.status)}
                  </TableCell>
                  <TableCell className="text-right pr-6 py-3.5">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          disabled={isProcessing === user.id}
                          className="w-9 h-9 text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100 rounded-sm"
                        >
                          <MoreVertical size={18} />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-56 p-2 rounded-sm border-zinc-100 shadow-xl">
                        <div className="px-3 py-2">
                           <p className="text-[9px] font-bold uppercase tracking-widest text-zinc-400">Quản lý tài khoản</p>
                        </div>

                        {user.status === 'active' ? (
                          <DropdownMenuItem 
                            onClick={() => setConfirmUser({ id: user.id, status: 'inactive' })}
                            className="flex items-center gap-3 py-2.5 rounded-sm text-rose-600 focus:text-rose-700 focus:bg-rose-50 cursor-pointer"
                          >
                             <UserX size={16} />
                             <span className="text-[11px] font-bold uppercase tracking-widest">Khóa tài khoản</span>
                          </DropdownMenuItem>
                        ) : (
                          <DropdownMenuItem 
                            onClick={() => setConfirmUser({ id: user.id, status: 'active' })}
                            className="flex items-center gap-3 py-2.5 rounded-sm text-emerald-600 focus:text-emerald-700 focus:bg-emerald-50 cursor-pointer"
                          >
                             <UserCheck size={16} />
                             <span className="text-[11px] font-bold uppercase tracking-widest">Kích hoạt lại</span>
                          </DropdownMenuItem>
                          )}

                          <div className="my-1 border-t border-zinc-100" />

                          <DropdownMenuItem 
                            onClick={() => setDeleteUserId(user.id)}
                            className="flex items-center gap-3 py-2.5 rounded-sm text-rose-600 focus:text-rose-700 focus:bg-rose-50 cursor-pointer"
                          >
                             <Trash2 size={16} />
                             <span className="text-[11px] font-bold uppercase tracking-widest">Xóa vĩnh viễn</span>
                          </DropdownMenuItem>
                       </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>

        {/* phân trang */}
        {!isLoading && totalItems > 0 && (
          <div className="p-6 bg-zinc-50 border-t border-zinc-100 flex items-center justify-between">
            <p className="text-[11px] text-zinc-400 uppercase tracking-widest font-bold">
              Hiển thị {users.length} / {totalItems} thành viên
            </p>
            <div className="flex items-center gap-3">
               <Button
                variant="outline"
                size="icon"
                className="w-10 h-10 rounded-sm border-zinc-200 hover:bg-white hover:text-emerald-700 shadow-sm"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(prev => prev - 1)}
              >
                <ChevronLeft size={18} />
              </Button>
               <div className="bg-white px-5 h-10 rounded-sm border border-zinc-200 flex items-center justify-center font-mono text-sm font-bold shadow-sm">
                  {currentPage} / {totalPages}
               </div>
              <Button
                variant="outline"
                size="icon"
                className="w-10 h-10 rounded-sm border-zinc-200 hover:bg-white hover:text-emerald-700 shadow-sm"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(prev => prev + 1)}
              >
                <ChevronRight size={18} />
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* hộp thoại thêm thành viên */}
      <Dialog 
        open={isAddUserOpen} 
        onOpenChange={(open) => {
          setIsAddUserOpen(open);
          if (!open) reset(); // cài lại form khi đóng hộp thoại
        }}
      >
        <DialogContent className="sm:max-w-[440px] p-0 overflow-hidden border-none rounded-sm shadow-2xl">
          <div className="p-8 space-y-8">
            <DialogHeader className="p-0 space-y-2">
              <DialogTitle className="text-2xl font-sans font-normal uppercase tracking-tight text-zinc-800">Thêm thành viên mới</DialogTitle>
              <DialogDescription className="text-xs uppercase tracking-widest font-medium text-zinc-400">Khởi tạo tài khoản cho biên tập viên mới</DialogDescription>
            </DialogHeader>

            <form id="create-user-form" onSubmit={handleSubmit(handleCreateUser)} className="space-y-5">
               <div className="space-y-4">
                  <div className="space-y-1.5">
                     <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 px-1">Tên hiển thị</label>
                     <div className="relative">
                        <UserIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" size={16} />
                        <Input 
                            {...register("displayName")}
                            placeholder="Họ và tên..."
                            className="h-11 pl-11 rounded-sm border-zinc-100 bg-zinc-50 focus:bg-white transition-all text-sm"
                        />
                     </div>
                     {errors.displayName && <p className="text-[10px] text-rose-500 font-bold uppercase mt-1 pl-1">{errors.displayName.message}</p>}
                  </div>

                  <div className="space-y-1.5">
                     <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 px-1">Địa chỉ Email</label>
                     <div className="relative">
                        <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" size={16} />
                        <Input 
                            {...register("email")}
                            placeholder="email@gmail.com"
                            className="h-11 pl-11 rounded-sm border-zinc-100 bg-zinc-50 focus:bg-white transition-all text-sm"
                        />
                     </div>
                     {errors.email && <p className="text-[10px] text-rose-500 font-bold uppercase mt-1 pl-1">{errors.email.message}</p>}
                  </div>

                  <div className="space-y-1.5">
                     <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 px-1">Mật khẩu khởi tạo</label>
                     <div className="relative">
                        <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" size={16} />
                        <Input 
                            {...register("password")}
                            type="password"
                            placeholder="••••••••"
                            className="h-11 pl-11 rounded-sm border-zinc-100 bg-zinc-50 focus:bg-white transition-all text-sm"
                        />
                     </div>
                     {errors.password && <p className="text-[10px] text-rose-500 font-bold uppercase mt-1 pl-1">{errors.password.message}</p>}
                  </div>
               </div>
            </form>

            <DialogFooter className="p-0 sm:justify-end gap-3">
              <Button
                type="button"
                variant="ghost"
                onClick={() => setIsAddUserOpen(false)}
                className="h-11 px-6 text-[11px] font-bold uppercase tracking-widest text-zinc-400 hover:text-zinc-900 border border-transparent hover:border-zinc-100"
              >
                Hủy bỏ
              </Button>
              <Button
                type="submit"
                form="create-user-form"
                disabled={isCreating}
                className="h-11 px-8 rounded-sm bg-emerald-600 text-white hover:bg-emerald-700 text-[11px] font-bold uppercase tracking-widest shadow-lg shadow-emerald-700/10"
              >
                Xác nhận
              </Button>
            </DialogFooter>
          </div>
        </DialogContent>
      </Dialog>

      <ConfirmDialog 
        isOpen={!!confirmUser}
        onClose={() => setConfirmUser(null)}
        onConfirm={handleUpdateStatus}
        isLoading={isProcessing === confirmUser?.id}
        title={confirmUser?.status === 'active' ? "Kích hoạt" : "Vô hiệu hóa"}
        description={confirmUser?.status === 'active' 
          ? "Bạn có muốn khôi phục quyền truy cập cho thành viên này?" 
          : "Tài khoản này sẽ bị tạm dừng quyền truy cập vào hệ thống."}
        confirmText={confirmUser?.status === 'active' ? "Kích hoạt" : "Vô hiệu hóa"}
        variant={confirmUser?.status === 'active' ? "emerald" : "destructive"}
      />
      <ConfirmDialog 
        isOpen={!!deleteUserId}
        onClose={() => setDeleteUserId(null)}
        onConfirm={handleDeleteUser}
        isLoading={isProcessing === deleteUserId}
        title="Xóa vĩnh viễn"
        description="Hành động này không thể hoàn tác. Mọi dữ liệu cá nhân của thành viên này sẽ bị xóa khỏi hệ thống."
        confirmText="Xác nhận xóa"
        variant="destructive"
      />
    </div>
  );
}
