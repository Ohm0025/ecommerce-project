import { create } from "zustand";
import { IProductListItem } from "../interface/productList";

const initList = {
  productList: {
    data: [],
    loading: false,
    error: null,
  },
  fetchProductList: {
    data: [],
    loading: false,
    error: null,
  },
  productTotal: 0,
};

type productType = {
  data: IProductListItem[];
  loading: boolean;
  error: null | unknown;
};

type UseProductListStoreType = {
  productList: productType;
  fetchProductList: productType;
  productTotal: number;
  setProductList: (value: productType) => void;
  setFetchProductList: (value: productType) => void;
  setProductTotal: (value: number) => void;
};

export const useProductListStore = create<UseProductListStoreType>((set) => ({
  ...initList,
  setProductList: (value: productType) => set({ productList: value }),
  setFetchProductList: (value: productType) => set({ fetchProductList: value }),
  setProductTotal: (value: number) => set({ productTotal: value }),
}));
