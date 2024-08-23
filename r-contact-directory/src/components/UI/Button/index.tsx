import classNames from "classnames";
import React, { ButtonHTMLAttributes, Children } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  color?: "primary" | "secondary" | "success";
  loading?: boolean;
}

const Button = ({
  children,
  color = "primary",
  loading,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={classNames(
        "py-1 px-2 w-32 h-12 rounded-2xl flex flex-row justify-center items-center text-xs",
        {
          "bg-primary text-primary-2": color === "primary",
          "bg-primary-2 text-primary-1 border-2 border-primary-1":
            color === "secondary",
        }
      )}
      {...props}
    >
      {loading ? (
        <>
          <AiOutlineLoading3Quarters />
        </>
      ) : (
        <>{children}</>
      )}
    </button>
  );
};

export default Button;
