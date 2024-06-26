import React, { useState } from "react";
import GenderCheckbox from "./GenderCheckbox";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
  const [inputs,setInputs] = useState({
    fullName:"",
    username:"",
    password:"",
    confirmPassword:"",
    gender:""

  })

  const {loading , signup} = useSignup()

  const handleCheckboxChange = (gender) => {
      setInputs({...inputs , gender})
  }
  const handleSubmit = async (e)  =>{
    e.preventDefault()
    await signup(inputs)
  }

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3x1 font-semibold text-center text-white">
          Sign Up <span className=" text-blue-400">QuickChat</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-slate-400">
                FullName
              </span>
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="input input-bordered w-full h-9 text-sm"
              value={inputs.fullName}
              onChange={(e)=>setInputs({...inputs, fullName : e.target.value})}
              // required
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-slate-400">
                Username
              </span>
            </label>
            <input
              type="text"
              placeholder="JohnDoe"
              className="input input-bordered w-full h-9 text-sm"
              value={inputs.username}
              onChange={(e)=>setInputs({...inputs, username : e.target.value})}
              // required
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-slate-400">
                Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="input input-bordered w-full h-9 text-sm"
              value={inputs.password}
              onChange={(e)=>setInputs({...inputs, password : e.target.value})}
              // required
           
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-slate-400">
                Confirm Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="input input-bordered w-full h-9 text-sm"
              value={inputs.confirmPassword}
              onChange={(e)=>setInputs({...inputs, confirmPassword : e.target.value})}
              // required

            />
          </div>

          <GenderCheckbox onCheckboxChange ={handleCheckboxChange} selectedGender={inputs.gender} />

          <div>
            <Link
              to="/login"
              className="text-sm text-blue-400 hover:underline hover:text-blue-600 mt-1 inline-block"
            >
              Already have an account?
            </Link>
          </div>
          <div>
            <button className="btn glass btn-sm btn-block p-2 mt-2 m-auto" disabled= {loading}>
             {loading ? <span className="loading loading-spinner"></span> : "Sign Up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

//STARTER CODE FOR THIS FILE

// import React from "react";
// import GenderCheckbox from "./GenderCheckbox";

// const SignUp = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//       <div className="w-full p-6 rounded-lg shadow-md bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//         <h1 className="text-3x1 font-semibold text-center text-white">
//           Sign Up <span className=" text-blue-400">QuickChat</span>
//         </h1>

//         <form>
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text text-slate-400">FullName</span>
//             </label>
//             <input
//               type="text"
//               placeholder="John Doe"
//               className="input input-bordered w-full h-9 text-sm"
//             />
//           </div>
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text text-slate-400">Username</span>
//             </label>
//             <input
//               type="text"
//               placeholder="JohnDoe"
//               className="input input-bordered w-full h-9 text-sm"
//             />
//           </div>
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text text-slate-400">Password</span>
//             </label>
//             <input
//               type="password"
//               placeholder="Enter Password"
//               className="input input-bordered w-full h-9 text-sm"
//             />
//           </div>
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text text-slate-400">
//                 Confirm Password
//               </span>
//             </label>
//             <input
//               type="password"
//               placeholder="Confirm Password"
//               className="input input-bordered w-full h-9 text-sm"
//             />
//           </div>

//             <GenderCheckbox/>

//           <div>
//           <a href="#"
//               className="text-sm text-blue-400 hover:underline hover:text-blue-600 mt-1 inline-block">
//               Already have an account?
//             </a>
//           </div>
//           <div>
//           <button className="btn glass btn-sm btn-block p-2 mt-2 m-auto">
//               Login
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUp;
