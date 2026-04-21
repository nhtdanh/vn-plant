import { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useAuthStore } from "@/store/useAuthStore";
import { authService } from "@/services/auth.service";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Mail, Lock } from "lucide-react";
import { toast } from "sonner";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const login = useAuthStore((state) => state.login);

  // lấy đường dẫn trang trước đó từ trạng thái vị trí (do authlayout hoặc liên kết truyền vào)
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const data = await authService.login({ email, password });
      login(data.user, data.accessToken);
      toast.success("Đăng nhập thành công");

      // logic điều hướng sau khi đăng nhập: admin vào dashboard, thành viên vào trang cũ
      if (data.user.role === "admin") {
        navigate("/admin", { replace: true });
      } else {
        navigate(from, { replace: true });
      }
    } catch (err: any) {
      const msg =
        err.response?.data?.message ||
        "Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin.";
      toast.error(msg);
    } finally {
      setIsLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.05,
      } as const,
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" } as const,
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full"
    >
      <motion.div variants={itemVariants} className="mb-8 text-center">
        <h2 className="text-2xl font-sans font-black uppercase tracking-[0.1em] text-primary">
          ĐĂNG NHẬP
        </h2>
      </motion.div>

      {/* biểu mẫu đăng nhập */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <motion.div variants={itemVariants} className="space-y-4">
          <div className="group">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-muted-foreground group-focus-within:text-primary transition-colors">
                <Mail size={16} />
              </div>
              <Input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="h-12 pl-10 bg-zinc-50 border-none shadow-inner focus:bg-white focus:ring-2 focus:ring-primary/10 transition-all rounded-md text-sm font-medium text-zinc-800 placeholder:text-zinc-400"
              />
            </div>
          </div>

          <div className="group">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-muted-foreground group-focus-within:text-primary transition-colors">
                <Lock size={16} />
              </div>
              <Input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Mật khẩu"
                className="h-12 pl-10 bg-zinc-50 border-none shadow-inner focus:bg-white focus:ring-2 focus:ring-primary/10 transition-all rounded-md text-sm font-medium text-zinc-800 placeholder:text-zinc-400"
              />
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="pt-2">
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full h-12 bg-primary hover:bg-primary-hover text-white rounded-md shadow-md shadow-primary/10 transition-all active:scale-[0.98] flex items-center justify-center text-xs font-bold uppercase tracking-[0.2em]"
          >
            {isLoading ? "Đang xử lý..." : "ĐĂNG NHẬP"}
          </Button>
        </motion.div>

        <motion.div variants={itemVariants} className="text-center pt-4">
          <p className="text-xs text-muted-foreground">
            Chưa có tài khoản?{" "}
            <Link
              to="/register"
              state={{ from: { pathname: from } }}
              className="font-bold text-primary hover:underline underline-offset-4 decoration-2"
            >
              Đăng ký
            </Link>
          </p>
        </motion.div>
      </form>
    </motion.div>
  );
}
