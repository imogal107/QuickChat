import React from "react";
import GenderCheckbox from "./GenderCheckbox";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3x1 font-semibold text-center text-white">
          Sign Up <span className=" text-blue-400">QuickChat</span>
        </h1>

        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-slate-400">FullName</span>
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="input input-bordered w-full h-9 text-sm"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-slate-400">Username</span>
            </label>
            <input
              type="text"
              placeholder="JohnDoe"
              className="input input-bordered w-full h-9 text-sm"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-slate-400">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="input input-bordered w-full h-9 text-sm"
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
            />
          </div>

            <GenderCheckbox/>

          <div>
          <a href="#"
              className="text-sm text-blue-400 hover:underline hover:text-blue-600 mt-1 inline-block">
              Already have an account?
            </a>
          </div>
          <div>
          <button className="btn glass btn-sm btn-block p-2 mt-2 m-auto">
              Login
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
