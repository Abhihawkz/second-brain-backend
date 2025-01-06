import { Link } from "react-router-dom";
import Button from "../components/Button";
import InputComponent from "../components/InputComponent";
import { useRef } from "react";
import { BACKEND_URL } from "./utils";
import axios from "axios";

const Sign = () => {
 
    const passwordRef = useRef<HTMLInputElement>()
    const emailRef = useRef<HTMLInputElement>()


    async function login() {
        const password = passwordRef.current?.value;
        const email = emailRef.current?.value;
        const res = await axios.post(`${BACKEND_URL}/api/v1/user/signin`, {

            email,
            password

        })
        localStorage.setItem("token", res.data.token)
    }




    return (
        <div className="h-screen bg-slate-200  w-full flex items-center justify-center">
            <div className=" bg-white rounded border shadow-xl  px-8   py-12  flex  flex-col gap-2">
                <div>
                    <h1 className="text-4xl font-bold text-black mb-4 text-center">Second Brain</h1>
                </div>
                <div className="flex flex-col gap-4">
                    <InputComponent type="text" placeholder="email" referrance={emailRef}/>
                    <InputComponent type="password" placeholder="password" referrance={passwordRef} />
                </div>
                <div className="flex  flex-col justify-center items-center mt-4 gap-3">
                    <Button varient="signup" text="signup" full={true} onclick={() => {
                        login()
                    }} />
                    <p className="font-normal">Don't have a account <span className="underline text-gray-300 cursor-pointer">
                        <Link to={"/signup"}>
                            Create
                        </Link>
                    </span></p>
                </div>
            </div>
        </div>
    )
}

export default Sign;