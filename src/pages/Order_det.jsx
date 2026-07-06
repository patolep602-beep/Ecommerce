// import Footer from "../comman/Footer";
// import Navbar from "../comman/Navbar";
// import { useParams } from "react-router-dom";
// import { useEffect } from "react";
// import axios from "axios";


// function Order_det(){

//     const {order_id} = useParams();

//     useEffect(()=>{

//         const obj ={
//             "token":localStorage.getItem("token"),
//             "order_id":order_id
//         }

//         axios.post("https://a2zithub.org/dairy/abi/order_det",obj).then((res)=>{
//             console.log("response",res.data)
//         })

//     },[])
//     return(
//         <>
//         <Navbar/> <br /> <br />
//          <h1 className="text-center text-5xl font-bold">Order detail{order_id}</h1>
//            {order && (
//         <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
//           <p>
//             <strong>Order ID :</strong> {order.order_id}
//           </p>

//           <p>
//             <strong>Date :</strong> {order.order_date}
//           </p>

//           <p>
//             <strong>Status :</strong> {order.order_status}
//           </p>

//           <p>
//             <strong>Total :</strong> ₹{order.total_amount}
//           </p>
//         </div>
//       )}
//         <Footer/>
//         </>
//     )
// }

// export default Order_det;

import { useEffect, useState } from "react";
import Footer from "../comman/Footer";
import Navbar from "../comman/Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";

function Order_det() {
  const { order_id } = useParams();

  const [order, setOrder] = useState(null);

useEffect(() => {
  const obj = {
    token: localStorage.getItem("token"),
    order_id: order_id,
  };

  console.log("Request:", obj);

  axios
    .post("https://a2zithub.org/dairy/abi/order_det", obj)
    .then((res) => {
      console.log("Response:", res.data);
        setOrder(res.data.order_det[0]);

    })
  
}, [order_id]);

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 py-10">
        <h1 className="text-center text-4xl font-bold mb-8">
          Order Detail
        </h1>

        {order ? (
          <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-6">
            <div className="space-y-4">
              <p>
                <strong>Order ID :</strong> {order.product_order_id}
              </p>

              <p>
                <strong>Order Date :</strong> {order.entry_date}
              </p>

              <p>
                <strong>Payment Type :</strong> {order.payment_type}
              </p>

              <p>
                <strong>Total Amount :</strong> ₹ {order.ttl_amount}
              </p>

              <p>
                <strong>Address :</strong><br />
                {order.area}, {order.city}, {order.district},
                <br />
                {order.state}, {order.country} - {order.pincode}
              </p>
            </div>
          </div>
        ) : (
          <h2 className="text-center text-xl">Loading...</h2>
        )}
      </div>

      <Footer />
    </>
  );
}

export default Order_det;