import React, { useState } from 'react';
import Footer from '../components/Footer';

const Customized = () => {
  const [customText, setCustomText] = useState('');
  const [textColor, setTextColor] = useState('#000000');
  const [fontSize, setFontSize] = useState('24');
  const [textPosition, setTextPosition] = useState('center');
  const [productColor, setProductColor] = useState('white');
  const [quantity, setQuantity] = useState(1);

  const productColors = ['white', 'black', 'navy', 'gray', 'red'];
  const positions = ['top', 'center', 'bottom'];
  const fontSizes = ['18', '24', '32', '40', '48'];

  const price = 29.99;

  return (
    <div className='xl:ml-0 ml-[-32px] p-10 xl:p-0'>
    <div className="max-w-6xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
     
        <div className="p-6 border border-gray-300 rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Preview</h2>
          <div
            className="relative flex items-center justify-center bg-gray-100 rounded-lg h-96"
            style={{ backgroundColor: productColor }}
          >
            <div
              className={`absolute w-full px-4 text-center ${textPosition === 'top' ? 'top-12' : textPosition === 'bottom' ? 'bottom-12' : 'inset-y-0 flex items-center justify-center'}`}
              style={{ color: textColor, fontSize: `${fontSize}px`, wordWrap: 'break-word' }}
            >
              {customText || 'Your Text Here'}
            </div>
          </div>
        </div>

        <div className="p-6 border border-gray-300 rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Customize Your Product</h2>

        
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Enter Your Text</label>
            <input
              type="text"
              value={customText}
              onChange={(e) => setCustomText(e.target.value)}
              placeholder="Type your text here"
              // maxLength={50}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
        
          </div>

  
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Text Color</label>
            <input
              type="color"
              value={textColor}
              onChange={(e) => setTextColor(e.target.value)}
              className="w-full h-10 border border-gray-300 rounded-md"
            />
          </div>

       
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Font Size</label>
            <div className="flex gap-2">
              {fontSizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setFontSize(size)}
                  className={`flex-1 py-2 rounded-md ${fontSize === size ? 'bg-indigo-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                >
                  {size}px
                </button>
              ))}
            </div>
          </div>

    
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Text Position</label>
            <div className="flex gap-2">
              {positions.map((position) => (
                <button
                  key={position}
                  onClick={() => setTextPosition(position)}
                  className={`flex-1 py-2 rounded-md capitalize ${textPosition === position ? 'bg-indigo-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                >
                  {position}
                </button>
              ))}
            </div>
          </div>

       
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Product Color</label>
            <div className="flex gap-2 flex-wrap">
              {productColors.map((color) => (
                <button
                  key={color}
                  onClick={() => setProductColor(color)}
                  className={`flex-1 py-2 rounded-md capitalize ${productColor === color ? 'bg-indigo-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

        
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Quantity</label>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-2 bg-gray-200 rounded-md"
              >
                -
              </button>
              <span className="w-12 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-2 bg-gray-200 rounded-md"
              >
                +
              </button>
            </div>
          </div>

    
          <div className="mt-6">
        
            <button className="w-full h-12 flex items-center justify-center bg-indigo-500 text-white rounded-md hover:bg-indigo-600">
       
               Submit
            </button>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Customized;
