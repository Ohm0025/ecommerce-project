import axios from "axios";
import { handleResponse } from "../utils/handleRes";
import { API_URL } from "../utils/constant";

const getAllProduct = async () => {
  try {
    const res = await axios.get(`${API_URL}/products`);
  } catch (err: any) {
    return handleResponse.error(err);
  }
};

export { getAllProduct };
