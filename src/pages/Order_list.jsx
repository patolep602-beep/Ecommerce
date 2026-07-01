import { useEffect, useState } from "react";
import Footer from "../comman/Footer";
import Navbar from "../comman/Navbar";
import axios from "axios";



function Order_list(){

     const[order_list , setOrder_list]=useState([]);

     useEffect(()=>{
         
        var obj={
            "token":localStorage.getItem("token")
        }

        axios.post("https://a2zithub.org/dairy/abi/order_list",obj).then((res)=>{
            console.log("server responce",res.data)
          setOrder_list(res.data.data)
        })
     },[])

    return(
        <>
        <Navbar/>
        <br /><br />

        <h1 className="text-center font-bold text-4xl">Order List</h1>

        <table className="w-full border">
            <tr>
                <th>sr.no</th>
                <th>Order Date</th>
                <th>Payment Type</th>
                <th>Total Amount</th>
                <th>Order Address</th>
            </tr>
             {order_list.map((item, index) => (
    <tr key={item.order_id || index}>
      <td>{index + 1}</td>
      <td>{item.order_date}</td>
      <td>{item.payment_type}</td>
      <td>₹ {item.total_amount}</td>
      <td>
        {item.area}, {item.city}, {item.district}, {item.state},
        {item.country} - {item.pincode}
      </td>
    </tr>
  ))}
        </table>

        <Footer/>
        </>
    )
}

export default Order_list;