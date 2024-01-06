import { create } from "zustand";

const initFilter = {
  priceMin: 0,
  priceMax: 999999,
  price: [0, 999999],
  rate: 0,
};

type FilterListType = {
  priceMin: number;
  priceMax: number;
  price: number[];
  rate: number;
  setPriceMin: (value: number) => void;
  setPriceMax: (value: number) => void;
  setPriceMaxMin: (value: number[]) => void;
  setRate: (value: number) => void;
};

export const useFilterList = create<FilterListType>((set) => ({
  ...initFilter,

  setPriceMin: (value: number) => {
    set({ priceMin: value });
  },
  setPriceMax: (value: number) => {
    set({ priceMax: value });
  },
  setPriceMaxMin: (value: number[]) => {
    set({ price: [...value].sort() });
  },
  setRate: (value: number) => {
    set({ rate: value });
  },
}));
