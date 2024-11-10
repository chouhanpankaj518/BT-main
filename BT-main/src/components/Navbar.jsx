// import React, { useState,useEffect } from 'react';
// import { IoLocationSharp } from "react-icons/io5";
// import { BsCart2 } from "react-icons/bs";
// import { BsPerson } from "react-icons/bs";
// import { IoIosMenu } from 'react-icons/io';
// import { IoIosSearch } from "react-icons/io";
// import { IoIosClose } from 'react-icons/io';
// import { useNavigate } from 'react-router-dom';
// import TextField from '@mui/material/TextField';

// import IND from "../assets/ind.png";
// import logo from "../assets/bold thread.png"
// import {Link} from "react-router-dom"
// import AOS from 'aos';
// import 'aos/dist/aos.css';



// export default function Navbar({setModalIsOpen}) {
//   let navigate = useNavigate();
  
  
//   useEffect(() => {
//     const addGoogleTranslateScript = () => {
//       const script = document.createElement('script');
//       script.src = "https://translate.google.com/translate_a/element.js?cb=loadGoogleTranslate";
//       script.async = true;
//       document.body.appendChild(script);

//       window.loadGoogleTranslate = () => {
//         new window.google.translate.TranslateElement({
//           pageLanguage: 'en',
//           includedLanguages: 'en,hi', // Include only English (en) and Hindi (hi)
//           layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE // Inline layout
//         }, 'google_element');
//       };
//     };
//     addGoogleTranslateScript();
//   }, []);
  

  
//   const openModal = () => {
//     setModalIsOpen(true);
//     navigate("/login");
//   };

//   useEffect(() => {
//     AOS.init({
//       duration: 1200, 
     
//     });
//   }, []);

//   let [isopen , setisopen]=useState(false)

//   const addTogglebtn=()=>{
//      setisopen(!isopen)
//   }

  

 
//   return (
//     <div className="nav-container md-auto   text-xl  flex justify-center align-middle ">
//       <button
//             className="toggle-btn block md:hidden text-gray-500  hover:text-gray-600 focus:outline-none focus:text-gray-600"
//             onClick={addTogglebtn}
//           >
//              {isopen ? (
//           <IoIosClose className='text-3xl'/> 
//         ) : (
//           <IoIosMenu className='text-3xl'/> 
//         )}
//           </button>
//       <nav className=" navbar  flex justify-around flex-col xl:ml-0 ml-[-100px] ">

//         <div className="nav1-container ml-[-100px] mr-[-200px]  flex justify-between align-middle">
          
//           <div  className="location-icon  flex items-center justify-center space-x-4 mb-4 md:mb-0 ">
//             <IoLocationSharp className={` text-black text-3xl  xl:block ${isopen ? "block" : "hidden"}`} />
 
//  <div className="flex justify-center bg-transparent mx-auto">
//   <img
//     src={IND}
//     alt="Indian Flag"
//     className={`  w-10 h-8 mr-2 rounded-full size-10 bg-transparent xl:block ${isopen ? "block" : "hidden"}`}
//   />
//   <div className="relative">
//      {/* <select
      
//       className={` appearance-none bg-transparent text-gray-700 font-semibold py-2 pl-3 pr-8 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent xl:block ${isopen ? "block" : "hidden"} `}
//       style={{
//         backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3Csvg  xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7' /%3E%3C/svg%3E")`,
//         backgroundPosition: "right 0.5rem center",
//         backgroundRepeat: "no-repeat",
//         backgroundSize: "1rem",
//       }}
//     >
         
//           <option  value="english" className="py-1" >English</option>
//           <option value="hindi" className="py-1">Hindi</option>
//         </select> */}
//          <button
//          className='h-10'
//       // className={` appearance-none bg-transparent text-gray-700 font-semibold py-2 pl-3 pr-8 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent xl:block ${isopen ? "block" : "hidden"} `}
//           id="google_element"></button>
        
//   </div>
// </div>
//           </div>


//           <div className='size-32  mt-[-10px]' >
//             {/* <h1 className='logo text-5xl'>Logo</h1> */}
//             <img src={logo} alt="logo" className='logo size30 text-black'  />
//           </div>
//           <div className="flex items-center space-x-4">
//       <div className="relative flex-grow">
//         {/* <input
//           type="text"
//           className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           placeholder="Search by product"
//         /> */}
//               <TextField
//           className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              
//                id="standard-basic"
//                 label="Search by product.."
//                 color='black'
//                  variant="standard"
//                   />

//         <IoIosSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black" size={20} />
//       </div>
//       <BsCart2 className="text-gray-600 cursor-pointer hover:text-blue-500" size={35} />
//       <BsPerson className="text-gray-600  cursor-pointer hover:text-blue-500" size={35} />
//       <button className='py-1 px-4 border-2 border-black rounded-lg'  onClick={openModal}>Sign in</button>
//     </div>
//         </div>
//       {/* <div className={`navlink px-4 py-2 mt-10 font-semibold w-full gap-12 bottom-10 bg-transparent transition-all duration-500 ease-in-out`}>
//         <div className={`container flex flex-col md:flex-row items-center space-y-5 md:space-y-0 md:space-x-20 mt-4 md:mt-0 ${isopen ? "block " : "hidden"} md:block `}> */}
//           <div  className={`navlink   w-full bg-transparent transition-all duration-500 ease-in-out   xl:pb-10`}
//             style={{ maxHeight: isopen ? "1000px" : "0", overflow: "hidden" }} >
//           <div data-aos="flip-left" className="container flex flex-col md:flex-row items-center space-y-5 md:space-y-0 md:space-x-20  text-1xl xl:w-full w-96 mx-aoto">
//           <Link  to="/" className="nav-underline ">Home</Link>
//           <Link to="/new-arrivals" className="nav-underline">New Arrivals</Link>
//           <Link to="/trending" className="nav-underline">Trending</Link>
//           <Link to="/customized" className="nav-underline">Customized</Link>
//           <Link to="/upper-wear" className="nav-underline">Upper Wear</Link>
//           <Link to="/bottom-wear" className="nav-underline">Bottom Wear</Link>
//           <Link to="/seasonals" className="nav-underline">Seasonals</Link>
//         </div>
//       </div>
//       </nav>
//     </div>
//   );
// }




// import React, { useState, useEffect, useRef } from 'react';
// import { IoLocationSharp } from "react-icons/io5";
// import { BsCart2 } from "react-icons/bs";
// import { BsPerson } from "react-icons/bs";
// import { IoIosMenu } from 'react-icons/io';
// import { IoIosSearch } from "react-icons/io";
// import { IoIosClose } from 'react-icons/io';
// import { useNavigate } from 'react-router-dom';
// import TextField from '@mui/material/TextField';

// import IND from "../assets/ind.png";
// import logo from "../assets/bold thread.png"
// import {Link} from "react-router-dom"
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// export default function Navbar({setModalIsOpen}) {
//   let navigate = useNavigate();
//   let [isopen, setisopen] = useState(false);
//   const [showTranslator, setShowTranslator] = useState(false);
  
  // const googleTranslateElementRef = useRef(null);
  // useEffect(() => {
  //   const addGoogleTranslateScript = () => {
  //     const script = document.createElement('script');
  //     script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
  //     script.async = true;
  //     document.body.appendChild(script);

  //     window.googleTranslateElementInit = () => {
  //       console.log("Initializing Google Translate"); // Debug log
  //       try {
  //         new window.google.translate.TranslateElement(
  //           {
  //             pageLanguage: 'en',
  //             includedLanguages: 'en,hi',
  //             layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
  //           },
  //           'google_element'
  //         );
  //         console.log("Google Translate initialized successfully"); // Debug log
  //       } catch (error) {
  //         console.error("Error initializing Google Translate:", error); // Debug log
  //       }
  //     };
  //   };

  //   addGoogleTranslateScript();

  //   return () => {
     
  //     const script = document.querySelector('script[src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"]');
  //     if (script) {
  //       document.body.removeChild(script);
  //     }
  //   };
  // }, []);

  // useEffect(() => {

  //   const style = document.createElement('style');
  //   style.textContent = `
  //     #google_element {
  //       display: inline-block;
  //       vertical-align: middle;
  //     }
  //     .goog-te-gadget {
  //       font-family: Arial, sans-serif;
  //       font-size: 14px;
  //       color: #666;
  //       white-space: nowrap;
  //     }
  //     .goog-te-gadget .goog-te-combo {
  //       margin: 4px 0;
  //       padding: 3px 6px;
  //       border: 1px solid #ccc;
  //       border-radius: 4px;
  //       font-size: 12px;
  //       height: 28px;
  //       width: 100%;
  //     }
  //     .goog-te-banner-frame {
  //       display: none !important;
  //     }
  //     body {
  //       top: 0 !important;
  //     }
  //     .skiptranslate {
  //       display: block !important;
     
  //     }
  //     .goog-te-gadget img {
  //       display: none !important;
  //     }
  //     .goog-te-gadget-simple {
  //       background-color: transparent !important;
  //       border: none !important;
  //     }
  //     .goog-te-gadget-simple .goog-te-menu-value span {
  //       color: #666;
  //       font-size: 12px;
  //     }
  //   `;
  //   document.head.appendChild(style);

  //   return () => {
  //     // Cleanup function to remove the style when component unmounts
  //     document.head.removeChild(style);
  //   };
  // }, []);

//   const openModal = () => {
//     setModalIsOpen(true);
//     navigate("/login");
//   };

//   useEffect(() => {
//     AOS.init({
//       duration: 1200,
//     });
//   }, []);

//   const addTogglebtn = () => {
//     setisopen(!isopen);
//   };

//   // const toggleTranslator = () => {
//   //   setShowTranslator(!showTranslator);
//   //   console.log("Translator toggled:", !showTranslator); // Debug log
//   // };

//   return (
//     <div className="nav-container md-auto text-xl flex justify-center align-middle">
//       <button
//         className="mr-5 toggle-btn block md:hidden text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
//         onClick={addTogglebtn}
//       >
//         {isopen ? (
//           <IoIosClose className='text-3xl'/> 
//         ) : (
//           <IoIosMenu className='text-3xl'/> 
//         )}
//       </button>
//       <nav className="navbar flex justify-center flex-col xl:ml-0 ml-[200px]">
//         <div className="nav1-container ml-[-100px] mr-[-200px] flex justify-center  xl:gap-60 align-middle">
//           <div className="location-icon flex  items-center justify-center space-x-4 mb-4 md:mb-0">
//             <IoLocationSharp className={`text-black text-3xl xl:block ${isopen ? "block" : "hidden"}`} />
//             <div className="flex justify-center  bg-transparent mx-auto relative">
//               <img
//                 src={IND}
//                 alt="Indian Flag"
//                 className={`w-10 h-8 mr-2 rounded-full size-10 bg-transparent xl:block ${isopen ? "block" : "hidden"} cursor-pointer`}
//                 // onClick={toggleTranslator}
//               />
//               <div className={`absolute top-full left-0 mt-2 bg-white shadow-md rounded-md p-2 z-10 min-w-[200px] ${showTranslator ? 'block' : 'hidden'}`}>
//                 {/* <div id="google_element" ref={googleTranslateElementRef}></div> */}
//               </div>
//             </div>
//           </div>

//           <div className='size-32 mt-[-10px]'>
//             <img src={logo} alt="logo" className='logo size-44 xl:w-52 xl:mt-[-15px] text-black xl:ml-32' />
//           </div>
          
          
//           <div className="searchfield flex items-center space-x-4 xl:ml-0 ">
//             <div className="relative flex-grow w-52"> 
//               <TextField
//                 className="
//                 w-32 sm:w-52 md:w-80 lg:w-36 
//                 px-2 sm:px-4 pr-10 
//                 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 id="standard-basic"
//                 label="Search by product.."
//                 color='black'
//                 variant="standard"
//               />
//               <IoIosSearch  className="
//     absolute right-10 top-8 
//     md:right-6 md:top-6
//     lg:right-8 lg:top-8 
//     transform -translate-y-1/2 
//     text-black 
//     text-sm md:text-base lg:text-lg" size={20} />
//             </div>
//             <BsCart2 className="text-gray-600 cursor-pointer hover:text-blue-500" size={35}  onClick={()=>navigate('/cart')}/>
//             <BsPerson className="text-gray-600 cursor-pointer hover:text-blue-500" size={35} />
//             <button  className="
//     py-1 px-4 
//     border-2 border-black 
//     rounded-lg 
//     md:py-2 md:px-4 
//     lg:py-3 lg:px-8 
//     text-sm md:text-base lg:text-lg 
//     transition-all 
//     duration-300 
//     hover:bg-black hover:text-white" onClick={openModal}>Sign in</button>
//           </div>
//         </div>
        
        
//         <div className={`navlink w-full bg-transparent transition-all duration-500 ease-in-out xl:pb-10`}
//           style={{ maxHeight: isopen ? "1000px" : "0", overflow: "hidden" }}>
//           <div data-aos="flip-left" className="container flex flex-col md:flex-row items-center space-y-5 md:space-y-0 md:space-x-20 text-1xl xl:w-full w-96 mx-auto">
//             <Link to="/" className="nav-underline">Home</Link>
//             <Link to="/new-arrivals" className="nav-underline">New Arrivals</Link>
//             <Link to="/trending" className="nav-underline">Trending</Link>
//             <Link to="/customized" className="nav-underline">Customized</Link>
//             <Link to="/upper-wear" className="nav-underline">Upper Wear</Link>
//             <Link to="/bottom-wear" className="nav-underline">Bottom Wear</Link>
//             <Link to="/seasonals" className="nav-underline">Seasonals</Link>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }







// import React, { useState, useEffect } from 'react';
// import { IoLocationSharp } from "react-icons/io5";
// import { BsCart2 } from "react-icons/bs";
// import { BsPerson } from "react-icons/bs";
// import { IoIosMenu } from 'react-icons/io';
// import { IoIosSearch } from "react-icons/io";
// import { IoIosClose } from 'react-icons/io';
// import { useNavigate } from 'react-router-dom';
// import TextField from '@mui/material/TextField';

// import IND from "../assets/ind.png";
// import logo from "../assets/bold thread.png"
// import {Link} from "react-router-dom"
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// export default function Navbar({setModalIsOpen}) {
//   let navigate = useNavigate();
//   let [isopen, setisopen] = useState(false);
//   const [showTranslator, setShowTranslator] = useState(false);
//   const openModal = () => {
//     setModalIsOpen(true);
//     navigate("/login");
//   };

//   useEffect(() => {
//     AOS.init({
//       duration: 1200,
//     });
//   }, []);

//   function addTogglebtn(){
//     setisopen(!isopen);
//     alert("hii")
//   };



//   return (
//     <div className="nav-container md-auto text-xl flex justify-center align-middle">
//       <button
//         className= "toggle-btn block md:hidden text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
//         onClick={()=>addTogglebtn()}
//       >
//         {isopen ? (
//           <IoIosClose className='cursor-pointer text-3xl' onClick={()=>alert("hii")}/> 
//         ) : (
//           <IoIosMenu className='text-3xl cursor-pointer ' onClick={()=>alert("hii")}/> 
//         )}
//       </button>
//       <nav className="navbar flex justify-center flex-col xl:ml-0 ml-[200px]">
//         <div className="nav1-container ml-[-100px] mr-[-200px] flex justify-center  xl:gap-60 align-middle">
//           <div className="location-icon flex  items-center justify-center space-x-4 mb-4 md:mb-0">
//             <IoLocationSharp className={`text-black text-3xl xl:block ${isopen ? "block" : "hidden"}`} />
//             <div className="flex justify-center  bg-transparent mx-auto relative">
//               <img
//                 src={IND}
//                 alt="Indian Flag"
//                 className={`w-10 h-8 mr-2 rounded-full size-10 bg-transparent xl:block ${isopen ? "block" : "hidden"} cursor-pointer`}
//                 // onClick={toggleTranslator}
//               />
//               <div className={`absolute top-full left-0 mt-2 bg-white shadow-md rounded-md p-2 z-10 min-w-[200px] ${showTranslator ? 'block' : 'hidden'}`}>
//                 {/* <div id="google_element" ref={googleTranslateElementRef}></div> */}
//               </div>
//             </div>
//           </div>

//           <div className='size-32 mt-[-10px]'>
//             <img src={logo} alt="logo" className='logo size-44 xl:w-52 xl:mt-[-15px] text-black xl:ml-32' />
//           </div>
          
          
//           <div className="searchfield flex items-center space-x-4 xl:ml-0 ">
//             <div className="relative flex-grow w-52"> 
//               <TextField
//                 className="
//                 w-32 sm:w-52 md:w-80 lg:w-36 
//                 px-2 sm:px-4 pr-10 
//                 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 id="standard-basic"
//                 label="Search by product.."
//                 color='black'
//                 variant="standard"
//               />
//               <IoIosSearch  className="
//     absolute right-10 top-8 
//     md:right-6 md:top-6
//     lg:right-8 lg:top-8 
//     transform -translate-y-1/2 
//     text-black 
//     text-sm md:text-base lg:text-lg" size={20} />
//             </div>
//             <BsCart2 className="text-gray-600 cursor-pointer hover:text-blue-500" size={35}  onClick={()=>navigate('/cart')}/>
//             <BsPerson className="text-gray-600 cursor-pointer hover:text-blue-500" size={35} />
//             <button  className="
//     py-1 px-4 
//     border-2 border-black 
//     rounded-lg 
//     md:py-2 md:px-4 
//     lg:py-3 lg:px-8 
//     text-sm md:text-base lg:text-lg 
//     transition-all 
//     duration-300 
//     hover:bg-black hover:text-white" onClick={openModal}>Sign in</button>
//           </div>
//         </div>
        
        
//         <div className={`navlink w-full bg-transparent transition-all duration-500 ease-in-out xl:pb-10`}
//           style={{ maxHeight: isopen ? "1000px" : "0", overflow: "hidden" }}>
//           <div data-aos="flip-left" className="container flex flex-col md:flex-row items-center space-y-5 md:space-y-0 md:space-x-20 text-1xl xl:w-full w-96 mx-auto">
//             <Link to="/" className="nav-underline">Home</Link>
//             <Link to="/new-arrivals" className="nav-underline">New Arrivals</Link>
//             <Link to="/trending" className="nav-underline">Trending</Link>
//             <Link to="/customized" className="nav-underline">Customized</Link>
//             <Link to="/upper-wear" className="nav-underline">Upper Wear</Link>
//             <Link to="/bottom-wear" className="nav-underline">Bottom Wear</Link>
//             <Link to="/seasonals" className="nav-underline">Seasonals</Link>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }










import React, { useState, useEffect } from 'react';
import { IoLocationSharp } from "react-icons/io5";
import { BsCart2, BsPerson } from "react-icons/bs";
import { IoIosMenu, IoIosSearch, IoIosClose } from 'react-icons/io';
import { useNavigate, Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import AOS from 'aos';
import 'aos/dist/aos.css';

import IND from "../assets/ind.png";
// import logo from "../assets/bold thread.png";
import logo from "../assets/logo/Bold_Thread_Revised-removebg-preview.png"

export default function Navbar({count}) {
  // Essential state and hooks
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  // Handlers
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
 
 
          <img src={logo} alt="logo" className='logo size-44 xl:w-52 xl:mt-[-15px]  ' />

          <div className="flex items-center justify-center gap-4">
            <div className="relative w-52 ">
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