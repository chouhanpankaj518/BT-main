import React, { useEffect,useState } from 'react';
// import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Autoplay } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { FcLike } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';

import png from "../assets/npg tshirt.png"
import axios from 'axios'
import Carousel from 'react-bootstrap/Carousel';
import Footer from '../components/Footer'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';
import video from "../assets/AnimeV.webm"
import benner from "../assets/banner/anime-banner.jpg"
// import cardTshirt from "../assets/cards/anime t shirt.png"
import seasonal from "../assets/cards/sweatshirt.png"
import clothing from "../assets/cards/many t shirts.png"



 
export default function Home({setshowcard}) {
  const navigate = useNavigate();
  const [products, setProducts] = useState([])
  const [open, setOpen] = useState(8)
  const [productfilter , setproductsfilter] = useState([])



  useEffect(()=>{
    async function fetchData() {
      const response = await axios.get('https://fakestoreapi.com/products');
      console.log(response.data)
      setProducts(response.data)
    }
    fetchData()
  },[])

  useEffect(()=>{
     const filterdata = products.filter(item=>item.id<=open)
     setproductsfilter(filterdata)
     console.log("filter ", filterdata)
  },[open,products])

  function hendlepage(id){
    let data = products.filter(item=>item.id === id)
    setshowcard(data)
    navigate("/displaypage")
  }

  return (


    <div className="w-full mt-10 xl:ml-0">
      
      <Carousel interval={3000} controls={true} indicators={true}>
      <Carousel.Item>
        <img
          src="https://img.freepik.com/premium-psd/new-arrival-t-shirt-banner-template_361928-1580.jpg"
          alt='first'
          // style={{ width: '100%', height: '700px', background:"red"}}
          className='w-full xl:h-[95vh] h-[30vh]'
        />

      </Carousel.Item>
       
      <Carousel.Item>
        <img
          src="https://media.contra.com/image/upload/aj53mqlr3nih4jnyy5og"
          alt='second'
          // style={{ width: '100%', height: '700px',background:"blue" }}
             className='w-full xl:h-[95vh] h-[30vh]'
        />
      
      </Carousel.Item>

      <Carousel.Item>
        <img
          src="https://www.vocso.com/blog/wp-content/uploads/2023/02/TheMangaStore-Ecommerce-Case-Study.jpg"
          alt='third'
          // style={{ width: '100%', height: '700px', background:"green" }}
             className='w-full xl:h-[95vh] h-[30vh]'
        />
     
      </Carousel.Item>
    </Carousel>
        
    <div className='  xl:h-[430px] md:h-[200px]  rounded-sm flex justify-center  mt-20'>
  <img src={benner}  className='w-full h-full'/>
</div>
      
      
   
  
     
     
     
     <div className="mb-16 grid grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-20">
        
        <div
            className="group cursor-pointer overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl"
            onClick={() => navigate("/Tshirt")}
          >
            <div className="relative aspect-square">
              <img
                src="https://cdn.dribbble.com/userupload/14573009/file/original-31d1b24111ed36bda8368039d460dcba.jpg?resize=400x300&vertical=center"
         
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
           </div>
          </div>

         <div
            className="group cursor-pointer overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl "
            onClick={() => navigate("/bottom-wear")}
          >
            <div className="relative aspect-square ">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJQ6shZ9JVDI-tUgY7HhoxFfcQ6zLf1Tm-Jg&s"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
           </div>
          </div>
       
         
         <div
            className="group cursor-pointer overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl"
            onClick={() => navigate("/Hoodie")}
          >
            <div className="relative aspect-square">
              <img
                src={seasonal}
              
                
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
           
           
           </div>
          </div>

      <div
            className="group cursor-pointer overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl"
            onClick={() => navigate("/seasonals")}
          >
            <div className="relative aspect-square">
              <img
                src={clothing}
              
                
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
        
        
           </div>
          </div>

      </div>
     
  



    


     

      <h1 className='font-semibold text-4xl text-center mt-5'>Latest Collection</h1>


      <div 
     
      className="mb-16 grid gap-6 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 mt-20"
      >


  
 
  {productfilter.map((category, index) => (
  <div
  onClick={()=>hendlepage(category.id)}
    key={index}
    className='relative xl:w-80 w-48 overflow-hidden xl:h-96 h-80 bg-gray-100 hover:bg-gray-300 pb-10 cursor-pointer'
  >
    <div className="xl:h-72 line-clamp-2">
      <img
        src={png}
        alt={category.title || 'Product image'} 
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
    </div>
    
 
    <div className="p-4">
      <h3 className="text-lg font-semibold line-clamp-1">{category.title}</h3>
      <p className="mt-2">${category.price}</p>
    </div>


  </div>
))}
  
</div>
     
      <button onClick={()=>navigate('/new-arrivals')} className='border-2 border-black  mt-10 ml-36  xl:ml-[95vh] rounded-md font-semibold p-1 px-5 '>View More</button>
      
      <div className=' h-[500px]'>
        <video src={video}   loop muted autoPlay className='w-full h-[500px]  mt-10 object-cover '></video>
      </div>
      
      





      <h1 className='font-semibold text-4xl text-center mt-20'>Our Arrivals</h1>
  

      <div 
 
      className="mb-16 grid gap-6 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 mt-20"
      >


  
  {productfilter.map((category, index) => (
  <div
    key={index}
    onClick={()=>hendlepage(category.id)}
    className='relative xl:w-80 w-48 overflow-hidden xl:h-96 h-72 bg-gray-100 hover:bg-gray-300 cursor-pointer'
  >
    <div className="xl:h-72 ">
      <img
        src={png}
        alt={category.title || 'Product image'} // Added fallback alt text
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
    </div>
    
    {/* Display title below the image */}
    <div className="p-4">
      <h3 className="text-sm font-semibold line-clamp-2">{category.title}</h3>
      <p className="mt-2">${category.price}</p>
    </div>

    {/* Hover overlay */}
    <div className="absolute inset-0 bg-black/40 p-4 opacity-0 transition-opacity group-hover:opacity-100">
      <h3 className="text-xl font-bold text-white">{category.title}</h3>
    </div>
  </div>
))}

</div>



      <button onClick={()=>navigate('/new-arrivals')} className='border-2 border-black  mt-2 ml-32 xl:ml-[95vh] rounded-md font-semibold p-1 px-5 '>View More</button>
 
 



<div className='snap-x flex overflow-x-auto  xl:w-screen  w-96 ml-5  justify-start gap-28  p-5 scroll-auto mt-5 scrollbar-hide'>
  {
    productfilter.map((product, index) => (
      <div onClick={()=>hendlepage(product.id)} key={index} className='cursor-pointer flex-shrink-0 snap-center w-72 rounded-md overflow-hidden h-96 bg-white max-h-fit pb-10 '> 
        <img src="https://media.istockphoto.com/id/991893524/photo/stylish-young-male-and-female-models-in-colorful-hoodies-sitting-on-chairs-on-white.webp?a=1&b=1&s=612x612&w=0&k=20&c=HlsYbtPQRka-6b0XlZYDpmFPZPtDGuFi-uNzTmL4bbA=" alt="" className='w-full h-52'/>
        <div className='flex justify-evenly align-middle mt-3'>
          <h2>{product.category}</h2>
          <h2 className='border-2 px-3 p-1 rounded-md border-black'>{product.price}</h2>
        </div>
        <p className='text-xs ml-3 mt-2 '>{product.title}</p>
        <button className='text-white ml-3 text-xs rounded-md p-2 mt-2 bg-black'>Order Now</button>
      </div>
    ))
  }
</div>
<Footer/>
    </div>
    
  );
}
















