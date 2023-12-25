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
};

type productType = {
  data: IProductListItem[];
  loading: boolean;
  error: null | unknown;
};

type UseProductListStoreType = {
  productList: productType;
  fetchProductList: productType;
  setProductList: (value: productType) => void;
  setFetchProductList: (value: productType) => void;
};

export const useProductListStore = create<UseProductListStoreType>((set) => ({
  ...initList,
  setProductList: (value: productType) => set({ productList: value }),
  setFetchProductList: (value: productType) => set({ fetchProductList: value }),
}));
