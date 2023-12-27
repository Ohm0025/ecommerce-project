import { useForm } from "react-hook-form";
import { IRegisterObj } from "../../services/register";

const useRegister = () => {
  const { register, handleSubmit, setValue, watch } = useForm();

  const registerObj = watch("registerObj");

  const onSubmit = async (data: any) => {
    console.log(data);
  };
  return {
    fieldRegister: register,
    changeRegister: (value: IRegisterObj, inputType: string) =>
      setValue("registerObj" + "." + inputType, value),
    registerObj,
    onSubmit,
    handleSubmit,
  };
};

export { useRegister };
