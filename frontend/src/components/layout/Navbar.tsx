import { useState } from "react";
import {
  NavLink,
  Link,
  useSearchParams,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { useAuthStore } from "@/store/useAuthStore";
import { motion, AnimatePresence } from "framer-motion";
import { SearchBar } from "@/components/ui/SearchBar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import {
  User as UserIcon,
  Menu,
  X,
  Search,
  LogOut,
  LayoutDashboard,
  UserCircle,
} from "lucide-react";

export function Navbar() {
  const { isAuthenticated, user, logout } = useAuthStore();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const currentQuery = searchParams.get("q") || "";

  const navLinks = [
    { name: "Trang chủ", href: "/" },
    { name: "Khám phá", href: "/browse" },
  ];

  const isLinkActive = (href: string) => {
    if (href === "/browse") {
      return (
        location.pathname === "/browse" ||
        location.pathname.startsWith("/plant/")
      );
    }
    return location.pathname === href;
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-primary border-b-2 border-white/20 text-white">
      <div className="max-w-360 mx-auto border-x-2 border-white/10">
        <div className="flex h-13 items-center">
          {/* 1. LOGO CELL */}
          <div className="flex items-center h-full px-4 sm:px-6 md:px-10 border-r-2 border-white/20 shrink-0">
            <Link to="/" className="flex items-center group">
              <img
                src="/images/logo.png"
                alt="VN-Plant Logo"
                className="h-8 w-auto object-contain"
              />
            </Link>
          </div>

          {/* 2. NAVIGATION LINKS (Desktop Only) */}
          <div className="hidden md:flex items-center justify-center flex-1 h-full px-6 gap-6 lg:gap-8 border-r-2 border-white/20 flex-nowrap">
            {navLinks.map((link) => {
              const active = isLinkActive(link.href);
              return (
                <NavLink
                  key={link.name}
                  to={link.href}
                  className={`
                    relative flex items-center h-full text-[12px] font-sans font-semibold uppercase tracking-widest transition-colors shrink-0 whitespace-nowrap
                    ${active ? "text-white" : "text-white/80 hover:text-white"}
                  `}
                >
                  <div className="relative h-full flex items-center">
                    {link.name}
                    {active && (
                      <motion.div
                        layoutId="nav-underline"
                        className="absolute bottom-4 left-0 right-0 h-0.5 bg-white z-10"
                      />
                    )}
                  </div>
                </NavLink>
              );
            })}
          </div>

          {/* 3. SEARCH CELL (Expandable Desktop + Desktop Only Logic) */}
          <div className="flex-1 md:flex-none flex items-center h-full">
            <motion.div
              className="hidden md:flex items-center justify-center h-full md:border-r-2 border-white/20"
              initial={false}
              animate={{
                width: isSearchOpen ? "320px" : "72px",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="w-full h-full flex items-center justify-center px-4">
                {!isSearchOpen ? (
                  <button
                    onClick={() => setIsSearchOpen(true)}
                    className="flex items-center justify-center w-full h-full text-white/80 hover:text-white transition-colors cursor-pointer"
                  >
                    <Search size={20} />
                  </button>
                ) : (
                  <div className="w-full flex items-center gap-2">
                    <SearchBar
                      variant="navbar"
                      placeholder="Tìm kiếm..."
                      autoFocus={isSearchOpen}
                      initialValue={currentQuery}
                      onSearch={(q) => {
                        const p = new URLSearchParams(location.search);
                        q ? p.set("q", q) : p.delete("q");
                        p.set("page", "1");
                        navigate(`/browse?${p.toString()}`);
                      }}
                    />
                    <button
                      onClick={() => setIsSearchOpen(false)}
                      className="shrink-0 p-1 hover:text-white/70 cursor-pointer"
                    >
                      <X size={18} />
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </div>

          {/* 4. USER CELL (Desktop Only) */}
          <div className="hidden md:flex items-center justify-center h-full px-8 shrink-0">
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center gap-2 text-white/80 hover:text-white transition-all cursor-pointer group">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/20 overflow-hidden group-hover:border-white/40 transition-colors">
                      {user?.avatarUrl ? (
                        <img
                          src={user.avatarUrl}
                          alt="Avatar"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <UserIcon size={16} />
                      )}
                    </div>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="w-56 mt-2 p-1.5 rounded-lg border-zinc-100 shadow-xl"
                >
                  {/* User Identity Header */}
                  <div className="px-3 py-3 mb-1.5 bg-zinc-50/50 rounded-md border border-zinc-100">
                    <div className="flex items-center gap-2.5 mb-2.5">
                      <div className="w-9 h-9 rounded-md bg-white border border-zinc-200 overflow-hidden shrink-0">
                        {user?.avatarUrl ? (
                          <img
                            src={user.avatarUrl}
                            alt="Avatar"
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <UserIcon
                            size={16}
                            className="mx-auto mt-2 text-zinc-400"
                          />
                        )}
                      </div>
                      <div className="min-w-0">
                        <p className="text-[11px] font-sans font-black uppercase tracking-tight text-zinc-900 truncate">
                          {user?.displayName || "Người dùng"}
                        </p>
                        <p className="text-[9px] font-sans font-medium text-zinc-400 truncate">
                          {user?.email}
                        </p>
                      </div>
                    </div>
                    {user?.role === "admin" && (
                      <div className="flex items-center gap-1.5">
                        <Badge
                          variant="outline"
                          className="bg-white border-zinc-200 text-[8px] px-1.5 py-0 h-3.5 font-black uppercase tracking-widest"
                        >
                          Admin
                        </Badge>
                      </div>
                    )}
                  </div>


                  <div className="space-y-0.5">
                    <DropdownMenuItem
                      onClick={() => navigate("/profile")}
                      className="rounded-md py-2 focus:bg-zinc-50 cursor-pointer"
                    >
                      <UserCircle className="mr-3 h-4 w-4 text-zinc-500" />
                      <span className="text-xs font-bold uppercase tracking-widest">Hồ sơ</span>
                    </DropdownMenuItem>
                  </div>

                  {user?.role === "admin" && (
                    <>
                      <DropdownMenuSeparator className="my-2 bg-zinc-100" />
                      <DropdownMenuItem
                        onClick={() => navigate("/admin")}
                        className="rounded-md py-2.5 text-primary font-black focus:bg-primary/5"
                      >
                        <LayoutDashboard className="mr-3 h-4 w-4" />
                        <span>Trang quản trị</span>
                      </DropdownMenuItem>
                    </>
                  )}

                  <DropdownMenuSeparator className="my-2 bg-zinc-100" />
                  <DropdownMenuItem
                    onClick={handleLogout}
                    className="rounded-md py-2 text-rose-500 focus:text-rose-500 focus:bg-rose-50 cursor-pointer"
                  >
                    <LogOut className="mr-3 h-4 w-4" />
                    <span className="text-xs font-bold uppercase tracking-widest">Đăng xuất</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                to="/login"
                state={{ from: location }}
                className="text-white/80 hover:text-white transition-colors"
              >
                <UserIcon size={20} />
              </Link>
            )}
          </div>

          {/* 5. MOBILE TOGGLE CELL */}
          <div className="md:hidden flex items-center h-full border-l-2 border-white/20 shrink-0">
            <button
              className="flex items-center justify-center h-full px-5 text-white cursor-pointer"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/10 overflow-hidden bg-primary px-6 py-8 flex flex-col gap-6"
          >
            {/* Search in Mobile Menu */}
            <div className="bg-white/10 p-3 rounded-xl border border-white/20">
              <SearchBar
                variant="navbar"
                placeholder="Tìm kiếm thực vật..."
                initialValue={currentQuery}
                onSearch={(q) => {
                  const p = new URLSearchParams(location.search);
                  q ? p.set("q", q) : p.delete("q");
                  p.set("page", "1");
                  navigate(`/browse?${p.toString()}`);
                  setIsMobileMenuOpen(false);
                }}
              />
            </div>

            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  className={`text-lg font-sans font-bold uppercase tracking-widest ${isLinkActive(link.href) ? "text-white" : "text-white/60"}`}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="h-px bg-white/10 my-2" />

            {isAuthenticated ? (
              <>
                <Link
                  className="text-lg font-sans font-bold uppercase tracking-widest text-white/80"
                  to="/profile"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Hồ sơ
                </Link>
                <button
                  className="text-lg font-sans font-bold uppercase tracking-widest text-rose-400 text-left"
                  onClick={() => {
                    handleLogout();
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Đăng xuất
                </button>
              </>
            ) : (
              <Link
                className="text-lg font-sans font-bold uppercase tracking-widest text-white"
                to="/login"
                state={{ from: location }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Đăng nhập
              </Link>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
