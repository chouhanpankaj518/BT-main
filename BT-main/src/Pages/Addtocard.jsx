

import React, { useState } from 'react';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
export default function AddToCart({ cart }) {
  const [carts , setcart]=useState(cart)
  let navigate = useNavigate()
  
  function deleteitem(id){
    alert(id)
    let data = cart.filter(item=>item.id != id)
    setcart(data)
  }
  
  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!cart.length) {
    return (
      <div className="min-h-[300px] sm:min-h-[400px] flex flex-col items-center justify-center p-4 sm:p-8 bg-white rounded-lg shadow-lg mx-4 sm:mx-auto max-w-lg ">
        <div className="w-16 h-16 sm:w-24 sm:h-24 mb-4 bg-gray-100 rounded-full flex items-center justify-center">
          <ShoppingBag className="w-8 h-8 sm:w-12 sm:h-12 text-gray-400" />
        </div>
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 text-center">Your cart is empty</h2>
        <p className="mt-2 text-gray-500 text-center text-sm sm:text-base">Add some items to get started!</p>
        <button className="mt-6 px-6 py-2 sm:py-3 bg-blue-600 text-white text-sm sm:text-base rounded-full hover:bg-blue-700 transition-colors " onClick={()=>navigate("/BT")}>
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 mx-4 sm:mx-auto max-w-3xl mt-20">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Shopping Cart</h2>
        <span className="text-xs sm:text-sm text-gray-500">{cart.length} items</span>
      </div>

      {/* Cart Items */}
      <div className="space-y-4">
        {carts.map((item) => (
          <div 
            key={item.id} 
            className="group relative flex flex-col sm:flex-row items-start sm:items-center bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors"
          >
            {/* Product Image */}
            <div className="relative w-full sm:w-24 h-48 sm:h-24 mb-4 sm:mb-0 flex-shrink-0">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-full object-cover rounded-lg"
              />
              <span className="absolute top-2 right-2 sm:-top-2 sm:-right-2 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm">
                {item.quantity}
              </span>
            </div>

            {/* Product Details */}
            <div className="sm:ml-6 flex-grow w-full">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.color} - Size {item.size}</p>
                </div>
                <button className="sm:hidden">
                  <Trash2 className="w-5 h-5 text-red-500 hover:text-red-600"  />
                </button>
              </div>
              
              <div className="mt-4 sm:mt-2 flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
                {/* Quantity Controls */}
                <div className="flex items-center space-x-2">
                  <button className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-gray-100 transition-colors">
                    <Minus className="w-4 h-4 text-gray-600" />
                  </button>
                  <span className="text-gray-800 font-medium">{item.quantity}</span>
                  <button className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-gray-100 transition-colors">
                    <Plus className="w-4 h-4 text-gray-600" />
                  </button>
                </div>

                {/* Price */}
                <span className="text-lg font-semibold text-gray-800">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            </div>

            {/* Remove Button - Desktop */}
            <button className="w-5 h-5 text-red-500 hover:text-red-600" onClick={()=>deleteitem(item.id)}>delete</button>
            <button className="block sm:block absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <Trash2 className="w-5 h-5 text-red-500 hover:text-red-600" />
            </button>
          </div>
        ))}
      </div>

      {/* Cart Summary */}
      <div className="mt-6 sm:mt-8 border-t pt-4 sm:pt-6">
       
       
          
          
        
        
          <div className="flex justify-between text-lg sm:text-xl font-semibold text-gray-800 pt-2 border-t">
            <span>Total</span>
            <span>${totalAmount.toFixed(2)}</span>
          </div>
    
    

       
       
        <div className="mt-6 space-y-4">
          <button className="w-full bg-blue-600 text-white py-3 sm:py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm sm:text-base">
           Buy Now
          </button>
          <button 
          onClick={()=>navigate("/BT")}
          className="w-full bg-gray-100 text-gray-700 py-3 sm:py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors text-sm sm:text-base" >
            Continue Shopping
          </button>
        </div>
      </div>

      {/* Estimated Delivery */}
     
     
    </div>
  );
}