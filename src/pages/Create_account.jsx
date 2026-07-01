import { useState } from "react";
import Footer from "../comman/Footer";
import Navbar from "../comman/Navbar";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";



function Create_account(){
    const navigate = useNavigate()

   const[user_name,setUserName]=useState("");
   const[user_mobile,setUserMobile]=useState("");
   const[user_Email,setUserEmail]=useState("");
   const[user_password,setPassword]=useState("");
      
      function formsubmit(e){
        e.preventDefault()
        
        var obj={
            "user_name":user_name,
            "user_mobile":user_mobile,
            "user_Email":user_Email,
            "user_password":user_password   
        }
        console.log(obj);

        axios.post("https://a2zithub.org/dairy/abi/user_register",obj).then((res)=>{
            console.log("server responce",res.data)
            navigate("/login");
        })
      }

    return(
        <>
        <Navbar/>
    <br /> 
    <br />
<form action="" method="" onSubmit={formsubmit}>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
        <div className="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <p className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Create an account
            
            
              </p><div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Your username
                </label>
                <input onChange={(e)=>setUserName(e.target.value)}  placeholder="Enter Username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" id="username" type="text"/>
              </div>

               <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Your Mobile
                </label>
                <input onChange={(e)=>setUserMobile(e.target.value)} placeholder="Enter mobile" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" id="username" type="number"/>
              </div>

             <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Your Email
                </label>
                <input onChange={(e)=>setUserEmail(e.target.value)} placeholder="Enter Email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" id="username" type="email"/>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Password
                </label>
                <input onChange={(e)=>setPassword(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" placeholder="••••••••" id="password" type="password"/>
              </div>
              
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 bg-gray-700 border-gray-600 focus:ring-primary-600 ring-offset-gray-800" type="checkbox" aria-describedby="terms" id="terms"/>
                </div>
                <div className="ml-3 text-sm">
                  <label className="font-light text-gray-500 text-gray-300">
                    I accept the
                    <a href="#" class="font-medium text-primary-600 hover:underline text-primary-500">
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>

              <button className="w-full bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  focus:ring-blue-800 text-white" type="submit">
                Create an account
              </button>

              <p className="text-center">Already Exit Account <Link to="/login" className="font-bold text-blue-500">login</Link> </p>
            
          </div>
        </div>
      </div></form>
    
        <Footer/>
        </>
    )
}
export default Create_account;