import { useState } from "react"
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useSignup = () => {
 const [loading, setLoading] = useState(false);
 const {setAuthUser}= useAuthContext()
    const signup = async ({fullName, username, password, confirmPassword, gender}) => {
        const success = handleInputErrors({fullName, username, password, confirmPassword, gender});
        if(!success) return;
        setLoading(true);
        try {
            const res = await fetch("api/auth/signup",{
                method:"POST",
                headers:{"Content-Type" : "application/json"},
                body: JSON.stringify({fullName, username, password, confirmPassword, gender})
            });
            const data = await res.json();

            if(data.error){
                throw new Error(data.error)
            }

            //localstorage
            localStorage.setItem("chat-user", JSON.stringify(data));
            //context
            setAuthUser(data);

        } catch (error) {
            toast.error(error.message)
        }
        
        finally{
            setLoading(false);
        }
    };
        return { loading , signup};

}

export default useSignup


function handleInputErrors({fullName, username, password, confirmPassword, gender}){
    // const passwordPattern = /^(?=.*\d)(?=.*[!@#$%^&*()_+{}|:<>?~])[A-Za-z\d!@#$%^&*()_+{}|:<>?~]{6,15}$/;
    if(!fullName || !username || !password || !confirmPassword || !gender){
        toast.error("Field cannot be empty");
        return false
    }
    if(username.length > 15){
        toast.error("Username cannot be than 15 characters")
        return false;
    }
    if(password  !== confirmPassword){
        toast.error("Passwords do not match")
        return false
    }
    if(password.length <6){
        toast.error("password must be atleast 6 characters")
        return false
    }

    // if(!passwordPattern.test(password)){
    //     toast.error("Password should be in between 6 to 15 characters along with atleast one uppercase letter, one lowercase letter, one number and one special character");
    //     return false;
    // }
    return true

}