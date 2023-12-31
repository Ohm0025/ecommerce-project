import { useRegister } from "./Register.hook";
import RegisterInputText from "../../component/registerInputText/RegisterInputText";
import {
  RegisterConfirmBtn,
  RegisterConfirmCheckBox,
} from "../../component/registerConfirm/RegisterConfirm";

const RegisterPage = () => {
  const { handleSubmit, onSubmit, fieldRegister, errors } = useRegister();
  return (
    <div className="w-full lg:w-1/2 py-16 px-12">
      <h2 className="text-3xl mb-4">Register</h2>
      <p className="mb-4">
        Create your account. It's free and only take a minute
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-5">
          <RegisterInputText
            objInput={fieldRegister("firstname", {
              required: { value: true, message: "firstname is required" },
            })}
            errors={errors}
          />
          <RegisterInputText
            objInput={fieldRegister("lastname", {
              required: { value: true, message: "lastname is required" },
            })}
            errors={errors}
          />
        </div>
        <div className="mt-5">
          <RegisterInputText
            objInput={fieldRegister("email", {
              required: { value: true, message: "email is required" },
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "invalid email address",
              },
            })}
            errors={errors}
            type="email"
          />
        </div>
        <div className="mt-5">
          <RegisterInputText
            objInput={fieldRegister("password", {
              required: { value: true, message: "password is required" },
              minLength: {
                value: 8,
                message: "password has at least 8 character",
              },
            })}
            errors={errors}
            type="password"
          />
        </div>
        <div className="mt-5">
          <RegisterInputText
            objInput={fieldRegister("confirmpassword", {
              required: {
                value: true,
                message: "consfirm password is required",
              },
              validate: (value, { password }) => {
                return (
                  password === value || "confirm password must be like password"
                );
              },
            })}
            errors={errors}
            type="password"
          />
        </div>
        <div className="mt-5">
          <RegisterConfirmCheckBox
            objInput={fieldRegister("authconfirm", {
              required: {
                value: true,
                message: "must be confirm for register",
              },
            })}
            errors={errors}
          />
        </div>
        <div className="mt-5">
          <RegisterConfirmBtn />
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
