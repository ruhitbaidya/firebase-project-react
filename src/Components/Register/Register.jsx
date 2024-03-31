import { useState } from "react";
import { createUserWithEmailAndPassword, sendEmailVerification } from "@firebase/auth";
import auth from "../../__firebase.init";


const Register = () => {
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
    const [disa, setDisa] = useState(true);
    
    const handelSubmit = (e) => {
        e.preventDefault();
        setSuccess("");
        setError("");

        let email = e.target.email.value;
        let password = e.target.password.value;
        if(password.length < 6){
            setError("Your Password Must Be More then 6 charactar");
            return;
        }
        
        createUserWithEmailAndPassword(auth, email, password)
        .then((result)=>{
            console.log(result)
            sendEmailVerification(auth.currentUser)
            .then(()=> console.log("send"))
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    return (
        <div>
            <div className="bg-gray-200 p-[40px] w-[50%] mx-auto mt-[100px] rounded-lg">
                <h2 className="text-4xl font-[700] text-center mb-[20px]">Register</h2>
                <form onSubmit={handelSubmit}>
                    <div>
                        <label htmlFor="Email">Email</label>
                        <input required className="w-full p-[10px] rounded-lg mt-[10px] focus:outline-none" type="email" name="email" placeholder="Enter Your name" />
                    </div>
                    <div>
                        <label htmlFor="Email">Password</label>
                        <input className="w-full p-[10px] rounded-lg mt-[10px] focus:outline-none" type="password" name="password" placeholder="Enter Your Password" />
                    </div>
                    <div>
                        <label htmlFor="Email">
                            <input onChange={()=> setDisa(!disa)} className="mr-[10px] mt-[20px] p-[10px] rounded-lg mt-[10px] focus:outline-none" type="checkbox" name="trums" placeholder="Enter Your Password" /> Agree With Our Trams And Conditions
                        </label>

                    </div>
                    <div>
                        <input  disabled={disa} className={`mb-[20px] w-full ${disa ? 'bg-green-400' : 'bg-green-700 cursor-pointer'} p-[10px] rounded-lg mt-[20px]  text-white`} type="submit" />
                    </div>
                </form>
                {
                   success && <p className="text-green-600">{success}</p> 
                }
                {
                    error && <p className="text-red-600">{error}</p> 
                }
            </div>
        </div>
    )
}

export default Register
