import axios from "axios";
import { API_URL } from "../utils/constant";
import { IRespose, handleResponse } from "../utils/handleRes";
import { IProductListItem, IProductDetail } from "../interface/productList";

interface IGetProductListResponse extends IRespose {
  status: number | undefined;
  data?: IProductListItem[];
}

interface IGetProductDetailResponse extends IRespose {
  status: number | undefined;
  data?: IProductDetail;
}

export const searchProduct = {
  getDetailProduct: async (
    productId: number
  ): Promise<IGetProductDetailResponse> => {
    try {
      const response = await axios.get(`${API_URL}/products/${productId}`);
      return handleResponse.success(response);
    } catch (err: any) {
      return handleResponse.error(err);
    }
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
