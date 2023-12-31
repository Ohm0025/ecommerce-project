import { useForm } from "react-hook-form";
import { IRegisterObj, registerRequest } from "../../services/register";
import { useLoading } from "../../store/loadingState";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const useRegister = () => {
  const navigate = useNavigate();

  const { openIsLoading, closeIsLoading } = useLoading();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  const registerObj = watch("registerObj");

  const onSubmit = async (data: any) => {
    openIsLoading();
    const res = await registerRequest(data);
    if (res.status === 200) {
      if (res.data?.email === data.email) {
        localStorage.setItem("authToken", "isLogin");
        toast.success("register success");
        navigate("/");
        location.reload();
      }
      closeIsLoading();
    } else {
      toast.error(res.error);
    }
  };
  return {
    fieldRegister: register,
    changeRegister: (value: IRegisterObj, inputType: string) =>
      setValue("registerObj" + "." + inputType, value),
    registerObj,
    onSubmit,
    handleSubmit,
    errors,
  };
};

export { useRegister };
