
// import React, { useState } from 'react';
// import { Star, ShoppingCart } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// export default function Displaypage({ showcard }) {
//   const [selectedSize, setSelectedSize] = useState('');
//   const [quantity, setQuantity] = useState(1);
//   const [mainImage, setMainImage] = useState('');
//   const [zoomPosition, setZoomPosition] = useState({ x: '50%', y: '50%' });
//   const [isZoomed, setIsZoomed] = useState(false);

//   let navigate = useNavigate()
//   const handleMouseEnter = (imgSrc) => {
//     setMainImage(imgSrc);
//     setIsZoomed(true);
//   };

//   const handleMouseLeave = () => {
//     setIsZoomed(false);
//   };

//   const handleMouseMove = (e) => {
//     const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
//     const x = ((e.pageX - left) / width) * 100;
//     const y = ((e.pageY - top) / height) * 100;
//     setZoomPosition({ x: `${x}%`, y: `${y}%` });
//   };

//   return (
//     <div className="w-full h-full mt-10 sm:mt-20 px-4 sm:px-8 lg:px-16 xl:px-32">
//       {showcard.map((item) => (
//         <div key={item.id} className="flex flex-col lg:flex-row justify-center mx-auto pb-10 lg:gap-8">
//           <div className="flex justify-center gap-5 mb-6 lg:mb-0">
//             {/* Smaller images for zoom selection */}
//             <div className="h-12  w-20 sm:h-28 sm:w-32 lg:h-28 lg:w-28">
//               {[item.image, item.image, item.image, item.image].map((imgSrc, index) => (
//                 <img
//                   key={index}
//                   className="w-full h-full mt-3 cursor-pointer"
//                   src={imgSrc}
//                   alt={`${item.name} ${index}`}
//                   onMouseEnter={() => handleMouseEnter(imgSrc)}
//                   onMouseLeave={handleMouseLeave}
//                   onMouseMove={handleMouseMove}
//                 />
//               ))}
//             </div>

//             {/* Main Image with Zoom Effect */}
//             <div
//               className="w-3/4 sm:w-1/2 lg:w-[300px] xl:w-[400px] relative overflow-hidden bg-cover"
//               style={{
//                 backgroundImage: `url(${mainImage || item.image})`,
//                 backgroundSize: isZoomed ? '200%' : '100%',
//                 backgroundPosition: `${zoomPosition.x} ${zoomPosition.y}`,
//               }}
//             >
//               <img
//                 src={mainImage || item.image}
//                 alt={item.name}
//                 className="w-full h-full opacity-0" // Hide original image but keep for structure
//               />
//             </div>
//           </div>

//           {/* Product Information */}
//           <div className="w-full lg:w-1/2 px-4 sm:px-8 lg:px-0 xl:mt-0 mt-10">
//             <h1 className="text-2xl sm:text-3xl font-bold mb-4">Comfortable Product</h1>
//             <div className="flex items-center mb-4">
//               <div className="flex text-yellow-400">
//                 {[...Array(5)].map((_, i) => (
//                   <Star key={i} className="w-5 h-5 fill-current" />
//                 ))}
//               </div>
//               <span className="ml-2 text-gray-600">(42 reviews)</span>
//             </div>
//             <p className="text-xl sm:text-2xl font-semibold mb-4">{item.price}</p>
//             <p className="text-gray-600 mb-6">{item.description}</p>

//             <div className="mb-6">
//               <label htmlFor="size-select" className="block text-sm font-medium text-gray-700 mb-2">
//                 Size
//               </label>
//               <select
//                 id="size-select"
//                 value={selectedSize}
//                 onChange={(e) => setSelectedSize(e.target.value)}
//                 className="w-full p-2 border border-gray-300 rounded-md"
//               >
//                 <option value="">Select a size</option>
//                 <option value="s">Small</option>
//                 <option value="m">Medium</option>
//                 <option value="l">Large</option>
//                 <option value="xl">X-Large</option>
//               </select>
//             </div>

//             <div className="mb-6">
//               <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
//                 Quantity
//               </label>
//               <input
//                 type="number"
//                 id="quantity"
//                 min="1"
//                 value={quantity}
//                 onChange={(e) => setQuantity(parseInt(e.target.value))}
//                 className="w-20 p-2 border border-gray-300 rounded-md"
//               />
//             </div>

//             <button
//               className="w-full flex items-center justify-center bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
//             >
//               <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
//             </button>
//             <button
//                onClick={()=>navigate("/paymnetpage")}
//               className="mt-10 w-full flex items-center justify-center bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
//             >
//              Buy Now
//              </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }







import React, { useState } from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Displaypage({ showcard }) {
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState('');
  const [isZoomed, setIsZoomed] = useState(false);
  const [isImageClicked, setIsImageClicked] = useState(false); 

  let navigate = useNavigate();

  const handleImageClick = (imgSrc) => {
    alert("hii")
    setMainImage(imgSrc);
    setIsZoomed(true);
    setIsImageClicked(true); 
  };

  return (
    <div className="w-full h-full mt-10 sm:mt-20 px-4 sm:px-8 lg:px-16 xl:px-32">
      {showcard.map((item) => (
        <div key={item.id} className="flex flex-col lg:flex-row justify-center mx-auto pb-10 lg:gap-8">
          <div className="flex justify-center gap-5 mb-6 lg:mb-0">
            {/* Smaller images for zoom selection */}
            <div className="h-12 w-20 sm:h-28 sm:w-32 lg:h-28 lg:w-28">
              {[item.image, item.image, item.image, item.image].map((imgSrc, index) => (
                <img
                  key={index}
                  className="w-full h-full mt-3 cursor-pointer"
                  src={imgSrc}
                  alt={`${item.name} ${index}`}
                  onClick={() => handleImageClick(imgSrc)} 
                  
                />
              ))}
            </div>

            {/* Main Image with Zoom Effect */}
            <div
              className="w-3/4 sm:w-1/2 lg:w-[300px] xl:w-[400px] relative overflow-hidden bg-cover"
              style={{
                backgroundImage: `url(${mainImage || item.image})`,
                backgroundSize: isZoomed ? '200%' : '100%',
                backgroundPosition: 'center', // Center the image
              }}
            >
              <img
                src={mainImage || item.image}
                alt={item.name}
                className="w-full h-full opacity-0" // Hide original image but keep for structure
              />
            </div>
          </div>

          {/* Product Information */}
          <div className="w-full lg:w-1/2 px-4 sm:px-8 lg:px-0 xl:mt-0 mt-10">
            <h1 className="text-2xl sm:text-3xl font-bold mb-4">Comfortable Product</h1>
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="ml-2 text-gray-600">(42 reviews)</span>
            </div>
            <p className="text-xl sm:text-2xl font-semibold mb-4">{item.price}</p>
            <p className="text-gray-600 mb-6">{item.description}</p>

            <div className="mb-6">
              <label htmlFor="size-select" className="block text-sm font-medium text-gray-700 mb-2">
                Size
              </label>
              <select
                id="size-select"
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="">Select a size</option>
                <option value="s">Small</option>
                <option value="m">Medium</option>
                <option value="l">Large</option>
                <option value="xl">X-Large</option>
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
                Quantity
              </label>
              <input
                type="number"
                id="quantity"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                className="w-20 p-2 border border-gray-300 rounded-md"
              />
            </div>

            <button
              className="w-full flex items-center justify-center bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
            >
              <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
            </button>
            <button
              onClick={() => navigate("/paymnetpage")}
              className="mt-10 w-full flex items-center justify-center bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Buy Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
