import axios from "axios";
import { handleResponse } from "../utils/handleRes";
import { API_URL } from "../utils/constant";

const getAllProduct = async (): Promise<any> => {
  try {
    const res = await axios.get(`${API_URL}/products`);
    return handleResponse.success(res);
  } catch (err: any) {
    return handleResponse.error(err);
  }
};

const getProductByCat = async (catName: string | undefined): Promise<any> => {
  try {
    const res = await axios.get(`${API_URL}/products/category/${catName}`);
    return handleResponse.success(res);
  } catch (err: any) {
    return handleResponse.error(err);
  }
};

export { getAllProduct, getProductByCat };
