import { useEffect, useMemo } from "react";
import { useBrowseStore } from "@/store/useBrowseStore";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { PlantCard } from "@/components/browse/PlantCard";
import { FilterButtons } from "@/components/browse/FilterButtons";
import { fetchTaxa } from "@/services/taxon.service";
import type { PlantGroup, TaxonomyRank } from "@/types";
import { Button } from "@/components/ui/button";
import { LoadingBar } from "@/components/ui/LoadingBar";
import { ErrorMessage } from "@/components/ui/ErrorMessage";
import { Skeleton } from "@/components/ui/Skeleton";

// Định dạng số với phân cách phần nghìn
function formatNumber(num: number | undefined | null): string {
  if (num === undefined || num === null) return "0";
  return num.toLocaleString("vi-VN");
}

export function Browse() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q");
  const page = parseInt(searchParams.get("page") || "1");

  // Lấy bộ lọc từ URL
  const groupsParam = searchParams.get("groups") || searchParams.get("group");
  const ranksParam = searchParams.get("ranks");
  const provincesParam = searchParams.get("provinces");

  const activeGroups = useMemo<PlantGroup[]>(
    () => (groupsParam ? (groupsParam.split(",") as PlantGroup[]) : []),
    [groupsParam],
  );

  const activeRanks = useMemo<TaxonomyRank[]>(
    () => (ranksParam ? (ranksParam.split(",") as TaxonomyRank[]) : []),
    [ranksParam],
  );

  const activeProvinces = useMemo<string[]>(
    () => (provincesParam ? provincesParam.split(",") : []),
    [provincesParam],
  );

  const { 
    plants, totalItems, totalPages, isLoading, error, lastParamsStr,
    setBrowseData, setLoading, setError, setScrollPosition 
  } = useBrowseStore();

  const currentParamsStr = searchParams.toString();

  // Khôi phục vị trí cuộn khi quay lại từ trang chi tiết
  useEffect(() => {
    const isReturning = sessionStorage.getItem('browse-returning') === 'true';
    const savedPosition = sessionStorage.getItem('browse-scroll-position');

    if (isReturning && savedPosition) {
      // Đợi nội dung render xong mới cuộn (50ms là đủ cho hầu hết trường hợp)
      const timer = setTimeout(() => {
        window.scrollTo(0, parseInt(savedPosition));
        // Xóa flag sau khi đã khôi phục
        sessionStorage.removeItem('browse-returning');
        sessionStorage.removeItem('browse-scroll-position');
      }, 50);
      return () => clearTimeout(timer);
    }
  }, []); // Chỉ chạy khi mount

  // Lưu vị trí cuộn khi thay đổi
  useEffect(() => {
    const handleScroll = () => {
      if (!isLoading) {
        setScrollPosition(window.scrollY);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading, setScrollPosition]);

  // Fetch dữ liệu khi tham số thay đổi
  useEffect(() => {
    const fetchData = async () => {
      // Nếu đã có dữ liệu cho các tham số này (ví dụ: quay lại từ trang chi tiết), không fetch lại
      if (plants.length > 0 && currentParamsStr === lastParamsStr) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);

        const result = await fetchTaxa({
          q: query || undefined,
          group: activeGroups.length > 0 ? activeGroups : undefined,
          rank: activeRanks.length > 0 ? activeRanks : undefined,
          province: activeProvinces.length > 0 ? activeProvinces : undefined,
          page,
          limit: 20,
        });

        if (result.success) {
          setBrowseData(result.data, currentParamsStr);
          
          // Cuộn về đầu trang khi có kết quả mới (trừ khi đang quay lại từ trang chi tiết)
          const isReturning = sessionStorage.getItem('browse-returning') === 'true';
          if (!isReturning) {
            window.scrollTo(0, 0);
          }
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Có lỗi xảy ra khi tải dữ liệu");
      }
    };

    fetchData();
  }, [currentParamsStr, query, activeGroups, activeRanks, activeProvinces, page, lastParamsStr, setBrowseData, setLoading, setError, plants.length]);

  const handleGroupChange = (group: PlantGroup, isChecked: boolean) => {
    const newGroups = isChecked
      ? [...activeGroups, group]
      : activeGroups.filter((g) => g !== group);

    applyFilters(newGroups, activeRanks, activeProvinces);
  };

  const handleRankChange = (rank: TaxonomyRank, isChecked: boolean) => {
    const newRanks = isChecked
      ? [...activeRanks, rank]
      : activeRanks.filter((r) => r !== rank);

    applyFilters(activeGroups, newRanks, activeProvinces);
  };

  const handleProvinceChange = (province: string, isChecked: boolean) => {
    const newProvinces = isChecked
      ? [...activeProvinces, province]
      : activeProvinces.filter((p) => p !== province);

    applyFilters(activeGroups, activeRanks, newProvinces);
  };

  const handleClearAll = () => {
    applyFilters([], [], []);
  };

  const applyFilters = (
    groups: PlantGroup[],
    ranks: TaxonomyRank[],
    provinces: string[],
  ) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("page", "1");
    
    // Reset scroll position in store when filters change
    setScrollPosition(0);
    window.scrollTo(0, 0);

    if (groups.length > 0) {
      newParams.set("groups", groups.join(","));
    } else {
      newParams.delete("groups");
    }

    if (ranks.length > 0) {
      newParams.set("ranks", ranks.join(","));
    } else {
      newParams.delete("ranks");
    }

    if (provinces.length > 0) {
      newParams.set("provinces", provinces.join(","));
    } else {
      newParams.delete("provinces");
    }

    setSearchParams(newParams);
  };

  return (
    <div className="min-h-screen bg-background">
      <AnimatePresence>
        {isLoading && <LoadingBar key="global-loader" />}
      </AnimatePresence>

      {/* PHẦN BỘ LỌC */}
      <div className="pt-4 pb-0">
        <div className="mx-auto">
          <FilterButtons
            activeGroups={activeGroups}
            activeRanks={activeRanks}
            activeProvinces={activeProvinces}
            onGroupChange={handleGroupChange}
            onRankChange={handleRankChange}
            onProvinceChange={handleProvinceChange}
            onClearAll={handleClearAll}
          />
        </div>
      </div>

      {/* Dòng hiển thị số lượng kết quả */}
      <div className="mx-auto min-h-[48px] flex items-center">
        {!isLoading && !error && plants.length > 0 && (
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-base text-muted-foreground/70"
          >
            Tìm thấy{" "}
            <span className="text-foreground">
              {formatNumber(totalItems)}
            </span>{" "}
            kết quả
          </motion.p>
        )}
      </div>

      {/* DANH SÁCH KẾT QUẢ */}
      <main className="mx-auto pb-4">
        <AnimatePresence mode="wait">
          {error ? (
            <motion.div
              key="error-state"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ErrorMessage 
                message={error} 
                onRetry={() => window.location.reload()} 
              />
            </motion.div>
          ) : (isLoading || (currentParamsStr !== lastParamsStr && lastParamsStr !== null)) ? (
            <motion.div
              key="loading-state"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
            >
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="flex flex-col gap-4">
                  <Skeleton className="aspect-square w-full rounded-none" />
                  <div className="space-y-2">
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-4 w-1/2" />
                  </div>
                </div>
              ))}
            </motion.div>
          ) : (plants.length === 0 && lastParamsStr !== null) ? (
            <motion.div
              key="empty-state"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-24"
            >
              <p className="text-muted-foreground font-sans italic text-lg">Không tìm thấy thực vật nào phù hợp</p>
            </motion.div>
          ) : plants.length > 0 ? (
            <motion.div
              key="results-state"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {plants.map((plant) => (
                  <PlantCard key={plant.id} plant={plant} />
                ))}
              </div>

              {/* Phân trang */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-4 pt-4 border-t border-foreground/5 mt-12">
                  <Button
                    onClick={() => {
                      const newParams = new URLSearchParams(searchParams.toString());
                      newParams.set("page", Math.max(1, page - 1).toString());
                      setSearchParams(newParams);
                      window.scrollTo(0, 0);
                    }}
                    disabled={page <= 1}
                    variant="outline"
                    size="sm"
                    className="cursor-pointer"
                  >
                    ← Trước
                  </Button>

                  <span className="text-sm font-sans font-bold text-muted-foreground tracking-widest">
                    {page} / {totalPages}
                  </span>

                  <Button
                    onClick={() => {
                      const newParams = new URLSearchParams(searchParams.toString());
                      newParams.set("page", Math.min(totalPages, page + 1).toString());
                      setSearchParams(newParams);
                      window.scrollTo(0, 0);
                    }}
                    disabled={page >= totalPages}
                    variant="outline"
                    size="sm"
                    className="cursor-pointer"
                  >
                    Sau →
                  </Button>
                </div>
              )}
            </motion.div>
          ) : null}
        </AnimatePresence>
      </main>
    </div>
  );
}
