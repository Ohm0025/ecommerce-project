import { create } from "zustand";

const initCat = {
  productCategories: {
    data: [],
    loading: false,
    error: null,
  },
};

const initCurrentCat = {
  currentCat: [],
};

type categoryType = {
  data: string[];
  loading: boolean;
  error: null | unknown;
};

type UseProductCategory = {
  productCategories: categoryType;
  currentCat: string[];
  setProductCategory: (value: categoryType) => void;
  setCurrentCat: (value: string) => void;
};

export const useProductCategory = create<UseProductCategory>((set) => ({
  ...initCat,
  ...initCurrentCat,
  setProductCategory: (value: categoryType) =>
    set({ productCategories: value }),
  setCurrentCat: (value: string) => {
    set((prev) => {
      return {
        currentCat: prev.currentCat.includes(value)
          ? [...prev.currentCat.filter((item) => item !== value)]
          : [...prev.currentCat, value],
      };
    });
  },
}));
