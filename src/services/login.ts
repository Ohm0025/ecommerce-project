import axios from "axios";
import { handleResponse } from "../utils/handleRes";
import { API_URL } from "../utils/constant";

type LoginObj = {
  username: string;
  password: string;
};

export const loginService = async (loginObj: LoginObj): Promise<any> => {
  try {
    const res = await axios.post(`${API_URL}/auth/login`, { ...loginObj });
    return handleResponse.success(res);
  } catch (err: any) {
    return handleResponse.error(err);
  }
};
