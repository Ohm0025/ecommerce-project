import { useForm } from "react-hook-form";
import { useLoading } from "../../store/loadingState";
import { loginService } from "../../services/login";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const { openIsLoading, closeIsLoading } = useLoading();
  const navigate = useNavigate();
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const loginObj = watch("loginObj");

  const onSubmit = async (data: any) => {
    openIsLoading();
    const res = await loginService(data);
    if (res.status === 200) {
      console.log(res);
      if (res.data?.token) {
        localStorage.setItem("authToken", "isLogin");
        toast.success("login success");
        navigate("/");
        location.reload();
      }
      closeIsLoading();
    } else {
      if (res.error.message === "Invalid credentials") {
        toast.error("username or password is incorrect");
      }

      closeIsLoading();
    }
  };

  return {
    fieldLogin: register,
    onSubmit,
    handleSubmit,
    errors,
  };
};

export { useLogin };
