import { Link } from "react-router-dom";
import Button from "../components/Button";
import InputComponent from "../components/InputComponent";

const Signup = () => {
  return (
    <div className="h-screen bg-slate-200  w-full flex items-center justify-center">
    <div className=" bg-white rounded border shadow-xl  px-8   py-12  flex  flex-col gap-2">
        <div>
            <h1 className="text-4xl font-bold text-black mb-4 text-center">Second Brain</h1>
        </div>
        <div className="flex flex-col gap-4">
        <InputComponent placeholder="email" onchange={()=>{}} />
        <InputComponent placeholder="username" onchange={()=>{}} />
        <InputComponent placeholder="password" onchange={()=>{}} />
        </div>
        <div className="flex  flex-col justify-center items-center mt-4 gap-3">
            <Button varient="signup" text="signup" full={true}/>
            <p className="font-normal">Already have a account <span className="underline text-gray-300 cursor-pointer">
                <Link to={"/"}>
                Login
                </Link>
                </span></p>
        </div>
    </div>
</div>
  )
}

export default Signup;