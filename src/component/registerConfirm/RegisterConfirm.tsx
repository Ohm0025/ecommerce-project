import { FieldErrors, UseFormRegisterReturn } from "react-hook-form";
import { Link } from "react-router-dom";

type Props = {
  objInput: UseFormRegisterReturn;
  errors: FieldErrors;
};

const RegisterConfirmCheckBox = (props: Props) => {
  return (
    <div className="relative flex items-center gap-2">
      {" "}
      <input
        {...props.objInput}
        type="checkbox"
        className={`border w-[0.8rem] h-[0.8rem] ${
          props.errors[props.objInput.name]?.message?.toString()
            ? "border-[red] bg-[#dc99995d]"
            : "border-gray-400"
        }`}></input>
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
      <small className="absolute top-[100%] left-0 text-[red]">
        {props.errors[props.objInput.name]?.message?.toString()}
      </small>
    </div>
  );
};

const RegisterConfirmBtn = () => {
  return (
    <>
      <button
        className="rounded-lg bg-[#0D6EFD] text-white py-3 w-full"
        type="submit">
        Register Now
      </button>
      <div className="text-center mt-5 text-sm">
        I've already have account go to{" "}
        <Link
          to="/ecommerce-project/authen"
          className="text-[#0D6EFD] font-semibold hover:text-blue-400 hover:underline">
          Login
        </Link>
      </div>
    </>
  );
};

export { RegisterConfirmCheckBox, RegisterConfirmBtn };
