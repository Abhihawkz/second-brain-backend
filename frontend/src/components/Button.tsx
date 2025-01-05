import { ReactElement } from "react";

interface buttonProps {
    varient:"primary" | "secondary",
    text:string,
    startIcon : ReactElement,
}

const varientClasses = {
    "primary" : "bg-purple-300 text-white",
    "secondary" : "bg-purple-100 text-purple-300"
}

const defaultClasses = "px-4 py-2 rounded-md font-medium flex items-center justify-center"

const Button = ({varient,text,startIcon}:buttonProps) => {
  return (
    <button className={varientClasses[varient] + " " + defaultClasses}>
        {startIcon}
        {text}
        </button>
  )
}

export default Button;