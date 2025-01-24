import axios from "axios";
import { Link, useNavigate } from "react-router";
import { appRoutes } from "../constant/constant";
import { ToastContainer, toast } from 'react-toastify';


export default function Register(){
const navigate = useNavigate()



const handleRegister =(e)=>{
e.preventDefault()
try {
  
  const obj= {
    fullname : e.target[0].value,
    email : e.target[1].value,
    password : e.target[2].value,
  }
  
  axios.post(appRoutes.register,obj).then((res)=>{
    console.log("RESS =>" , res);
    toast("User Created Successfully ");
    setTimeout(() => {
      navigate("/auth");
    }, 4000); // Navigate after 4 seconds

  }).catch((err)=>{
    console.log("ERROR => " , err.message);
    
  })
} catch (error) {
  console.log("err => " , error.message);
  



}

}

    return(
<>
  {/* component */}
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/gh/Loopple/loopple-public-assets@main/motion-tailwind/motion-tailwind.css"
  />
  <ToastContainer />
  <div className="container flex flex-col mx-auto bg-white rounded-lg  ">
    <div className="flex justify-center w-full h-full my-auto xl:gap-14 lg:justify-normal md:gap-5 draggable">
      <div className="flex items-center justify-center w-full lg:p-12">
        <div className="flex items-center xl:p-10">
          <form onSubmit={handleRegister} className="flex flex-col w-full h-full pb-6 text-center bg-white rounded-3xl">
            <h3 className="mb-3 text-4xl font-extrabold text-dark-grey-900">
              Create Your Account
            </h3>
            <p className="mb-4 text-grey-700">Enter your email and password</p>
            <a className="flex items-center justify-center w-full py-4 mb-6 text-sm font-medium transition duration-300 rounded-2xl text-grey-900 bg-grey-300 hover:bg-grey-400 focus:ring-4 focus:ring-grey-300">
              <img
                className="h-5 mr-2"
                src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/logos/logo-google.png"
                alt=""
              />
              Sign in with Google
            </a>
            <div className="flex items-center mb-3">
              <hr className="h-0 border-b border-solid border-grey-500 grow" />
              <p className="mx-4 text-grey-600">or</p>
              <hr className="h-0 border-b border-solid border-grey-500 grow" />
            </div>
            <label
              htmlFor="fullname"
              className="mb-2 text-sm text-start text-grey-900"
            >
              Full Name
            </label>
            <input
              id="fullname"
              type="fullname"
              placeholder="John Doe"
              className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"
            />
            <label
              htmlFor="email"
              className="mb-2 text-sm text-start text-grey-900"
            >
              Email*
            </label>
            <input
              id="email"
              type="email"
              placeholder="mail@loopple.com"
              className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"
            />
            <label
              htmlFor="password"
              className="mb-2 text-sm text-start text-grey-900"
            >
              Password*
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter a password"
              className="flex items-center w-full px-5 py-4 mb-5 mr-2 text-sm font-medium outline-none focus:bg-grey-400 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"
            />
            <button type="submit" className="w-full px-6 py-5 mb-5 text-sm font-bold leading-none text-white transition duration-300 md:w-96 rounded-2xl hover:bg-purple-blue-600 focus:ring-4 focus:ring-purple-blue-100 bg-purple-blue-500">
              Sign In
            </button>
            <p className="text-sm leading-relaxed text-grey-900">
              Already Have an Account? {" "}
              <Link className="font-bold text-grey-700" to={"/auth"} >
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
</>



    )
}