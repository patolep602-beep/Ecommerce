import { useState } from "react";
import { Menu, X, ShoppingCart, User } from "lucide-react";
import { Link } from "react-router-dom";
import { RiLuggageCartLine, RiShoppingCartFill, RiUserFill } from "@remixicon/react";

function Navbar(){
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <div className="text-2xl font-bold text-blue-600">
            ShopEase
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-blue-600 font-medium">
              Home 
            </Link>

            <Link to="/Products" className="hover:text-blue-600 font-medium">
              Products
            </Link>

            <a href="#" className="hover:text-blue-600 font-medium">
              About Us
            </a>

            <a href="#" className="hover:text-blue-600 font-medium">
              Contact Us
            </a>

            {localStorage.getItem("token")?(
               <div>
               <Link to="/Cart">
             <button className="relative  px-4 py-2 m-3 bg-blue-600 text-white rounded-lg">
            <RiShoppingCartFill />
             </button>
             </Link>
              
              <Link to="/Profile">
             <button className="px-4 py-2  my-5 bg-blue-600 text-white rounded-lg">
            <RiUserFill />
             </button>
             </Link>
            </div>
            ):(
               <div>
               <Link to="/Create_account">
             <button className="relative  px-4 py-2 m-3 bg-blue-600 text-white rounded-lg">
             sign In
             </button>
             </Link>
              
              <Link to="/Login">
             <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
             Login
             </button>
             </Link>
            </div>
            )}


          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <a href="#" className="hover:text-blue-600">
                Home
              </a>

              <a href="#" className="hover:text-blue-600">
                Products
              </a>

              <a href="#" className="hover:text-blue-600">
                Cart
              </a>

              <a href="#" className="hover:text-blue-600">
                Profile
              </a>

              <a href="#" className="hover:text-blue-600">
                About Us
              </a>

              <a href="#" className="hover:text-blue-600">
                Contact Us
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;