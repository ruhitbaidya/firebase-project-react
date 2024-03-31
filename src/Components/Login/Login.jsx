import { useState, useEffect } from "react"
import { signInWithEmailAndPassword, sendPasswordResetEmail } from "@firebase/auth";
import auth from "../../__firebase.init";

const Login = () => {
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
    const [verify, setVerify] = useState("");
    const [emails, setEmais] = useState("")

    const handelSubmit = (e) => {
        e.preventDefault();
        setSuccess("");
        setError("");

        let email = e.target.email.value;
        let password = e.target.password.value;
        if (password < 6) {
            setError("Your Password Must Be More then 6 charactar");
            return;
        }
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => setVerify(result.user))
            .catch((error) => console.log(error))
                
    }

    useEffect(()=>{
        if(verify){
            if(!verify.emailVerified){
                setError("Please Verify your email")
                return;
            }else{
                setSuccess("Your Are Successfully Login")
                console.log(verify)
            }
        }
    }, [verify])

    const handelForgetPassword = ()=>{
        setError("");
        setSuccess("");
        if(![/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/].text(emails)){
            setError("please Give a valid email adderse");
            return ;
        }
            sendPasswordResetEmail(auth, emails)
            .then((result)=> console.log(result))
            .catch((err)=>{
                console.log(err)
            })
    }


    return (
        <div>
            <div className="bg-gray-200 p-[40px] w-[50%] mx-auto mt-[100px] rounded-lg">
                <h2 className="text-4xl font-[700] text-center mb-[20px]">Login</h2>
                <form onSubmit={handelSubmit}>
                    <div>
                        <label htmlFor="Email">Email</label>
                        <input onChange={(e)=> setEmais(e.target.value)} required className="w-full p-[10px] rounded-lg mt-[10px] focus:outline-none" type="email" name="email" placeholder="Enter Your name" />
                    </div>
                    <div>
                        <label htmlFor="Email">Password</label>
                        <input className="w-full p-[10px] rounded-lg mt-[10px] focus:outline-none" type="password" name="password" placeholder="Enter Your Password" />
                    </div>

                    <div>
                        <input className={`w-full  bg-green-700 cursor-pointer p-[10px] rounded-lg mt-[20px]  text-white`} type="submit" />
                    </div>
                </form>
                {
                    success && <p className="text-green-600">{success}</p>
                }
                {
                    error && <p className="text-red-600">{error}</p>
                }
                <p className="mt-[20px]"> <a herf="" className=" cursor-pointer" onClick={handelForgetPassword}>Forget Password</a> </p>
            </div>
        </div>
    )
}

export default Login
