import { useEffect, useState } from "react";
import Footer from "../comman/Footer";
import Navbar from "../comman/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";

function Cart() {
  const [cartinfo, setCartInfo] = useState([]);
  const[subtotal,setSubTotal]=useState(0);

  const obj = {
    token: localStorage.getItem("token"),
  };

  function getData(){
     axios.post("https://a2zithub.org/dairy/abi/cart_list", obj).then((res) => {
      console.log("cart list responce ", res.data);
      setCartInfo(res.data);

      var sum=0;

      res.data.map((val,index)=>{
        sum= sum + val.price * val.qty;
      })
      setSubTotal(sum);
    });
  }

  useEffect(() => {
    getData();
  }, []);

  function removeCart(product_econ_cart_id) {
    const obj = {
      product_econ_cart_id: product_econ_cart_id,
      token: localStorage.getItem("token"),
    };
    axios
      .post("https://a2zithub.org/dairy/abi/remove_cart_qty", obj)
      .then((res) => {
        console.log("responce remove", res.data);
          getData();
      });
  }

  function incqty(product_econ_cart_id) {
    const obj = {
      product_econ_cart_id: product_econ_cart_id,
      token: localStorage.getItem("token"),
    };
    axios
      .post("https://a2zithub.org/dairy/abi/inc_cart_qty", obj)
      .then((res) => {
        console.log(" inc responce", res.data);
          getData();
      });
  }

  function decqty(product_econ_cart_id) {
    const obj = {
      product_econ_cart_id: product_econ_cart_id,
      token: localStorage.getItem("token"),
    };
    axios
      .post("https://a2zithub.org/dairy/abi/dec_cart_qty", obj)
      .then((res) => {
        console.log("dec responce", res.data);
          getData();
      });
  }

  return (
    <>
      <Navbar /> <br />
      <br />
      <h1 className="text-center text-5xl font-bold">Cart Page</h1> <br />{" "}
      <br />
      <div className="flex justify-center">
        <table className=" text-center w-[90%]">
          <tr>
            <th>Product</th>
            <th>Name</th>
            <th>Price</th>
            <th>QTY</th>
            <th>Total</th>
            <th>Action</th>
          </tr>

          {cartinfo.map((Val, index) => (
            <tr>
              <td className="flex justify-center my-2">
                <img
                  className="w-[100px] h-[100px]"
                  src={Val.product_img}
                  alt=""
                />
              </td>
              <td>{Val.product_name}</td>
              <td>{Val.price}</td>
              <td>
                <button
                  onClick={() => decqty(Val.product_econ_cart_id)}
                  className="p-2 m-2 border"
                >
                  -
                </button>
                {Val.qty}
                <button
                  onClick={() => incqty(Val.product_econ_cart_id)}
                  className=" p-2 m-2 border"
                >
                  +
                </button>
              </td>
              <td className="text-center">
                <td>{Val.price * Val.qty}</td>
              </td>
              <td>
                <button
                  onClick={() => removeCart(Val.product_econ_cart_id)}
                  className="p-2 border"
                >
                  &#10005;
                </button>
              </td>
            </tr>
          ))}
        </table>
      </div>{" "}
      <br />
      {cartinfo.length == 0 ? (
        <div className="text-center">
          <Link to="/products">
            <button className=" p-2 bg-blue-600 border text-white text-center">
              Shop Now
            </button>
          </Link>
        </div>
      ) : (
        <h1 className="text-center">
          <b className="text-3xl">Total:{subtotal} &#8377;</b>
          <Link to="/Checkout"><button className="bg-green-500 p-3 text-white rounded-lg px-4  ml-9">Checkeout</button></Link>
        </h1>
      )}
      <Footer />
    </>
  );
}
export default Cart;
