import axios from "axios";
import { API_URL } from "../utils/constant";
import { handleResponse } from "../utils/handleRes";

interface IRegisterObj {
  email: string;
  username?: string;
  password: string;
  firstname: string;
  lastname: string;
  city?: string;
  zipcode?: string;
  street?: string;
  phone?: string;
}

const registerRequest = async (registerObj: IRegisterObj) => {
  try {
    const res = await axios.post(
      `${API_URL}/users/add`,
      JSON.stringify(registerObj)
    );
    return handleResponse.success(res);
  } catch (err: any) {
    return handleResponse.error(err);
  }
};

export { registerRequest };
export type { IRegisterObj };
