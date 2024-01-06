import { create } from "zustand";

type UseLinkRef = {
  query: string;
  category: string;
  brand: string;
  setQuery: (value: string) => void;
  setCategory: (value: string) => void;
  setBrand: (value: string) => void;
};

let initCat: string = "";
let initQuery: string = "";

export const useLinkRef = create<UseLinkRef>((set) => ({
  query: initQuery,
  category: initCat,
  brand: "",
  setQuery: (value: string) => set({ query: value }),
  setCategory: (value: string) =>
    set(() => {
      return { category: value };
    }),
  setBrand: (value: string) => set({ brand: value }),
}));
