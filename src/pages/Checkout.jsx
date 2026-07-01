import { useState } from "react";
import Footer from "../comman/Footer";
import Navbar from "../comman/Navbar";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Checkout() {
    const Navigate=useNavigate();
  const [area, setArea] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [pincode, setPincode] = useState("");
  const [payment_type, setPayemnt_Type] = useState("");
  const[place_order,setPlace_Order]=useState("");

  function  Place_order(e){
    e.preventDefault();

    var obj={
        area,city,district,state,country,pincode,payment_type, "token":localStorage.getItem("token")
    }
    axios.post("https://a2zithub.org/dairy/abi/place_order",obj).then((res)=>{
      Navigate("/Order_list")
    })
    
  }

  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto p-5">
        <h1 className="text-center text-4xl font-bold mb-8">Checkout</h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Address Form */}
          <div className=" p-5 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">Delivery Address</h2>

            <form onSubmit={Place_order} className="space-y-3">
              <input
              onChange={(e)=>setArea(e.target.value)}
                type="text"
                placeholder="Area"
                className="w-full border p-2 rounded"
              />
              <input
              onChange={(e)=>setCity(e.target.value)}
                type="text"
                placeholder="City"
                className="w-full border p-2 rounded"
              />
              <input
              onChange={(e)=>setDistrict(e.target.value)}
                type="text"
                placeholder="District"
                className="w-full border p-2 rounded"
              />
              <input
              onChange={(e)=>setState(e.target.value)}
                type="text"
                placeholder="State"
                className="w-full border p-2 rounded"
              />
              <input
              onChange={(e)=>setCountry(e.target.value)}
                type="text"
                placeholder="Country"
                className="w-full border p-2 rounded"
              />
              <input
              onChange={(e)=>setPincode(e.target.value)}
                type="number"
                placeholder="Pincode"
                className="w-full border p-2 rounded"
              />

              <select onChange={(e)=>setPayemnt_Type(e.target.value)} className="w-full border p-2 rounded">
                <option>Select Payment Type</option>
                <option>Online</option>
                <option>Cash On Delivery</option>
              </select>
               {/* <Link to="Order_list">     */}
              <button className="w-full bg-green-600 text-white py-2 rounded" type="submit">
                Place Order
              </button>
              {/* </Link> */}
            </form>
          </div>

          {/* Order Summary */}
          <div className=" p-5 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Checkout;
