import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const LoginPage = (props: Props) => {
  return (
    <div className="w-full lg:w-1/2 py-16 px-12">
      <h2 className="text-3xl mb-4">Login</h2>

      <form action="#">
        <div className="mt-5">
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-400 py-1 px-2 w-full"></input>
        </div>
        <div className="mt-5">
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-400 py-1 px-2 w-full"></input>
        </div>

        <div className="mt-5">
          <span className="text-sm">
            {" "}
            I don't have account go to
            <Link
              className="text-orange-500 font-semibold hover:text-blue-400 hover:underline"
              to="register">
              {" "}
              Register
            </Link>
          </span>
        </div>
        <div className="mt-5">
          <button className="rounded-lg bg-orange-500 text-white py-3 w-full">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
