import { create } from "zustand";
import type { Taxon } from "../types";

interface BrowseState {
  // Dữ liệu
  plants: Taxon[];
  totalItems: number;
  totalPages: number;
  isLoading: boolean;
  error: string | null;

  // Bộ nhớ đệm và vị trí cuộn
  lastParamsStr: string | null;
  scrollPosition: number;

  // Hành động
  setBrowseData: (data: any, paramsStr: string) => void;
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
  setScrollPosition: (pos: number) => void;
  clearCache: () => void;
}

export const useBrowseStore = create<BrowseState>((set) => ({
  plants: [],
  totalItems: 0,
  totalPages: 0,
  isLoading: true,
  error: null,
  lastParamsStr: null,
  scrollPosition: 0,

  setBrowseData: (data: any, paramsStr: string) =>
    set({
      plants: data.items ?? [],
      totalItems: data.meta?.total ?? 0,
      totalPages: data.meta?.totalPages ?? 0,
      lastParamsStr: paramsStr,
      isLoading: false,
      error: null,
    }),

  setLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error, isLoading: false }),
  setScrollPosition: (pos) => set({ scrollPosition: pos }),
  
  clearCache: () => set({ 
    plants: [], 
    totalItems: 0, 
    totalPages: 0, 
    lastParamsStr: null,
    scrollPosition: 0,
    isLoading: true
  }),
}));
