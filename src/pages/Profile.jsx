import { Link, useNavigate } from "react-router-dom";
import {
  User,
  ShoppingBag,
  Heart,
  ShoppingCart,
  LogOut,
} from "lucide-react";

import Navbar from "../comman/Navbar";
import Footer from "../comman/Footer";
import { useEffect, useState } from "react";
import axios from "axios";

function Profile() {

    const [profileinfo , setProfileinfo]  = useState([])

  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("token");
    navigate("/login");
  }

  useEffect(()=>{

    var obj ={
        "token":localStorage.getItem("token")
    }
    
    axios.post("https://a2zithub.org/dairy/abi/user_profile",obj).then((res)=>{
        console.log(res.data.data)
        setProfileinfo(res.data.data)
    })

  },[]);

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto mt-10 mb-10 border-4 rounded-xl p-6">

        <div className="grid grid-cols-12 gap-6">

          {/* Left Sidebar */}
          <div className="col-span-3">

            <div className="flex justify-center mb-6">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="profile"
                className="w-36 h-36 rounded-full border-4"
              />
            </div>

            <div className="border rounded-xl p-4 shadow-lg">

              <Link
                to="/order_list"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-green-100 text-xl"
              >
                <ShoppingBag size={22} />
                Order List
              </Link>

              <Link
                to="/profile"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-green-100 text-xl"
              >
                <User size={22} />
                Profile
              </Link>

              <Link
                to="/like"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-green-100 text-xl"
              >
                <Heart size={22} />
                Like
              </Link>

              <Link
                to="/cart"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-green-100 text-xl"
              >
                <ShoppingCart size={22} />
                Cart
              </Link>

              <button
                onClick={logout}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-red-100 text-red-600 text-xl w-full"
              >
                <LogOut size={22} />
                Logout
              </button>

            </div>
          </div>

          {/* Right Section */}
          <div className="col-span-9 border rounded-xl p-8">

            <h1 className="text-4xl font-bold mb-8">
              My Profile
            </h1>

            <div className="grid md:grid-cols-2 gap-8">

            {profileinfo.map((val,index)=>(

                <>

              <div>
                <label className="font-semibold">Full Name</label>
                <input
                  type="text"
                  value={val.user_name}
                  className="w-full border rounded-lg p-3 mt-2"
                  readOnly
                />
              </div>

              <div>
                <label className="font-semibold">Email</label>
                <input
                  type="email"
                  value={val.user_email}
                  className="w-full border rounded-lg p-3 mt-2"
                  readOnly
                />
              </div>

              <div>
                <label className="font-semibold">Mobile</label>
                <input
                  type="text"
                  value={val.user_mobile}
                  className="w-full border rounded-lg p-3 mt-2"
                  readOnly
                />
              </div>

              <div>
                <label className="font-semibold">Address</label>
                <input
                  type="text"
                  value=""
                  className="w-full border rounded-lg p-3 mt-2"
                  readOnly
                />
              </div>

              </>
           
          ))}
            
           </div>



          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default Profile;