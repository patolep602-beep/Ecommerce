import { useState ,useEffect} from "react";
import Footer from "../comman/Footer";
import Navbar from "../comman/Navbar";
import ProductCard from "../comman/ProductCard";
import axios from "axios";


function  Products(){
    const[products,setProducts]=useState([]);
    useEffect(()=>{
        axios.get("http://a2zithub.org/dairy/abi/product_det").then((res)=>{
            console.log("server responce",res.data);
            setProducts(res.data)
        })
    })
    return(
        <>
        <Navbar/> <br /> <br />
        <h1 className="text-center text-5xl font-bold">products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-5">
           {products.map((Val,index)=>(
             <ProductCard data={Val}/>
           ))}
            
        </div>
        <Footer/>
        
        </>
    )
}
export default  Products;