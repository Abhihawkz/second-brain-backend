import React from "react";

const InputComponent = ({placeholder,referrance,type}:{placeholder:string,referrance:any,type:string}) => {
  return (
    <input type={type} placeholder={placeholder} className="px-4 py-2 border-2 outline-1 font-normal text-black rounded-md" ref={referrance}></input>
  )
}

export default InputComponent;