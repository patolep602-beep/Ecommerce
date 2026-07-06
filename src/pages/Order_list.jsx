import { useEffect, useState } from "react";
import Footer from "../comman/Footer";
import Navbar from "../comman/Navbar";
import axios from "axios";
import { RiEyeLine } from "@remixicon/react";
import { Link } from "react-router-dom";

function Order_list() {
  const [orderinfo, setOrderinfo] = useState([]);

  useEffect(() => {
    const obj = {token: localStorage.getItem("token")};

    axios.post("https://a2zithub.org/dairy/abi/order_list", obj).then((res) => {
        setOrderinfo(res.data.order_det);
        console.log(res.data.order_det)
      });
  }, []);

  return (
    <>
      <Navbar />

      <div className="bg-gray-100 min-h-screen py-10">
        <div className="max-w-7xl mx-auto px-4">

          <h1 className="text-4xl font-bold text-center text-green-700">
            My Orders {}
          </h1>

          <p className="text-center text-gray-500 mt-2">
            View all your previous orders.
          </p>

          <div className="mt-8 bg-white rounded-xl shadow-lg overflow-hidden">

            <div className="overflow-x-auto">

              <table className="w-full">

                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="p-4">#</th>
                    <th className="p-4">Order Date</th>
                    <th className="p-4">Payment</th>
                    <th className="p-4">Amount</th>
                    <th className="p-4">Address</th>
                    <th className="p-4">Action</th>
                  </tr>
                </thead>

                <tbody>

                  {orderinfo.length > 0 ? (
                    orderinfo.map((val, index) => (
                      <tr
                        key={index}
                        className="border-b hover:bg-green-50 transition"
                      >
                        <td className="p-4 font-semibold">
                          {index + 1}
                        </td>

                        <td className="p-4">
                          {val.entry_date}
                        </td>

                        <td className="p-4">
                          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                            {val.payment_type}
                          </span>
                        </td>

                        <td className="p-4 font-bold text-green-600">
                          ₹{val.ttl_amount}
                        </td>

                        <td className="p-4 text-sm">
                          {val.area}, {val.city}, {val.district},
                          <br />
                          {val.state}, {val.country} - {val.pincode}
                        </td>

                        <td className="p-4">
                            <Link to={`/order_det/${val.product_order_id}`}>
                          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg">
                            <RiEyeLine />
                          </button>
                          </Link>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" className="py-10">
                        <div className="flex flex-col items-center">

                          <img
                            src="https://cdn-icons-png.flaticon.com/512/4555/4555971.png"
                            className="w-28"
                            alt=""
                          />

                          <h2 className="text-xl font-semibold mt-3">
                            No Orders Found
                          </h2>

                          <p className="text-gray-500">
                            You haven't placed any orders yet.
                          </p>
                        </div>
                      </td>
                    </tr>
                  )}

                </tbody>

              </table>

            </div>

          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default Order_list;