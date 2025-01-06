import { ReactElement } from "react";

interface buttonProps {
    varient:"primary" | "secondary",
    text:string,
    startIcon? : ReactElement,
    onclick?:()=>void
}

const varientClasses = {
    "primary" : "bg-purple-300 text-white hover:bg-purple-400",
    "secondary" : "bg-purple-100 text-purple-300 hover:bg-gray-400"
}

const defaultClasses = "px-4 py-2 rounded-md font-medium flex items-center justify-center"

const Button = ({varient,text,startIcon,onclick}:buttonProps) => {
  return (
    <button className={varientClasses[varient] + " " + defaultClasses} onClick={onclick}>
        {startIcon}
        {text}
        </button>
  )
}

export default Button;