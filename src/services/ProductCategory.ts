import axios from "axios";
import { API_URL } from "../utils/constant";
import { IRespose, handleResponse } from "../utils/handleRes";

interface IGetProductCatResponse extends IRespose {
  status: number | undefined;
  data?: string[];
}

export const productCategory = {
  getAllCategory: async (): Promise<IGetProductCatResponse> => {
    try {
      const response = await axios.get(`${API_URL}/products/categories`);
      return handleResponse.success(response);
    } catch (err: any) {
      return handleResponse.error(err);
    }
  },
};
