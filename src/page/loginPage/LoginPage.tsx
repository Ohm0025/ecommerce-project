import React from "react";
import { Link } from "react-router-dom";
import { useLogin } from "./Login.hook";
import RegisterInputText from "../../component/registerInputText/RegisterInputText";

type Props = {};

const LoginPage = (props: Props) => {
  const { handleSubmit, onSubmit, fieldLogin, errors } = useLogin();
  return (
    <div className="w-full lg:w-1/2 py-16 px-12">
      <h2 className="text-3xl mb-4">Login</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-5">
          <RegisterInputText
            objInput={fieldLogin("username", {
              required: { value: true, message: "username is required" },
            })}
            errors={errors}
            type="text"
          />
        </div>
        <div className="mt-5">
          <RegisterInputText
            objInput={fieldLogin("password", {
              required: { value: true, message: "password is required" },
            })}
            errors={errors}
            type="password"
          />
        </div>

        <div className="mt-5">
          <span className="text-sm">
            {" "}
            I don't have account go to
            <Link
              className="text-[#0D6EFD] font-semibold hover:text-blue-400 hover:underline"
              to="register">
              {" "}
              Register
            </Link>
          </span>
        </div>
        <div className="mt-5">
          <button
            type="submit"
            className="rounded-lg bg-[#0D6EFD] text-white py-3 w-full">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
