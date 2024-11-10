import React, { useState } from 'react';
import { Sun, Cloud, Leaf, Snowflake } from 'lucide-react';

const seasonalData = {
  seasons: [
    // { id: 'summer', name: 'Summer', image:"https://dynamic.brandcrowd.com/template/preview/design/01fb960e-0e7b-4371-993d-204e44e7961b/920b26e1-cff9-4447-b49c-970272b1da40?v=4&designTemplateVersion=1&logoTemplateVersion=4&size=design-preview-standalone-1x" },
    // { id: 'spring', name: 'Spring', image:"https://img.freepik.com/premium-vector/inscription-is-spring-eggshell-spring-banner-with-flowers-blue-background_638579-175.jpg" },
    // { id: 'fall', name: 'Fall', image:"" },
    // { id: 'winter', name: 'Winter', icon: Snowflake },
    
    { id:'summer', image:"https://dynamic.brandcrowd.com/template/preview/design/01fb960e-0e7b-4371-993d-204e44e7961b/920b26e1-cff9-4447-b49c-970272b1da40?v=4&designTemplateVersion=1&logoTemplateVersion=4&size=design-preview-standalone-1x" },
    { id:'spring',  image:"https://img.freepik.com/premium-vector/inscription-is-spring-eggshell-spring-banner-with-flowers-blue-background_638579-175.jpg" },
    { id:'fall',  image:"https://img.myloview.com/posters/fall-season-sale-vector-banner-background-fall-seasonal-sale-text-with-colorful-maple-and-oak-leaves-border-in-white-textured-background-for-autumn-marketing-promotion-vector-illustration-700-170435106.jpg" },
    { id:'winter', image:"https://img.freepik.com/free-vector/twitter-header-template-winter-season-celebration_23-2150982185.jpg" },
  ],
  
  products: {
    summer: [
      { id: 1, name: 'Bright Graphic Tee', price: 24.99, image: 'https://3000:localhost/api/placeholder/800/600' },
      { id: 2, name: 'Light Wash Denim Shorts', price: 39.99, image: 'https://3000:localhost/api/placeholder/800/600' },
      { id: 3, name: 'Sleeveless Cotton Shirt', price: 19.99, image: 'https://3000:localhost/api/placeholder/800/600' },
      { id: 4, name: 'Ripped Jean Shorts', price: 44.99, image: 'https://3000:localhost/api/placeholder/800/600' },
    ],
    spring: [
      { id: 5, name: 'Pastel Color Tee', price: 22.99, image: 'https://e7.pngegg.com/pngimages/955/88/png-clipart-jacket-coat-winter-clothing-zipper-jacket-zipper-fashion-thumbnail.png' },
      { id: 6, name: 'Light Denim Jacket', price: 59.99, image: 'https://e7.pngegg.com/pngimages/955/88/png-clipart-jacket-coat-winter-clothing-zipper-jacket-zipper-fashion-thumbnail.png' },
      { id: 7, name: 'Floral Print Shirt', price: 29.99, image: 'https://e7.pngegg.com/pngimages/955/88/png-clipart-jacket-coat-winter-clothing-zipper-jacket-zipper-fashion-thumbnail.png' },
      { id: 8, name: 'Slim Fit Colored Jeans', price: 49.99, image: 'https://e7.pngegg.com/pngimages/955/88/png-clipart-jacket-coat-winter-clothing-zipper-jacket-zipper-fashion-thumbnail.png' },
    ],
    fall: [
      { id: 9, name: 'Long Sleeve Henley', price: 34.99,
         image: 'https://media.istockphoto.com/id/618979846/photo/autumn-or-winter-childrens-outfit-clothes.jpg?s=612x612&w=0&k=20&c=ZneMidxoqgy0Mpc4wSntFprNDISUGRcGv8ntZl5E8kE=' },
      { id: 10, name: 'Dark Wash Jeans', price: 54.99,
         image: 'https://media.istockphoto.com/id/618979846/photo/autumn-or-winter-childrens-outfit-clothes.jpg?s=612x612&w=0&k=20&c=ZneMidxoqgy0Mpc4wSntFprNDISUGRcGv8ntZl5E8kE=' },
      { id: 11, name: 'Plaid Flannel Shirt', price: 39.99,
         image: 'https://media.istockphoto.com/id/618979846/photo/autumn-or-winter-childrens-outfit-clothes.jpg?s=612x612&w=0&k=20&c=ZneMidxoqgy0Mpc4wSntFprNDISUGRcGv8ntZl5E8kE=' },
      { id: 12, name: 'Distressed Denim Jacket', price: 69.99,
         image: 'https://media.istockphoto.com/id/618979846/photo/autumn-or-winter-childrens-outfit-clothes.jpg?s=612x612&w=0&k=20&c=ZneMidxoqgy0Mpc4wSntFprNDISUGRcGv8ntZl5E8kE=' },
    ],
    winter: [
      { id: 13, name: 'Thermal Long Sleeve Tee', price: 29.99, image: 'https://e7.pngegg.com/pngimages/955/88/png-clipart-jacket-coat-winter-clothing-zipper-jacket-zipper-fashion-thumbnail.png' },
      { id: 14, name: 'Fleece-Lined Jeans', price: 64.99, image: 'https://e7.pngegg.com/pngimages/955/88/png-clipart-jacket-coat-winter-clothing-zipper-jacket-zipper-fashion-thumbnail.png' },
      { id: 15, name: 'Wool Blend Sweater', price: 49.99, image: 'https://e7.pngegg.com/pngimages/955/88/png-clipart-jacket-coat-winter-clothing-zipper-jacket-zipper-fashion-thumbnail.png' },
      { id: 16, name: 'Insulated Denim Jacket', price: 79.99, image: 'https://e7.pngegg.com/pngimages/955/88/png-clipart-jacket-coat-winter-clothing-zipper-jacket-zipper-fashion-thumbnail.png' },
    ],
  },
};

export default function Seasonals() {
  const [selectedSeason, setSelectedSeason] = useState('summer');

  return (
    <div className='w-full  mt-10 xl:ml-0'>
      <h1 className="text-3xl font-bold mb-8 text-center">Seasonal Collections</h1>


      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {seasonalData.seasons.map((season) => (
          <button
            key={season.id}
            onClick={() => setSelectedSeason(season.id)}
            className={`flex flex-col items-center mx-4 rounded-lg overflow-hidden transition-colors ${
              selectedSeason === season.id
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
          <img src={season.image} className='w-full h-full'/>
          </button>
        ))}
      </div>

    
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {seasonalData.products[selectedSeason].map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
           <div  className="h-32 sm:h-40 md:h-48 lg:h-52 xl:h-60 2xl:h-64">
           <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div className="p-2">
              <h3 className="text-lg font-semibold mb-1 line-clamp-1  ">{product.name}</h3>
              <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-4 rounded transition duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}