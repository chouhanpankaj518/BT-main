


import React, { useState, useEffect } from 'react';
import { BsCart2, BsPerson } from "react-icons/bs";
import { IoIosMenu, IoIosSearch, IoIosClose } from 'react-icons/io';
import { useNavigate, Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from "../assets/logo/Bold_Thread_Revised-removebg-preview.png"

export default function Navbar({count}) {
  // Essential state and hooks
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isInputVisible, setIsInputVisible] = useState(false); // New state for input visibility

  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  // Handlers
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const toggleInputVisibility = () => { // New function to toggle input visibility
    setIsInputVisible(!isInputVisible);
  };


  function openadminpanel(){
    navigate("/login");
  };

  return (
    <div className="relative w-full xl:px-4  ">
      {/* Mobile Menu Button */}
      <button
        className="absolute left-4 top-4 z-50 lg:hidden"
        onClick={toggleMenu}
      >
        {isMenuOpen ? 
          <IoIosClose className='text-4xl mt-5 sticky  top-10 ml-10 ' /> :
          <IoIosMenu className='text-4xl ' />
        }
      </button>

      {/* Main Navigation */}
      <nav className="flex flex-col justify-around items-center ">
 
        <div className="w-full flex  lg:flex-row xl:justify-around justify-around   items-center xL:gap-5   xl:mt-3 mt-12 ">
 
 
          <img 
          src={logo} 
          alt="logo"
          className='logo size-44 xl:w-52 xl:mt-[-15px] cursor-pointer'
          onClick={toggleInputVisibility} // Add click handler to logo
            />

          <div className="flex items-center justify-center gap-4">
            <div className={`relative w-52 transition-all duration-500 ease-in-out ${isInputVisible ? 'max-w-xs opacity-100' : 'max-w-0 opacity-0'}`}>
              <TextField
                className="xl:w-full "
                label="Search by product.."
                variant="standard"
              />
              <IoIosSearch className="absolute right-2 top-1/2 text-xl" />
            </div>
           <div>
             <span className='text-sm  ml-3'>{count}</span>   
           <BsCart2 
              className="text-gray-600 hover:text-blue-500 cursor-pointer" 
              size={25}
              onClick={() => navigate('/cart')}       
            />
           </div>
            <BsPerson 
              onClick={()=>openadminpanel()}
              className="text-gray-600 hover:text-blue-500 cursor-pointer mt-4" 
              size={25}
            />
           
           
          </div>
        </div>

        <div
          className={`
            fixed top-0 left-0 w-full xl:h-0  h-96  py-3
            lg:static lg:h-auto lg:bg-transparent
            transition-transform duration-300 ease-in-out
            ${isMenuOpen ? 'translate-x-0 bg-white' : '-translate-x-full lg:translate-x-0 '}
            flex items-center justify-center
            z-40 lg:z-auto
          `}
        >
          <div className={`flex flex-col lg:flex-row gap-6 lg:gap-12 text-xl ${isMenuOpen ? 'translate-x-0  mt-10'  : '-translate-x-full lg:translate-x-0' }`}>
            
            <Link to="/BT/" className="hover:text-blue-500" onClick={()=>setIsMenuOpen(false)}>Home</Link>
            <Link to="/new-arrivals" className="hover:text-blue-500"  onClick={()=>setIsMenuOpen(false)} >New Arrivals</Link>
            <Link to="/trending" className="hover:text-blue-500"  onClick={()=>setIsMenuOpen(false)} >Trending</Link>
            <Link to="/customized" className="hover:text-blue-500"  onClick={()=>setIsMenuOpen(false)} >Customized</Link>
            <Link to="/upper-wear" className="hover:text-blue-500"  onClick={()=>setIsMenuOpen(false)} >Upper Wear</Link>
            <Link to="/bottom-wear" className="hover:text-blue-500"  onClick={()=>setIsMenuOpen(false)}>Bottom Wear</Link>
            <Link to="/seasonals" className="hover:text-blue-500"  onClick={()=>setIsMenuOpen(false)}>Seasonals</Link>
            
          </div>
        </div>
      </nav>
    </div>
  );
}