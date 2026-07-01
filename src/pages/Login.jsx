import { Link } from "react-router-dom";
import Footer from "../comman/Footer";
import Navbar from "../comman/Navbar";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login(){
  const navigate =useNavigate();
     const[user_mobile,setUserMobile]=useState("");
     const[user_password,setUserPassword]=useState("");
     const[error,setError]=useState("");

      function LoginProcess(e){
        e.preventDefault();
        const obj={
      "user_mobile":user_mobile,
      "user_password":user_password
      
     }
      
       console.log(obj);

       axios.post("https://a2zithub.org/dairy/abi/user_login",obj).then((res)=>{
        console.log("server responce",res.data)


        if(res.data.status =="success"){

          localStorage.setItem("token",res.data.token)
         navigate("/products");

        }else{
          setError("Invalid username and password")
        }
       })
      }

    
   

    return(
        <>
        <Navbar/>  <br /> <br />

        <form onSubmit = {LoginProcess}>
         <div className="flex items-center justify-center ">
      <div className="w-[360px] bg-white p-6 rounded-md shadow-lg border">
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-600"></div>
            <h2 className="font-semibold text-gray-800">ShopEase</h2>
          </div>

          <p className="text-sm text-gray-500">
            Create New Account...!
            <Link to="/Create_account" className="text-blue-600 font-medium hover:underline">
              sign in
            </Link>
          </p>
        </div>

        {/* Title */}
        <p className="text-red-600 text-center">{error}</p>
        <h1 className="text-2xl font-bold text-gray-900 leading-tight">
           Welcome Back ShopEase
        </h1>

        {/* Description */}
        <p className="text-gray-500 mt-5 mb-8 text-sm leading-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, ea?
        </p>

        {/* Form */}
       
          {/* Email */}
          <div className="mb-6">
            <input
            onChange={(e)=>setUserMobile(e.target.value)}
              type="number"
              placeholder="mobile"
              className="w-full border-b-2 border-gray-500 outline-none py-2 focus:border-blue-600"
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <input
              onChange={(e)=>setUserPassword(e.target.value)}
              type="password"
              placeholder="Password"
              className="w-full border-b-2 border-gray-500 outline-none py-2 focus:border-blue-600"
            />
          </div>

          {/* Checkbox */}
          <div className="flex items-center mb-8">
            <input type="checkbox" className="mr-2" />
            <label className="text-sm text-gray-500">
              I agree to the{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Terms and Conditions
              </a>
            </label>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="bg-blue-600 text-white px-8 py-3 justify-center rounded-md hover:bg-blue-700 transition duration-300 shadow-md"
          >
            Login
          </button>
       
      </div>
    </div>
    </form>


        <Footer/>
        </>
    )
}
export default Login;