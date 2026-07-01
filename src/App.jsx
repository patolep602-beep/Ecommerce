import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Products from "./pages/Products"
import Product_det from "./pages/Product_det"
import Login from "./pages/Login"
import Create_account from "./pages/Create_account"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
import Order_list from "./pages/Order_list"

function App() {
  

  return (

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/Products" element={<Products/>}></Route>
      <Route path="/Product_det/:product_id" element={<Product_det/>}></Route>
      <Route path="/Login" element={<Login/>}></Route>
      <Route path="/Create_account" element={<Create_account/>} ></Route>
      <Route path="/Cart" element={<Cart/>}></Route>
      <Route path="/Checkout" element={<Checkout/>}></Route>
      <Route path="/Order_list" element={<Order_list/>}></Route>
    </Routes>
    </BrowserRouter>

  )
}

export default App
