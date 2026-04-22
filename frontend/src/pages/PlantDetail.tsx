import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Leaf,
  X,
  ImageIcon,
  Network,
  Upload,
} from "lucide-react";
import { fetchTaxonDetail, fetchAncestors } from "@/services/taxon.service";
import { LoadingBar } from "@/components/ui/LoadingBar";
import { ErrorMessage } from "@/components/ui/ErrorMessage";
import { Skeleton } from "@/components/ui/Skeleton";
import { ContributionModal } from "@/components/taxons/ContributionModal";
import { toast } from "sonner";
import { useAuthStore } from "@/store/useAuthStore";
import { useLocation } from "react-router-dom";

import type { TaxonDetail, TaxonAncestor } from "@/types";
import { getRankDisplayName } from "@/utils/taxon.utils";
import { cn } from "@/lib/utils";
import { formatDate } from "@/utils/date.utils";
import { TaxonomyTreeModal } from "@/components/taxonomy/TaxonomyTreeModal";

export function PlantDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated } = useAuthStore();

  const [plant, setPlant] = useState<TaxonDetail | null>(null);
  const [ancestors, setAncestors] = useState<TaxonAncestor[]>([]);
  const [activeImageUrl, setActiveImageUrl] = useState<string | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<
    "description" | "synonyms" | "children" | "contributions"
  >("description");
  const [isContributionModalOpen, setIsContributionModalOpen] = useState(false);
  const [isTreeModalOpen, setIsTreeModalOpen] = useState(false);
  const [pendingFile, setPendingFile] = useState<File | null>(null);
  const tabsRef = useRef<HTMLDivElement>(null);

  const handleExternalFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    // nếu chưa đăng nhập, chuyển hướng sang login luôn
    if (!isAuthenticated) {
      toast.info("Vui lòng đăng nhập để đóng góp hình ảnh");
      navigate("/login", { state: { from: location } });
      return;
    }

    const file = e.target.files?.[0];
    if (file) {
      setPendingFile(file);
      setIsContributionModalOpen(true);
      // xóa giá trị đầu vào để có thể chọn lại cùng một tệp
      e.target.value = "";
    }
  };

  const handleTabClick = (e: React.MouseEvent) => {
    if (!isAuthenticated) {
      e.preventDefault();
      toast.info("Vui lòng đăng nhập để đóng góp hình ảnh");
      navigate("/login", { state: { from: location } });
      return;
    }

    if (pendingFile) {
      e.preventDefault(); // ngăn nhãn (label) kích hoạt đầu vào tệp
      setIsContributionModalOpen(true);
    }
  };

  // lấy nhãn cho tab cấp dưới
  const getChildRankLabel = (rank: string) => {
    switch (rank) {
      case "kingdom":
        return "Ngành cấp dưới";
      case "phylum":
        return "Lớp cấp dưới";
      case "taxonomicClass":
        return "Bộ cấp dưới";
      case "order":
        return "Họ cấp dưới";
      case "family":
        return "Chi cấp dưới";
      case "genus":
        return "Loài cấp dưới";
      case "species":
        return "Phân loài & Thứ";
      default:
        return "Cấp dưới trực tiếp";
    }
  };
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!slug) {
        toast.error("Không tìm thấy đường dẫn thực vật");
        setIsLoading(false);
        return;
      }

      try {
        setIsLoading(true);
        const result = await fetchTaxonDetail(slug);
        if (result.success && result.data) {
          setPlant(result.data);

          const targetImageUrl =
            result.data.primaryImageUrl || result.data.images?.[0]?.url || null;

          // hiển thị dần dần: bố cục ổn định trước (150ms), rồi ảnh mới hiện lên sau
          // tạo cảm giác mượt mà hơn so với tất cả xuất hiện cùng lúc
          setTimeout(() => setActiveImageUrl(targetImageUrl), 150);

          setError(null);

          // lấy danh sách tổ tiên nếu có id
          const ancResult = await fetchAncestors(result.data.id);
          if (ancResult.success) {
            setAncestors(ancResult.data);
          }
        } else {
          const msg = result.message || "Không thể tải dữ liệu thực vật";
          setError(msg);
          toast.error(msg);
        }
      } catch (err) {
        const msg = "Đã xảy ra lỗi không mong đợi";
        setError(msg);
        toast.error(msg);
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  // logic điều hướng cho lightbox
  const currentIndex =
    plant?.images?.findIndex((img) => img.url === activeImageUrl) ?? -1;
  const hasPrev = currentIndex > 0;

  const hasNext =
    plant?.images &&
    plant.images.length > 0 &&
    currentIndex < plant.images.length - 1;

  const goToPrev = () => {
    if (hasPrev && plant?.images) {
      setActiveImageUrl(plant.images[currentIndex - 1].url);
    }
  };

  const goToNext = () => {
    if (hasNext && plant?.images) {
      setActiveImageUrl(plant.images[currentIndex + 1].url);
    }
  };

  const handleGoToPrev = useRef(goToPrev);
  const handleGoToNext = useRef(goToNext);

  useEffect(() => {
    handleGoToPrev.current = goToPrev;
    handleGoToNext.current = goToNext;
  });

  const scrollGallery = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } =
        scrollContainerRef.current;

      if (direction === "right") {
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollContainerRef.current.scrollBy({
            left: 200,
            behavior: "smooth",
          });
        }
      } else {
        if (scrollLeft <= 10) {
          scrollContainerRef.current.scrollTo({
            left: scrollWidth,
            behavior: "smooth",
          });
        } else {
          scrollContainerRef.current.scrollBy({
            left: -200,
            behavior: "smooth",
          });
        }
      }
    }
  };

  // phím tắt điều khiển lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return;
      if (e.key === "ArrowLeft") handleGoToPrev.current();
      else if (e.key === "ArrowRight") handleGoToNext.current();
      else if (e.key === "Escape") setIsLightboxOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen]);

  if (error) {
    return (
      <ErrorMessage
        message={error}
        onRetry={() => window.location.reload()}
        className="min-h-[80vh] flex items-center justify-center"
      />
    );
  }

  const allImages = plant?.images || [];
  // usememo: tránh lọc lại mỗi lần hiển thị khi di chuột hoặc cuộn hoặc mở lightbox
  const contributedImages = useMemo(
    () => allImages.filter((img) => img.contributorId !== null),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [plant?.images]
  );

  return (
    <div className="min-h-screen bg-background pb-20">
      <AnimatePresence>
        {isLoading && <LoadingBar key="global-loader" />}
      </AnimatePresence>

      {/* điều hướng / thanh phân cấp */}
      <div className="pt-5 pb-4 mb-0 flex items-center gap-2 flex-wrap min-h-[40px]">
        <button
          onClick={() => navigate(-1)}
          className="relative group text-[12px] font-sans font-bold uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors pb-0.5 cursor-pointer"
        >
          KHÁM PHÁ
          <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
        </button>

        <AnimatePresence mode="popLayout">
          {isLoading ? (
            <motion.div
              key="breadcrumb-skeleton"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-2"
            >
              <ChevronRight size={12} className="text-muted-foreground/40" />
              <Skeleton className="w-24 h-4" />
            </motion.div>
          ) : (
            ancestors.map((anc) => (
              <motion.div
                key={anc.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-2"
              >
                <ChevronRight size={12} className="text-muted-foreground/40" />
                <Link
                  to={`/plant/${anc.slug}`}
                  className="relative group text-[12px] font-sans font-bold uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors pb-0.5"
                  title={getRankDisplayName(anc.rank)}
                >
                  {anc.displayName || anc.scientificName}
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                </Link>
              </motion.div>
            ))
          )}
        </AnimatePresence>

        {/* nút xem sơ đồ phả hệ tối giản cạnh thanh phân cấp */}
        {!isLoading && plant && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setIsTreeModalOpen(true)}
            className="p-1 -translate-y-[1px] text-muted-foreground/30 hover:text-primary hover:bg-primary/5 rounded-full transition-all duration-300 group/tree"
            title="Xem sơ đồ phả hệ"
          >
            <Network size={16} className="-rotate-90 group-hover/tree:scale-110 transition-transform" />
          </motion.button>
        )}
      </div>

      {/* phần hero (ảnh và thông tin chính) */}
      <section className="pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* phía bên trái: khung ảnh phong cách biên tập */}
          <div className="relative aspect-[5/4] w-full mx-auto overflow-hidden shadow-soft border border-foreground/5 bg-muted cursor-zoom-in group">
            <AnimatePresence mode="wait">
              {isLoading || !plant ? (
                <Skeleton
                  key="hero-skeleton"
                  className="absolute inset-0 w-full h-full rounded-none"
                />
              ) : (
                <motion.div
                  key="hero-content"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="w-full h-full"
                  onClick={() => setIsLightboxOpen(true)}
                >
                  {activeImageUrl ? (
                    <div className="absolute inset-0 w-full h-full">
                      <motion.img
                        src={activeImageUrl}
                        className="absolute inset-0 w-full h-full object-cover blur-md scale-150 opacity-80"
                        alt=""
                      />
                      <motion.img
                        src={activeImageUrl}
                        alt={plant.vietnameseName || plant.scientificName}
                        className="relative z-10 w-full h-full object-contain object-top"
                      />
                    </div>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Leaf className="w-20 h-20 text-muted-foreground/20" />
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            {/* bộ sưu tập ảnh nhỏ dạng trượt */}
            {!isLoading && allImages.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute bottom-0 left-0 right-0 z-20 group/gallery pointer-events-none"
              >
                <div className="relative pointer-events-auto flex items-center w-full">
                  {allImages.length > 3 && (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          scrollGallery("left");
                        }}
                        className="absolute left-1 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-30 shadow-md"
                      >
                        <ChevronLeft size={16} />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          scrollGallery("right");
                        }}
                        className="absolute right-1 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-30 shadow-md"
                      >
                        <ChevronRight size={16} />
                      </button>
                    </>
                  )}
                  <div
                    ref={scrollContainerRef}
                    className="w-full overflow-x-auto scroll-smooth no-scrollbar flex border-t border-white/10 bg-black/20 backdrop-blur-md"
                  >
                    {allImages.map((image) => (
                      <button
                        key={image.id}
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveImageUrl(image.url);
                        }}
                        className={`relative flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 overflow-hidden transition-all duration-300 border-r border-white/10 ${activeImageUrl === image.url ? "opacity-100 z-10 border-2 border-white/80 ring-1 ring-white/20" : "opacity-60 hover:opacity-100 border-transparent"}`}
                      >
                        <img
                          src={image.url}
                          alt="Thumbnail"
                          loading="lazy"
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* thông tin định danh (bên phải) */}
          <div className="flex flex-col lg:h-0 lg:min-h-full space-y-8 pt-2 overflow-hidden">
            <div className="flex-1 overflow-y-auto no-scrollbar space-y-8">
              <AnimatePresence mode="wait">
                {isLoading || !plant ? (
                  <div key="id-skeleton" className="space-y-6">
                    <div className="space-y-3">
                      <Skeleton className="h-6 w-3/4 opacity-50" />
                      <Skeleton className="h-4 w-1/2 opacity-20" />
                    </div>
                    <div className="flex gap-2 mb-2">
                      <Skeleton className="h-5 w-20 rounded-full opacity-20" />
                      <Skeleton className="h-5 w-16 rounded-full opacity-20" />
                      <Skeleton className="h-5 w-32 rounded-full opacity-20" />
                    </div>
                    <div className="space-y-2">
                      <Skeleton className="h-3 w-full opacity-20" />
                      <Skeleton className="h-3 w-full opacity-20" />
                      <Skeleton className="h-3 w-2/3 opacity-20" />
                    </div>
                  </div>
                ) : (
                  <motion.div
                    key="id-content"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6"
                  >
                    {/* 1. Scientific Name */}
                    <div className="space-y-1 relative group/title">
                      <h1 className="text-[21px] md:text-[26px] lg:text-[30px] font-sans font-normal normal-case text-black dark:text-white leading-[1.1] tracking-tight italic">
                        {plant.scientificName}
                      </h1>
                    </div>

                    {/* 2. Common Names */}
                    {(plant.commonNames?.length || 0) > 0 && (
                      <div className="flex items-center gap-x-3 text-[13px] md:text-sm font-sans font-bold text-black/80 dark:text-white/80 uppercase tracking-[0.15em] pt-1 overflow-x-auto no-scrollbar whitespace-nowrap">
                        {plant.commonNames?.map((cn, idx, arr) => (
                          <span
                            key={cn.id}
                            className="flex items-center gap-3 shrink-0"
                          >
                            {cn.name}
                            {idx < arr.length - 1 && (
                              <span className="text-black/10 dark:text-white/10 font-light">
                                |
                              </span>
                            )}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* 3. Badges */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {plant.orderInBook && (
                        <div className="flex items-center gap-1.5 text-[10px] font-sans font-bold uppercase tracking-[0.1em] px-2.5 py-1 rounded-full border bg-blue-50/40 text-blue-900 border-blue-200/50">
                          STT: {plant.orderInBook}
                        </div>
                      )}
                      <div className="flex items-center gap-1.5 text-[10px] font-sans font-bold uppercase tracking-[0.1em] px-2.5 py-1 rounded-full border bg-amber-50/40 text-black border-amber-200/50">
                        {getRankDisplayName(plant.rank)}
                      </div>
                      {plant.plantGroup && (
                        <div className="flex items-center gap-1.5 text-[10px] font-sans font-bold uppercase tracking-[0.1em] px-2.5 py-1 rounded-full border bg-indigo-50/40 text-black border-indigo-200/50">
                          {plant.plantGroup === "angiosperm"
                            ? "HẠT KÍN"
                            : plant.plantGroup === "gymnosperm"
                              ? "HẠT TRẦN"
                              : "DƯƠNG XỈ"}
                        </div>
                      )}
                      
                      <div
                        className={cn(
                          "flex items-center gap-1.5 text-[10px] font-sans font-bold uppercase tracking-[0.1em] px-2.5 py-1 rounded-full border transition-colors",
                          plant.hasVietnamRecord
                            ? "bg-emerald-50/40 text-black border-emerald-200/50"
                            : "bg-gray-50/40 text-gray-400 border-gray-200/50",
                        )}
                      >
                        {plant.hasVietnamRecord
                          ? "CÓ BẢN GHI TẠI VIỆT NAM (GBIF)"
                          : "CHƯA CÓ BẢN GHI TẠI VIỆT NAM (GBIF)"}
                      </div>
                    </div>

                    {/* Description */}
                    {plant.description && (
                      <div className="prose prose-sm prose-sans max-w-none text-black dark:text-white leading-relaxed text-justify">
                        <p className="italic indent-8">
                          {plant.description} (Wikipedia)
                        </p>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* phần nội dung chi tiết (tab) */}
      {!isLoading && plant
        ? (() => {
            const hasDescription = !!(
              plant.habit ||
              plant.leaf ||
              plant.reproduction ||
              plant.phenology ||
              plant.distributionText ||
              plant.value ||
              plant.note
            );
            const hasSynonyms = !!(plant.synonyms && plant.synonyms.length > 0);
            const hasChildren = !!(plant.children && plant.children.length > 0);

            if (!hasDescription && !hasSynonyms && !hasChildren) return null;

            // tự động chọn tab phù hợp nếu tab hiện tại bị ẩn
            let displayTab = activeTab;
            if (activeTab === "description" && !hasDescription) {
              if (hasChildren) displayTab = "children";
              else if (hasSynonyms) displayTab = "synonyms";
              else displayTab = "contributions";
            }

            // cập nhật trạng thái nếu cần (xử lý logic hiển thị)
            // For simplicity in this render block, we'll use displayTab for rendering

            return (
              <section className="pt-4 md:pt-6 pb-0" ref={tabsRef}>
                {/* thanh điều hướng tab */}
                <div className="flex items-end ml-0 overflow-visible">
                  {hasDescription && (
                    <button
                      onClick={() => setActiveTab("description")}
                      style={{
                        backgroundColor:
                          "color-mix(in srgb, var(--chart-5), white 70%)",
                      }}
                      className={cn(
                        "relative px-10 py-2.5 text-[14px] font-sans font-bold uppercase tracking-[0.2em] z-20 rounded-t-xl transition-all duration-200 active:scale-95",
                        displayTab === "description"
                          ? "text-chart-5-fg shadow-[0_-4px_10px_-4px_rgba(0,0,0,0.05)]"
                          : "text-chart-5-fg/30 hover:text-chart-5-fg/60",
                        !hasChildren &&
                          !hasSynonyms &&
                          "rounded-tl-none md:rounded-tl-xl",
                      )}
                    >
                      Mô tả
                    </button>
                  )}
                  {hasChildren && (
                    <button
                      onClick={() => setActiveTab("children")}
                      style={{
                        backgroundColor: "rgba(239, 246, 255, 0.95)",
                      }}
                      className={cn(
                        "relative px-10 py-2.5 text-[14px] font-sans font-bold uppercase tracking-[0.2em] z-20 rounded-t-xl transition-all duration-200 active:scale-95",
                        displayTab === "children"
                          ? "text-blue-900 shadow-[0_-4px_10px_-4px_rgba(0,0,0,0.05)]"
                          : "text-blue-800/30 hover:text-blue-800/60",
                        !hasDescription && "rounded-tl-none",
                      )}
                    >
                      {getChildRankLabel(plant.rank)}
                    </button>
                  )}
                  {hasSynonyms && (
                    <button
                      onClick={() => setActiveTab("synonyms")}
                      style={{
                        backgroundColor: "rgba(236, 253, 245, 0.95)",
                      }}
                      className={cn(
                        "relative px-10 py-2.5 text-[14px] font-sans font-bold uppercase tracking-[0.2em] z-20 rounded-t-xl transition-all duration-200 active:scale-95",
                        displayTab === "synonyms"
                          ? "text-emerald-900 shadow-[0_-4px_10px_-4px_rgba(0,0,0,0.05)]"
                          : "text-emerald-800/30 hover:text-emerald-800/60",
                        !hasDescription && !hasChildren && "rounded-tl-none",
                      )}
                    >
                      Đồng danh
                    </button>
                  )}
                  <button
                    onClick={() => setActiveTab("contributions")}
                    style={{
                      backgroundColor: "rgba(244, 244, 245, 0.95)",
                    }}
                    className={cn(
                      "relative px-10 py-2.5 text-[14px] font-sans font-bold uppercase tracking-[0.2em] z-20 rounded-t-xl transition-all duration-200 active:scale-95",
                      displayTab === "contributions"
                        ? "text-primary shadow-[0_-4px_10px_-4px_rgba(0,0,0,0.05)]"
                        : "text-zinc-400 hover:text-zinc-600",
                      !hasDescription &&
                        !hasChildren &&
                        !hasSynonyms &&
                        "rounded-tl-none",
                    )}
                  >
                    ĐÓNG GÓP
                    {contributedImages.length > 0
                      ? ` (${contributedImages.length})`
                      : ""}
                  </button>
                </div>

                <div
                  style={{
                    backgroundColor:
                      displayTab === "description"
                        ? "color-mix(in srgb, var(--chart-5), white 70%)"
                        : displayTab === "children"
                          ? "rgba(239, 246, 255, 0.95)"
                          : displayTab === "synonyms"
                            ? "rgba(236, 253, 245, 0.95)"
                            : "rgba(244, 244, 245, 0.95)",
                  }}
                  className="relative px-5 md:px-10 py-2 md:py-4 z-10 rounded-xl rounded-tl-none w-full"
                >
                  <AnimatePresence mode="wait">
                    {displayTab === "description" && hasDescription && (
                      <motion.div
                        key="description-tab"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className="w-full py-3"
                      >

                          <div className="flex flex-col">
                          {(
                            [
                              { label: "Dạng sống", value: plant.habit },
                              { label: "Đặc điểm lá", value: plant.leaf },
                              { label: "Sinh sản", value: plant.reproduction },
                              { label: "Mùa hoa quả", value: plant.phenology },
                              { label: "Phân bố", value: plant.distributionText },
                              { label: "Giá trị", value: plant.value },
                              {
                                label: "Ghi chú",
                                value: plant.note,
                              },
                              { 
                                label: "Tỉnh thành", 
                                value: plant.provinces?.map(p => p.province.name).join(", ") 
                              },
                            ] as { label: string; value: string | null | undefined; isItalic?: boolean }[]
                          )
                            .filter((item) => item.value)
                            .map((item, idx, filteredArray) => (
                              <div
                                key={item.label}
                                className={cn(
                                  "flex flex-col md:flex-row py-2.5 md:items-center",
                                  idx !== filteredArray.length - 1 &&
                                    "border-b border-chart-5-fg/10",
                                )}
                              >
                                {/* cột trái: nhãn */}
                                <div className="w-full md:w-[20%] mb-1 md:mb-0 pr-4">
                                  <h3 className="text-[13px] font-sans font-black uppercase tracking-[0.2em] text-emerald-950/80 dark:text-emerald-200/80 leading-tight">
                                    {item.label}
                                  </h3>
                                </div>

                                {/* cột phải: giá trị */}
                                <div className="w-full md:w-[80%]">
                                  <p
                                    className={cn(
                                      "font-sans text-[17px] text-black dark:text-emerald-50 leading-[1.7] text-justify hyphens-auto",
                                      item.isItalic
                                        ? "italic opacity-60"
                                        : "font-medium",
                                    )}
                                  >
                                    {item.value}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                      </motion.div>
                    )}

                    {displayTab === "children" && hasChildren && (
                      <motion.div
                        key="children-tab"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className="w-full py-2 md:py-4"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-2">
                          {plant.children?.map((child) => (
                            <Link
                              key={child.id}
                              to={`/plant/${child.slug}`}
                              onClick={() => window.scrollTo(0, 0)}
                              className="flex flex-col py-2 transition-all group"
                            >
                              <div className="flex flex-wrap items-baseline gap-x-2">
                                <span className="font-sans text-[18px] text-black dark:text-white group-hover:text-blue-700 italic font-medium leading-tight transition-colors">
                                  {child.canonicalName}
                                </span>
                                {child.vietnameseName && (
                                  <span className="text-[14px] font-sans font-bold text-black/40 group-hover:text-black/60 uppercase tracking-tight transition-colors">
                                    ({child.vietnameseName})
                                  </span>
                                )}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {displayTab === "synonyms" && hasSynonyms && (
                      <motion.div
                        key="synonyms-tab"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className="w-full py-4"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                          {plant.synonyms?.map((syn) => (
                            <div key={syn.id} className="py-2">
                              <span className="font-sans text-[18px] text-black dark:text-amber-50 italic leading-tight">
                                {syn.scientificName}
                              </span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                    {displayTab === "contributions" && (
                      <motion.div
                        key="contributions-tab"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className="w-full pt-2 pb-4"
                      >
                        <input
                          type="file"
                          id="tab-upload-input"
                          className="hidden"
                          accept="image/*"
                          onChange={handleExternalFileUpload}
                        />

                        <div className="flex flex-col gap-8">
                          {contributedImages.length === 0 ? (
                            /* 1. Large Hero Upload (when no images yet) */
                            <div className="relative w-full">
                              <label
                                htmlFor={pendingFile ? undefined : "tab-upload-input"}
                                onClick={handleTabClick}
                                className="group relative flex flex-col items-center justify-center w-full py-16 border-2 border-dashed border-zinc-200 rounded-none bg-zinc-50/50 hover:border-primary hover:bg-zinc-50 transition-all cursor-pointer overflow-hidden"
                              >
                                <div className="flex flex-col items-center justify-center transition-transform group-hover:-translate-y-1 duration-300">
                                  <Upload className="w-8 h-8 text-primary mb-4" />
                                  <p className="text-[12px] font-sans font-black uppercase tracking-[0.2em] text-zinc-400 group-hover:text-primary transition-colors text-center px-4">
                                    ĐÓNG GÓP ẢNH CHO{" "}
                                    {getRankDisplayName(plant.rank)}{" "}
                                    <span className="italic">
                                      {plant.scientificName}
                                    </span>
                                  </p>
                                </div>
                              </label>
                            </div>
                          ) : (
                            /* 2. Compact Grid (when images exist) */
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                              {/* Small Upload Button */}
                              <label
                                htmlFor={pendingFile ? undefined : "tab-upload-input"}
                                onClick={handleTabClick}
                                className="group relative flex flex-col items-center justify-center w-full aspect-[4/3] border-2 border-dashed border-zinc-200 rounded-none bg-zinc-50/50 hover:border-primary hover:bg-zinc-50 transition-all cursor-pointer overflow-hidden"
                              >
                                <Upload className="w-6 h-6 text-primary mb-2 transition-transform group-hover:-translate-y-1" />
                                <span className="text-[9px] font-sans font-black uppercase tracking-widest text-zinc-400 group-hover:text-primary transition-colors">
                                  ĐÓNG GÓP ẢNH
                                </span>
                              </label>

                              {/* List of Images */}
                              {contributedImages.map((image) => (
                                <div
                                  key={image.id}
                                  className="relative aspect-[4/3] rounded-none overflow-hidden border-[6px] border-white shadow-sm bg-zinc-100 group cursor-pointer"
                                  onClick={() => {
                                    setActiveImageUrl(image.url);
                                    setIsLightboxOpen(true);
                                  }}
                                >
                                  <img
                                    src={image.url}
                                    alt="Contributor"
                                    loading="lazy"
                                    className="w-full h-full object-cover"
                                  />
                                  
                                  {/* hiển thị thời gian */}
                                  <div className="absolute bottom-1.5 left-2 z-10 pointer-events-none">
                                    <p className="text-[10px] font-sans font-black text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.9)] tracking-wider">
                                      {formatDate(image.createdAt)}
                                    </p>
                                  </div>

                                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <ImageIcon className="text-white w-6 h-6" />
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </section>
            );
          })()
        : null}

      {/* cửa sổ phóng to ảnh toàn màn hình */}
      <AnimatePresence>
        {isLightboxOpen && activeImageUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-10 cursor-default"
            onClick={() => setIsLightboxOpen(false)}
          >
            {/* nút đóng */}
            <motion.button
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="absolute top-6 right-6 text-white/50 hover:text-white z-110 p-2 hover:bg-white/10 rounded-full transition-colors"
              onClick={() => setIsLightboxOpen(false)}
            >
              <X size={32} />
            </motion.button>

            {/* điều hướng: trước */}
            {hasPrev && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleGoToPrev.current();
                }}
                className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 text-white/30 hover:text-white z-110 p-3 hover:bg-white/10 rounded-full transition-all"
                title="Ảnh trước"
              >
                <ChevronLeft size={32} />
              </button>
            )}

            {/* điều hướng: sau */}
            {hasNext && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleGoToNext.current();
                }}
                className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 text-white/30 hover:text-white z-110 p-3 hover:bg-white/10 rounded-full transition-all"
                title="Ảnh sau"
              >
                <ChevronRight size={32} />
              </button>
            )}

            {/* khung chứa ảnh */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-7xl max-h-full flex flex-col items-center justify-center p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={activeImageUrl}
                alt={plant?.scientificName}
                className="max-w-full max-h-[80vh] object-contain shadow-2xl rounded-sm"
              />

              {/* thông tin mô tả dưới ảnh */}
              {plant?.images && currentIndex !== -1 && (
                <div className="mt-4 flex items-center justify-center gap-3 text-white/60 text-[11px] font-medium uppercase tracking-wider">
                  {plant.images[currentIndex].caption && (
                    <span className="italic">
                      "{plant.images[currentIndex].caption}"
                    </span>
                  )}
                  {plant.images[currentIndex].caption &&
                    (plant.images[currentIndex].author ||
                      plant.images[currentIndex].license) && (
                      <span className="opacity-30">—</span>
                    )}
                  <div className="flex items-center gap-2">
                    {plant.images[currentIndex].author && (
                      <span>© {plant.images[currentIndex].author}</span>
                    )}
                    {plant.images[currentIndex].author &&
                      plant.images[currentIndex].license && (
                        <span className="opacity-30">•</span>
                      )}
                    {plant.images[currentIndex].license && (
                      <span>{plant.images[currentIndex].license}</span>
                    )}
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {plant && (
        <ContributionModal
          isOpen={isContributionModalOpen}
          onOpenChange={(open) => {
            setIsContributionModalOpen(open);
            // giữ ảnh trong bộ nhớ khi đóng hộp thoại
          }}
          onFileCleared={() => setPendingFile(null)} // xóa tệp khi cần thiết
          taxonId={plant.id}
          onSuccess={() => {
            setPendingFile(null); // chỉ xóa khi gửi thành công
          }}
          initialFile={pendingFile}
          showCloseButton={false}
        />
      )}
      {/* hộp thoại sơ đồ phả hệ */}
      {plant && (
        <TaxonomyTreeModal
          isOpen={isTreeModalOpen}
          onClose={() => setIsTreeModalOpen(false)}
          plant={plant}
          ancestors={ancestors}
        />
      )}
    </div>
  );
}
