
import React, { useState } from 'react';
import { Star, ChevronDown } from 'lucide-react';
import Footer from '../components/Footer';

const newArrivalsData = {
  featuredArrival: {
    id: 1,
    name: "Limited Edition Graphic Tee",
    price: 34.99,
    image: "/api/placeholder/800/600",
    description: "Be the first to get our exclusive new design. Made from 100% organic cotton for ultimate comfort and style."
  },
  products: [
    { id: 2, name: "Vintage Wash Slim Jeans", price: 59.99, image: "https://png.pngtree.com/png-vector/20190322/ourmid/pngtree-new-arrival-label-vector-template-design-illustration-png-image_859575.jpg", category: "jeans", rating: 4.5 },
    { id: 3, name: "Eco-Friendly V-Neck Tee", price: 24.99, image: "https://png.pngtree.com/png-vector/20190322/ourmid/pngtree-new-arrival-label-vector-template-design-illustration-png-image_859575.jpg", category: "tshirt", rating: 4.7 },
    { id: 4, name: "Distressed Denim Jacket", price: 79.99, image: "https://png.pngtree.com/png-vector/20190322/ourmid/pngtree-new-arrival-label-vector-template-design-illustration-png-image_859575.jpg", category: "jeans", rating: 4.3 },
    { id: 5, name: "Striped Long Sleeve Tee", price: 29.99, image: "https://png.pngtree.com/png-vector/20190322/ourmid/pngtree-new-arrival-label-vector-template-design-illustration-png-image_859575.jpg", category: "tshirt", rating: 4.6 },
    { id: 6, name: "High-Waisted Skinny Jeans", price: 64.99, image: "https://png.pngtree.com/png-vector/20190322/ourmid/pngtree-new-arrival-label-vector-template-design-illustration-png-image_859575.jpg", category: "jeans", rating: 4.8 },
    { id: 7, name: "Retro Logo Crop Top", price: 22.99, image: "https://png.pngtree.com/png-vector/20190322/ourmid/pngtree-new-arrival-label-vector-template-design-illustration-png-image_859575.jpg", category: "tshirt", rating: 4.4 },
    { id: 8, name: "Relaxed Fit Carpenter Jeans", price: 69.99, image: "https://png.pngtree.com/png-vector/20190322/ourmid/pngtree-new-arrival-label-vector-template-design-illustration-png-image_859575.jpg", category: "jeans", rating: 4.2 },
    { id: 9, name: "Organic Cotton Henley", price: 32.99, image: "https://png.pngtree.com/png-vector/20190322/ourmid/pngtree-new-arrival-label-vector-template-design-illustration-png-image_859575.jpg", category: "tshirt", rating: 4.5 },
  ]
};

export default function NewArrivals({addToCart}) {
  const [sortBy, setSortBy] = useState('newest');
  const [filter, setFilter] = useState('all');
 

  const sortedAndFilteredProducts = [...newArrivalsData.products]
    .filter(product => filter === 'all' || product.category === filter)
    .sort((a, b) => {
      if (sortBy === 'price-low-high') return a.price - b.price;
      if (sortBy === 'price-high-low') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });

    
 

  return (
    <div className='xl:ml-0 ml-[-32px] p-10'>
    <div className="py-8 ">
      <h1 className="text-3xl font-bold mb-8 text-center">New Arrivals</h1>


    
    
           <div className="flex flex-col md:flex-row justify-between mb-6">

        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 ml-3">
          <div className="flex items-center">
            <ChevronDown className="mr-2" />
            <span className="mr-2">Sort by:</span>
            <select
              className="p-2 border rounded"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="newest">Newest</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
          <div className="flex items-center">
            <span className="mr-2">Filter:</span>
            <select
              className="p-2 border rounded"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="all">All Products</option>
              <option value="jeans">Jeans</option>
              <option value="tshirt">T-Shirts</option>
            </select>
          </div>
        </div>
      </div>

  
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
       
        {sortedAndFilteredProducts.map((product) => (
  <div 
    key={product.id} 
    className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col sm:flex-row md:flex-col lg:flex-row xl:flex-col"
  >
    <img 
      src={product.image} 
      alt={product.name} 
      className="w-full sm:w-1/2 md:w-full lg:w-1/2 xl:w-full h-32 sm:h-40 md:h-48 lg:h-40 xl:h-64 object-cover"
    />
    
    <div className="p-4 flex-1 flex flex-col">
      <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-2 line-clamp-1">
        {product.name}
      </h3>
      
      <p className="text-gray-600 mb-2 text-xs sm:text-sm md:text-base">
        ${product.price.toFixed(2)}
      </p>
      
      <div className="flex items-center mb-4 text-xs sm:text-sm md:text-base">
        <Star className="text-yellow-400 mr-1" size={16}/>
        <span>{product.rating.toFixed(1)}</span>
      </div>
      
      <button 
        className="mt-auto w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 sm:py-2 px-2 sm:px-4 rounded transition duration-300"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  </div>
))}
      </div>
    </div>
<Footer />
    </div>
  );
}










