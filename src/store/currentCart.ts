import { create } from "zustand";
import { InputProductType } from "../utils/clickCartSmall";

let localCart = localStorage.getItem("user-cart");
let initCart: InputProductType[] = [];
if (localCart) {
  initCart = [...JSON.parse(localCart)];
}

type UseUserCartType = {
  userCart: InputProductType[];
  addUserCart: (value: InputProductType, addNum?: number) => void;
  removeUserCart: (productId: number) => void;
  clearUserCart: () => void;
};

export const useUserCart = create<UseUserCartType>((set) => ({
  userCart: initCart,
  addUserCart: (value: InputProductType, addNum: number = 1) =>
    set((prev) => {
      const findProduct = prev.userCart.find(
        (item) => item.productId === value.productId
      );
      if (findProduct) {
        return {
          userCart: [
            ...prev.userCart.map((item) =>
              item.productId === value.productId
                ? { ...item, productQTY: item.productQTY + addNum }
                : item
            ),
          ],
        };
      } else {
        return { userCart: [...prev.userCart, value] };
      }
    }),
  removeUserCart: (productId: number) =>
    set((prev) => {
      return {
        userCart: [
          ...prev.userCart.filter((item) => item.productId !== productId),
        ],
      };
    }),
  clearUserCart: () => set({ userCart: [] }),
  raiseQty: (value: number = 1, selectId: number) =>
    set((prev) => {
      return {
        userCart: [
          ...prev.userCart.map((item) => {
            if (item.productId === selectId) {
              return { ...item, productQTY: item.productQTY + value };
            }
            return item;
          }),
        ],
      };
    }),
  dropQty: (value: number = 1, selectId: number) =>
    set((prev) => {
      return {
        userCart: [
          ...prev.userCart.map((item) => {
            if (item.productId === selectId) {
              if (item.productQTY - value >= 0) {
                return { ...item, productQTY: item.productQTY - value };
              }
              return item;
            }
            return item;
          }),
        ],
      };
    }),
}));
