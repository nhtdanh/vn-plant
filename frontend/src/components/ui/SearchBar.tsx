import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X, Leaf } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { fetchTaxonSuggestions } from "@/services/taxon.service";
import type { TaxonSuggestion as Taxon } from "@/types";
import { useClickOutside } from "@/hooks/useClickOutside";

interface SearchBarProps {
  onSearch?: (query: string) => void;
  placeholder?: string;
  className?: string;
  variant?: "default" | "navbar"; // navbar = compact
  limit?: number;
  initialValue?: string;
  autoFocus?: boolean;
}

export function SearchBar({
  onSearch,
  placeholder = "Tìm kiếm thực vật...",
  className,
  variant = "default",
  limit = 5,
  initialValue = "",
  autoFocus = false,
}: SearchBarProps) {
  const [query, setQuery] = useState(initialValue);
  const [isFocused, setIsFocused] = useState(false);
  const [suggestions, setSuggestions] = useState<Taxon[]>([]);
  const [isLoadingSuggestions, setIsLoadingSuggestions] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [hasSearched, setHasSearched] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const debounceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // đồng bộ với giá trị ban đầu khi thay đổi
  useEffect(() => {
    setQuery(initialValue);
  }, [initialValue]);

  // tự động tập trung nếu được yêu cầu
  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

  useClickOutside(containerRef, () => {
    setIsFocused(false);
    setActiveIndex(-1);
  });

  const navigate = useNavigate();

  // lấy gợi ý khi truy vấn thay đổi (trễ 300ms)
  useEffect(() => {
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    if (query.length < 1) {
      setSuggestions([]);
      return;
    }

    setIsLoadingSuggestions(true);
    let ignore = false; // cờ để tránh tình trạng tranh chấp dữ liệu: phản hồi cũ không ghi đè trạng thái

    debounceTimerRef.current = setTimeout(async () => {
      try {
        const result = await fetchTaxonSuggestions(query, limit);
        if (ignore) return; // phản hồi này đã lỗi thời, bỏ qua
        if (result.success && result.data) {
          setSuggestions(result.data);
          setHasSearched(true);
          setActiveIndex(-1);
        } else {
          setSuggestions([]);
          setHasSearched(true);
        }
      } catch (error) {
        if (ignore) return;
        console.error("Failed to fetch suggestions:", error);
        setSuggestions([]);
        setHasSearched(true);
      } finally {
        if (!ignore) setIsLoadingSuggestions(false);
      }
    }, 300); // 300ms — cân bằng trải nghiệm người dùng và số lượng yêu cầu (request)

    return () => {
      ignore = true; // hủy các phản hồi đang xử lý khi dọn dẹp
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, [query, limit]);

  const handleClear = () => {
    setQuery("");
    setSuggestions([]);
    setHasSearched(false);
    inputRef.current?.focus();
    setIsFocused(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      setHasSearched(false);
      setIsFocused(false);
      inputRef.current?.blur(); // thực sự thoát khỏi ô nhập liệu
      if (onSearch) {
        onSearch(query);
      } else {
        navigate(`/browse?q=${encodeURIComponent(query)}`);
      }
    }
  };

  const handleSuggestionClick = (taxon: Taxon) => {
    navigate(`/plant/${taxon.slug}`);
    setQuery("");
    setSuggestions([]);
    setHasSearched(false);
    setIsFocused(false);
    inputRef.current?.blur(); // thực sự thoát khỏi ô nhập liệu
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isFocused || (suggestions.length === 0 && !hasSearched)) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) =>
        prev < suggestions.length - 1 ? prev + 1 : prev,
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev));
    } else if (e.key === "Enter") {
      if (activeIndex >= 0 && activeIndex < suggestions.length) {
        e.preventDefault();
        handleSuggestionClick(suggestions[activeIndex]);
      }
    } else if (e.key === "Escape") {
      setIsFocused(false);
      setActiveIndex(-1);
    }
  };

  if (variant === "navbar") {
    return (
      <div
        ref={containerRef}
        className={cn("w-full group flex-1 relative", className)}
      >
        <form
          onSubmit={handleSubmit}
          className="w-full flex items-center gap-3"
        >
          <Search size={16} className="text-white/40 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            className="flex-1 bg-transparent outline-none text-sm font-sans text-white placeholder:text-white/60"
          />
          {isLoadingSuggestions && (
            <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin shrink-0" />
          )}
        </form>

        {/* danh sách gợi ý - biến thể thanh điều hướng */}
        <AnimatePresence>
          {isFocused &&
            (suggestions.length > 0 || (hasSearched && query.length >= 1)) && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute top-full left-[-20px] right-[-50px] mt-5 bg-background border border-border/80 rounded-md z-50 shadow-xl overflow-hidden"
              >
                <div className="max-h-45 overflow-y-auto custom-scrollbar">
                  {suggestions.length > 0 ? (
                    suggestions.map((taxon, idx) => (
                      <button
                        key={taxon.id}
                        type="button"
                        onClick={() => handleSuggestionClick(taxon)}
                        onMouseEnter={() => setActiveIndex(idx)}
                        className={cn(
                          "w-full px-5 py-2.5 text-left text-sm transition-colors border-b border-border/50 last:border-b-0",
                          activeIndex === idx
                            ? "bg-muted text-primary"
                            : "text-foreground",
                        )}
                      >
                        <div className="font-medium truncate">
                          {taxon.canonicalName || taxon.scientificName}
                          {taxon.vietnameseName && (
                            <span
                              className={cn(
                                "font-normal ml-1",
                                activeIndex === idx
                                  ? "text-primary/70"
                                  : "text-muted-foreground",
                              )}
                            >
                              ({taxon.vietnameseName})
                            </span>
                          )}
                        </div>
                      </button>
                    ))
                  ) : (
                    <div className="px-5 py-4 text-center text-sm text-muted-foreground italic">
                      Không tìm thấy kết quả phù hợp
                    </div>
                  )}
                </div>
              </motion.div>
            )}
        </AnimatePresence>
      </div>
    );
  }

  // biến thể mặc định (hero)
  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full max-w-2xl group transition-all duration-300",
        className,
      )}
    >
      <form onSubmit={handleSubmit} className="w-full">
        <div
          className={cn(
            "flex items-center gap-3 px-6 py-3 bg-white border-2 rounded-full shadow-sm transition-all",
            isFocused
              ? "border-accent ring-4 ring-accent/10"
              : "border-border hover:border-accent/50",
          )}
        >
          {isLoadingSuggestions ? (
            <div className="w-5 h-5 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
          ) : (
            <Search
              className={cn(
                "w-5 h-5 transition-colors duration-300",
                isFocused ? "text-primary" : "text-muted-foreground",
              )}
            />
          )}

          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            className="flex-1 bg-transparent outline-none font-sans text-base font-medium placeholder:text-muted-foreground/60"
          />

          <AnimatePresence>
            {query && (
              <motion.button
                type="button"
                onClick={handleClear}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="p-1 hover:bg-muted rounded-full transition-colors"
              >
                <X className="w-4 h-4 text-muted-foreground" />
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </form>

      {/* danh sách gợi ý - biến thể mặc định */}
      <AnimatePresence>
        {isFocused &&
          (suggestions.length > 0 || (hasSearched && query.length >= 1)) && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute top-full left-0 right-0 mt-3 bg-background border border-border shadow-2xl rounded-lg z-50 overflow-hidden"
            >
              <div className="max-h-45 overflow-y-auto custom-scrollbar">
                {suggestions.length > 0 ? (
                  suggestions.map((taxon, idx) => (
                    <button
                      key={taxon.id}
                      type="button"
                      onClick={() => handleSuggestionClick(taxon)}
                      onMouseEnter={() => setActiveIndex(idx)}
                      className={cn(
                        "w-full px-6 py-4 text-left transition-colors border-b border-border/40 last:border-b-0 flex items-center gap-4",
                        activeIndex === idx ? "bg-muted" : "",
                      )}
                    >
                      <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center shrink-0 overflow-hidden border border-border/50">
                        {taxon.primaryImageUrl ? (
                          <img
                            src={taxon.primaryImageUrl}
                            alt={taxon.canonicalName}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <Leaf className="w-6 h-6 text-muted-foreground/30" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div
                          className={cn(
                            "font-bold text-base truncate",
                            activeIndex === idx
                              ? "text-primary"
                              : "text-foreground",
                          )}
                        >
                          {taxon.canonicalName || taxon.scientificName}
                        </div>
                        {taxon.vietnameseName && (
                          <div className="text-sm text-muted-foreground truncate font-medium">
                            {taxon.vietnameseName}
                          </div>
                        )}
                      </div>
                    </button>
                  ))
                ) : (
                  <div className="px-6 py-10 text-center">
                    <p className="text-muted-foreground font-sans italic">
                      Không tìm thấy thực vật nào phù hợp
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          )}
      </AnimatePresence>
    </div>
  );
}
