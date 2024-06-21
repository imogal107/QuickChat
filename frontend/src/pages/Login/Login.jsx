const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="p-6 w-full bg-gray-600 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10">
        <h1 className="text-3x1 font-semibold text-center text-gray-300">
          Login
          <span className="text-blue-400"> QuickChat</span>
        </h1>
        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-slate-400">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="input input-bordered w-full h-10"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-slate-400">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="input input-bordered w-full h-10"
            />
          </div>
          <div>
            <a href="#"
              className="text-sm text-blue-400 hover:underline hover:text-blue-600 mt-6 inline-block">
            {`Don't`} have an account?
            </a>
          </div>
          <div>
            <button className="btn glass btn-sm btn-block p-2 mt-5 m-auto">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

//STARTER CODE FOR THIS FILE
// const Login = () => {
//     return (
//             <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//               <div className="p-6 w-full bg-gray-600 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10">
//                   <h1 className="text-3x1 font-semibold text-center text-gray-300">Login
//                       <span className='text-blue-400'> QuickChat</span>
//                   </h1>
//                   <form>
//                       <div>
//                           <label className="label p-2">
//                               <span className='text-base label-text text-white'>Username</span>
//                           </label>
//                           <input type="text" placeholder="Enter Username" className="input input-bordered w-full h-10" />
//                       </div>
//                       <div>
//                       <label className="label p-2">
//                               <span className='text-base label-text text-white'>Password</span>
//                           </label>
//                           <input type="password" placeholder="Enter Password" className="input input-bordered w-full h-10" />
//                       </div>
//                       <div>
//                       <a href="#" className="text-sm text-blue-400 hover:underline hover:text-blue-600 mt-6 inline-block">I'm a simple link</a>
//                       </div>
//                       <div>
//                       <button className="btn glass btn-sm btn-block p-2 mt-5 m-auto">Login</button>
//                       </div>
//                   </form>
//               </div>
//           </div>

//     )
//   }

//   export default Login
