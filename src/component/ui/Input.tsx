import { InputHTMLAttributes } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {}
const Input = ({ ...rest }: IProps) => {
  return (
    <div>
      <input
        className="shadow-md border-2 focus:border-indigo-600 focus:outline-none focus:ring-1
                    focus:ring-indigo-600 rounded-md px=3 py-2 text-md p-1 w-full"
        {...rest}
      />
    </div>
  );
};

export default Input;
