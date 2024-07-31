import { HTMLAttributes } from "react";

interface IProps extends HTMLAttributes<HTMLSpanElement> {
    color: string;
}
const CircleColor = ({ color , ...rest}: IProps) => {
    return (
        <span
            className=" block h-5 w-5 rounded-full cursor-pointer"
            style={{ backgroundColor: color }}
            {...rest}
        />
    );
};

export default CircleColor;
