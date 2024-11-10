import React, { useState } from 'react';
import { Heart, Minus, Plus, Star } from 'lucide-react';
// import Upperwear from './Upperwear';
const Sweatshirt = () => {
  const [selectedColor, setSelectedColor] = useState('black');
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  const colors = [
    { name: 'Black', value: 'black', class: 'bg-gray-900' },
    { name: 'Navy', value: 'navy', class: 'bg-blue-700' },
    { name: 'Red', value: 'red', class: 'bg-red-600' }
  ];

  const sizes = ['S', 'M', 'L', 'XL'];

  const handleQuantityChange = (action) => {
    if (action === 'increase') {
      setQuantity(prev => prev + 1);
    } else if (action === 'decrease' && quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <div>
    <div className="container mx-auto px-4 mt-5">
 {/* <Upperwear/> */}
 
    <div className=" mx-auto sm:px-6  py-8 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
     
     
        <div className="space-y-4">
          <img
            src="https://i0.wp.com/tikhi.in/wp-content/uploads/2023/10/CKHD12-03-3.jpg"
            alt="Main product"
            className="w-full rounded-lg shadow-lg"
          />
      
      
        </div>

       
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Classic Comfort Sweatshirt</h1>
            <p className="text-2xl text-gray-900">$59.99</p>
            
             {/* Rating */}
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${i < 4 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                />
              ))}
              <span className="ml-2 text-gray-600">(127 reviews)</span>
            </div>
          </div>

          {/* Color Selector */}
          <div>
            <h3 className="text-sm font-medium text-gray-900">Color</h3>
            <div className="flex space-x-2 mt-2">
              {colors.map((color) => (
                <button
                  key={color.value}
                  className={`w-8 h-8 rounded-full ${color.class} ${
                    selectedColor === color.value
                      ? 'ring-2 ring-offset-2 ring-gray-800'
                      : 'hover:ring-2 hover:ring-offset-2 hover:ring-gray-400'
                  }`}
                  onClick={() => setSelectedColor(color.value)}
                  aria-label={`Select ${color.name}`}
                />
              ))}
            </div>
          </div>

          {/* Size Selector */}
          <div>
            <h3 className="text-sm font-medium text-gray-900">Size</h3>
            <div className="grid grid-cols-4 gap-2 mt-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  className={`border rounded py-2 ${
                    selectedSize === size
                      ? 'border-black bg-gray-900 text-white'
                      : 'hover:border-black'
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center border rounded">
                <button
                  className="p-2 hover:bg-gray-100"
                  onClick={() => handleQuantityChange('decrease')}
                  disabled={quantity <= 1}
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-16 text-center">{quantity}</span>
                <button
                  className="p-2 hover:bg-gray-100"
                  onClick={() => handleQuantityChange('increase')}
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <button className="flex-1 bg-blue-600 text-white px-8 py-2 rounded hover:bg-blue-700">
                Add to Cart
              </button>
            </div>
            <button className="w-full flex items-center justify-center space-x-2 border border-gray-300 px-8 py-2 rounded hover:bg-gray-50">
              <Heart className="w-4 h-4" />
              <span>Add to Wishlist</span>
            </button>
          </div>

          {/* Product Description */}
          <div className="prose">
            <h3 className="text-lg font-medium">Description</h3>
            <p className="text-gray-700">
              Stay cozy and stylish with our Classic Comfort Sweatshirt. Made from premium cotton blend material, featuring ribbed cuffs and hem, kangaroo pocket, and a modern fit. Perfect for casual wear or light workouts.
            </p>
            
            <h3 className="text-lg font-medium mt-4">Features</h3>
            <ul className="list-disc pl-5 text-gray-700">
              <li>80% cotton, 20% polyester</li>
              <li>Machine washable</li>
              <li>Ribbed cuffs and hem</li>
              <li>Kangaroo pocket</li>
              <li>Available in multiple colors</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Sweatshirt;