import axios from "axios";
import { API_URL } from "../utils/constant";
import { IRespose, handleResponse } from "../utils/handleRes";
import { IProductListItem } from "../interface/productList";

interface IGetProductListResponse extends IRespose {
  status: number | undefined;
  data?: IProductListItem[];
}

export const searchProduct = {
  queryProduct: async (q: string) => {
    try {
      const response = await axios.get(`${API_URL}/products`);
    } catch (err) {}
  },
  fetchAllProduct: async (limit?: number): Promise<IGetProductListResponse> => {
    try {
      const response = await axios.get(
        `${API_URL}/products${limit ? `?limit=${limit}` : ""}`
      );
      return handleResponse.success(response);
    } catch (err: any) {
      return handleResponse.error(err);
    }
  },
};
