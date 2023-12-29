import React from "react";
import { Link } from "react-router-dom";
import { useRegister } from "./Register.hook";

type Props = {};

const RegisterPage = (props: Props) => {
  const { handleSubmit, onSubmit, fieldRegister } = useRegister();
  return (
    <div className="w-full lg:w-1/2 py-16 px-12">
      <h2 className="text-3xl mb-4">Register</h2>
      <p className="mb-4">
        Create your account. It's free and only take a minute
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-5">
          <input
            {...fieldRegister("firstname")}
            type="text"
            placeholder="Firstname"
            className="border border-gray-400 py-1 px-2"></input>
          <input
            {...fieldRegister("lastname")}
            type="text"
            placeholder="Surname"
            className="border border-gray-400 py-1 px-2"></input>
        </div>
        <div className="mt-5">
          <input
            {...fieldRegister("email")}
            type="email"
            placeholder="Email"
            className="border border-gray-400 py-1 px-2 w-full"></input>
        </div>
        <div className="mt-5">
          <input
            {...fieldRegister("password")}
            type="password"
            placeholder="Password"
            className="border border-gray-400 py-1 px-2 w-full"></input>
        </div>
        <div className="mt-5">
          <input
            type="password"
            placeholder="Confirm Password"
            className="border border-gray-400 py-1 px-2 w-full"></input>
        </div>
        <div className="mt-5">
          <input type="checkbox" className="border border-gray-400"></input>
          <span className="text-sm">
            {" "}
            I accept the{" "}
            <span className="text-[#0D6EFD] font-semibold hover:text-blue-400 hover:underline">
              Terms of Use
            </span>
            {" & "}
            <span className="text-[#0D6EFD] font-semibold hover:text-blue-400 hover:underline">
              Privacy Policy
            </span>
          </span>
        </div>
        <div className="mt-5">
          <button className="rounded-lg bg-[#0D6EFD] text-white py-3 w-full">
            Register Now
          </button>
          <div className="text-center mt-5 text-sm">
            I've already have account go to{" "}
            <Link
              to="/authen"
              className="text-[#0D6EFD] font-semibold hover:text-blue-400 hover:underline">
              Login
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
