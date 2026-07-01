import { useState, useEffect } from "react"
import Footer from "../comman/Footer"
import Navbar from "../comman/Navbar"
import { useParams } from "react-router-dom"
import axios from "axios"


function Product_det(){
const {product_id}=useParams()
const [product_info,setProductInfo]=useState({})

useEffect(()=>{
    const obj={
        "product_id":product_id,
        "token":localStorage.getItem("token")
    }

  axios.post("https://a2zithub.org/dairy/abi/product_by_id",obj).then((res)=>{
    setProductInfo(res.data)
   console.log("server responce",res.data)
  })
},[])

function addToCart(){
      const obj={
        "product_id":product_id,
        "token":localStorage.getItem("token")
    }

    console.log(obj)

    axios.post("https://a2zithub.org/dairy/abi/addtocart",obj).then((res)=>{
        console.log("server responce",res.data)

        window.location.reload()
    })

}

    return(
        <>
        <Navbar/>
        <br />
        <br />
        <h1 className="text-center text-4xl font-bold mb-8">
            Product Details 
            </h1> 
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white shadow-lg rounded-lg">
                   <div>
                   <img src={product_info.product_img}
                   className="w-full h-[400px] object-cover rounded-lg"
                   />
                    </div> 
                    <div>
                        <h2 className="text-3xl font-bold mb-4">
                           {product_info.product_name}
                            </h2>
                        <p className="text-gray-600 mb-4">
                            Deatils
                        </p>
                        <h3 className="text-2xl font-semibold text-green-600 mb-4">
                        ₹ {product_info.price}
                        </h3>
      
                         {product_info.cart == "No" ?(<button onClick={addToCart} className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700" >Add To Cart</button>):""}
                         {product_info.cart == "Yes" ?(<button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-grren-700"> Already Added To Cart</button>):""}
                         
                      
                    </div>

                </div>
            </div>
        <Footer/>
        </>
    )
}
export default Product_det