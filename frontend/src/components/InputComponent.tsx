
const InputComponent = ({placeholder,onchange}:{placeholder:string,onchange:()=>void}) => {
  return (
    <input type="text" placeholder={placeholder} className="px-4 py-2 border-2 outline-1 font-normal text-black rounded-md" onChange={onchange}></input>
  )
}

export default InputComponent;