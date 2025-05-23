import React, { useState, useMemo, useEffect } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

export default function ProductList({ category }) {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSubcategory, setSelectedSubcategory] = useState('all');
  const [products, setProducts] = useState({
    sweets: [],
    dairy: [],
    milk: []
  });
  
  useEffect(() => {
    // Load products from localStorage
    const storedProducts = JSON.parse(localStorage.getItem('products') || '[]');
    
    // Organize products by category
    const organizedProducts = {
      sweets: storedProducts.filter(p => p.category && p.subcategory) || [],
      dairy: storedProducts.filter(p => !p.category && p.weight) || [],
      milk: storedProducts.filter(p => !p.category && p.volume) || []
    };
    
    setProducts(organizedProducts);
  }, []);

  const categories = useMemo(() => {
    if (category === 'sweets') {
      return [...new Set(products.sweets.map(product => product.category))];
    }
    return [];
  }, [category, products.sweets]);

  const subcategories = useMemo(() => {
    if (category === 'sweets' && selectedCategory !== 'all') {
      return [...new Set(products.sweets
        .filter(product => product.category === selectedCategory)
        .map(product => product.subcategory))];
    }
    return [];
  }, [category, selectedCategory, products.sweets]);

  const filteredProducts = useMemo(() => {
    let filtered = products[category] || [];
    
    if (category === 'sweets') {
      if (selectedCategory !== 'all') {
        filtered = filtered.filter(product => product.category === selectedCategory);
      }
      if (selectedSubcategory !== 'all') {
        filtered = filtered.filter(product => product.subcategory === selectedSubcategory);
      }
    }
    
    return filtered;
  }, [category, selectedCategory, selectedSubcategory, products]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4 capitalize">{category}</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our selection of high-quality {category.toLowerCase()} made with the finest ingredients
          </p>
        </div>

        {category === 'sweets' && categories.length > 0 && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <select
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                setSelectedSubcategory('all');
              }}
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="all">All Categories</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>

            {selectedCategory !== 'all' && subcategories.length > 0 && (
              <select
                value={selectedSubcategory}
                onChange={(e) => setSelectedSubcategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="all">All {selectedCategory}</option>
                {subcategories.map(subcat => (
                  <option key={subcat} value={subcat}>{subcat}</option>
                ))}
              </select>
            )}
          </div>
        )}

        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">No products available in this category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    ₹{product.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{product.weight || product.volume}</span>
                    <button 
                      onClick={() => addToCart(product)}
                      className="flex items-center space-x-2 bg-primary text-white px-4 py-2 rounded-full hover:bg-red-600 transition duration-300"
                    >
                      <FaShoppingCart className="h-4 w-4" />
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}