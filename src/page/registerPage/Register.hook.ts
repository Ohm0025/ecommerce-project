import { useForm } from "react-hook-form";
import { IRegisterObj } from "../../services/register";

const useRegister = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  const registerObj = watch("registerObj");

  const onSubmit = async (data: any) => {
    console.log(data);
    console.log("submit");
    if (errors) {
      console.log(errors);
    } else {
      console.log(data);
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
