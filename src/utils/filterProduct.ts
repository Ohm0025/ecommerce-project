import { IProductListItem } from "../interface/productList";

type OptionType = {
  cat?: string;
  brand?: string;
  priceMin?: number;
  priceMax?: number;
};

const filterProduct = (
  option: OptionType,
  originalData: IProductListItem[]
): IProductListItem[] | [] => {
  let finalArr = [];
  if (option.brand) {
    finalArr = originalData.filter((item) => {
      return item.brand === option.brand;
    });
  }
  return finalArr;
};
