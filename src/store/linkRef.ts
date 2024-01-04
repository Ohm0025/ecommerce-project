import { create } from "zustand";

type UseLinkRef = {
  category: string;
};

export const useLinkRef = create<UseLinkRef>((set) => ({
  category: "",
  setCategory: (value: string) =>
    set(() => {
      return { category: value };
    }),
}));
