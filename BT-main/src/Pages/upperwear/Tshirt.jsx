import React, { useState } from 'react';
import { StarIcon, ShoppingCartIcon } from 'lucide-react';
import first from "../../assets/Tshirt/first.webp";
import second from "../../assets/Tshirt/second.webp";
import third from "../../assets/Tshirt/third.jpg";
import five from "../../assets/Tshirt/five.jpg";

const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
const colors = ['White', 'Black', 'Gray', 'Blue', 'Red'];

const Tshirt = () => {
  const imagesdata = [
    {
      id:1,
      img: first,
      title: "Sunset over the ocean",
      price: 10
    },
    {
      id:2,
      img: second,
      title: "Blooming cherry blossoms",
      price: 12
    },
    {
      id:3,
      img: third,
      title: "Majestic mountain range",
      price: 15
    },
    {
      id:4,
      img: five,
      title: "Busy city skyline",
      price: 8
    },
    {
      id:5,
      img: first,
      title: "Sunset over the ocean",
      price: 10
    },
    {
      id:6,
      img: second,
      title: "Blooming cherry blossoms",
      price: 12
    },
    {
      id:7,
      img: third,
      title: "Majestic mountain range",
      price: 15
    },
    {
      id:8,
      img: five,
      title: "Busy city skyline",
      price: 8
    }
  ];

  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('White');
  const [selectedCard, setSelectedCard] = useState([]);
  const [open ,setopen]=useState(false)
  
  function selectcard(id){
    let data = imagesdata.filter(item=>item.id == id)
    console.log(data)
    setSelectedCard(data)
    setopen(true)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      
    {open ?(
      <>
      {selectedCard.map((selectdata , index)=>(
          <div key={index}>
        
      <div  className="flex flex-col md:flex-row">
       
        <div className="md:w-1/2 mb-8  md:mb-0 ">
          <img
            src={selectdata.img}
            alt="T-shirt"
            className="  object-cover rounded-lg shadow-lg p-20 hover:scale-105 transition-all duration-300"
          />
        </div>

        {/* Product Details */}
        <div className="md:w-1/2 md:pl-8">
          <h1 className="text-3xl font-bold mb-4">Classic Comfort T-Shirt</h1>
          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-current" />
            ))}
            <span className="ml-2 text-gray-600">(125 reviews)</span>
          </div>
          <p className="text-2xl font-semibold mb-4">$24.99</p>
          <p className="text-gray-600 mb-6">
            Our classic t-shirt never goes out of style. Made from 100% cotton for ultimate comfort and durability.
          </p>

          {/* Color Selection */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Color</h2>
            <div className="flex space-x-2">
              {colors.map(color => (
                <button
                  key={color}
                  className={`w-8 h-8 rounded-full border-2 ${
                    selectedColor === color ? 'border-blue-500' : 'border-gray-300'
                  }`}
                  style={{ backgroundColor: color.toLowerCase() }}
                  onClick={() => setSelectedColor(color)}
                />
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Size</h2>
            <div className="flex flex-wrap gap-2">
              {sizes.map(size => (
                <button
                  key={size}
                  className={`px-4 py-2 border rounded ${
                    selectedSize === size
                      ? 'bg-blue-500 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>

          </div>
          {/* Add to Cart Button */}
          <button className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-600 transition duration-300 flex items-center justify-center">
            <ShoppingCartIcon className="h-5 w-5 mr-2" />
            Add to Cart
          </button>
        </div>
      </div>
      
      </div>
        ))}
        </>
      ):(
      <div>
         <div  className="flex flex-col md:flex-row">
       
       <div className="md:w-1/2 mb-8  md:mb-0 ">
         <img
           src="https://i.etsystatic.com/44859972/r/il/2850fd/5697767327/il_340x270.5697767327_bmzj.jpg"
           alt="T-shirt"
           className="  object-cover rounded-lg shadow-lg p-20 hover:scale-105 transition-all duration-300"
         />
       </div>

       {/* Product Details */}
       <div className="md:w-1/2 md:pl-8">
         <h1 className="text-3xl font-bold mb-4">Classic Comfort T-Shirt</h1>
         <div className="flex items-center mb-4">
           {[...Array(5)].map((_, i) => (
             <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-current" />
           ))}
           <span className="ml-2 text-gray-600">(125 reviews)</span>
         </div>
         <p className="text-2xl font-semibold mb-4">$24.99</p>
         <p className="text-gray-600 mb-6">
           Our classic t-shirt never goes out of style. Made from 100% cotton for ultimate comfort and durability.
         </p>

         {/* Color Selection */}
         <div className="mb-6">
           <h2 className="text-lg font-semibold mb-2">Color</h2>
           <div className="flex space-x-2">
             {colors.map(color => (
               <button
                 key={color}
                 className={`w-8 h-8 rounded-full border-2 ${
                   selectedColor === color ? 'border-blue-500' : 'border-gray-300'
                 }`}
                 style={{ backgroundColor: color.toLowerCase() }}
                 onClick={() => setSelectedColor(color)}
               />
             ))}
           </div>
         </div>

         {/* Size Selection */}
         <div className="mb-6">
           <h2 className="text-lg font-semibold mb-2">Size</h2>
           <div className="flex flex-wrap gap-2">
             {sizes.map(size => (
               <button
                 key={size}
                 className={`px-4 py-2 border rounded ${
                   selectedSize === size
                     ? 'bg-blue-500 text-white'
                     : 'bg-white text-gray-700 hover:bg-gray-100'
                 }`}
                 onClick={() => setSelectedSize(size)}
               >
                 {size}
               </button>
             ))}
           </div>

         </div>
         {/* Add to Cart Button */}
         <button className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-600 transition duration-300 flex items-center justify-center">
           <ShoppingCartIcon className="h-5 w-5 mr-2" />
           Add to Cart
         </button>
       </div>
     </div>
     
     </div>
   
    )}
        
        
      {/* Images Section */}
      <div className="mt-20 w-full grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {imagesdata.map((item, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-lg xl:h-96 h-44 " onClick={()=>selectcard(item.id)}>
           <div className='p-34 xl:h-60 h-20'>
           <img src={item.img} alt={item.title} className='w-full h-full '/>
           </div>
            <div className="text-center">
              <p className="text-lg font-semibold line-clamp-1">{item.title}</p>
              <p className="text-gray-600">${item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tshirt;
