import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
export default function upperwear({setshowcard}) {
   let navigate = useNavigate()
  const upperwearItems = [
    {id:1, image: 'path/to/tshirt-image.jpg' },
    {id:2, image: 'path/to/shirt-image.jpg' },
    {id:3, image: 'path/to/hoodie-image.jpg' },
    {id:4, image: 'path/to/jacket-image.jpg' },
  ];
  
  function handlepage(id){
      let data = upperwearItems.filter(item=>item.id == id)
      setshowcard(data)
      console.log("data",data)
      navigate("/displaypage")
  }
  
  
  return (
    <div className='xl:ml-0 ml-[-32px] p-10 xl:p-0'>
    <div data-aos="zoom-in" className='flex justify-center align-middle gap-14 w-full bg-transparent font-semibold  xl:p-5'>
     <Link to={"/Tshirt"} >TShirt</Link>
     <Link to={"/Shirt"}>Shirt</Link>
     <Link to={"/Hoodie"}>Hoodie</Link>
     <Link to={"/Sweatshirt"}>Sweatshirt</Link>
      </div>
      
      <div className="px-3 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-20 mb-20">
        {upperwearItems.map((item,index) => (
            <div  key={index}
           onClick={()=>handlepage(item.id)}
            className="cursor-pointer bg-white rounded-lg shadow-lg overflow-hidden transition transform hover:scale-105">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              /> 
            </div>
        ))}
      </div>
      <Footer/>
    </div>
  )
}