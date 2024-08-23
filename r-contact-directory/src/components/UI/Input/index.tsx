import { ErrorMessage, Field } from "formik";
import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  labelName: string;
  name: string;
}

const Input = ({ labelName, name, ...props }: InputProps) => {
  return (
    <fieldset className=" p-1 flex flex-col justify-between mb-1 ">
      <label className="font-bold text-sm m-2" htmlFor={labelName}>
        {labelName}
      </label>
      <Field
        className="rounded-l-full rounded-r-full h-12 p-3 shadow-lg my-1"
        name={name}
        {...props}
      />
      {/* {children} */}
      <ErrorMessage
        name={name}
        component="div"
        className="text-red-600 text-left pl-5 text-xs"
      />
    </fieldset>
  );
};

export default Input;
