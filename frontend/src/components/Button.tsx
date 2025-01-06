import { ReactElement } from "react";

interface buttonProps {
    varient:"primary" | "secondary" | "signup",
    text:string,
    startIcon? : ReactElement,
    onclick?:()=>void,
    isLoading?:boolean,
    full?:boolean,
}

const varientClasses = {
    "primary" : "bg-purple-300 text-white hover:bg-purple-400",
    "secondary" : "bg-purple-100 text-purple-300 hover:bg-gray-400",
    "signup":"bg-black text-white"
}


const defaultClasses = "px-4 py-2 rounded-md font-medium flex items-center justify-center"

const Button = ({varient,text,startIcon,onclick,isLoading,full}:buttonProps) => {
let style = ""
if(full){
  style = "w-full"
}
  return (
    <button className={varientClasses[varient] + " " + defaultClasses+ " " + style } onClick={onclick}  disabled={isLoading}>
        {startIcon}
        {text}
        </button>
  )
}

export default Button;