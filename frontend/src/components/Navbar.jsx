import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getCartCount } = useCart();

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img src="/logo.png" alt="Shreeji Sweets" className="h-16 w-16" />
              <span className="ml-3 text-xl font-bold text-primary hidden sm:block">શ્રીજી ગોરસ</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link to="/" className="text-gray-900 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition duration-300">
              Home
            </Link>
            <Link to="/sweets" className="text-gray-900 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition duration-300">
              Sweets
            </Link>
            <Link to="/dairy" className="text-gray-900 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition duration-300">
              Dairy Products
            </Link>
            <Link to="/milk" className="text-gray-900 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition duration-300">
              Fresh Milk
            </Link>
            <Link to="/contact" className="text-gray-900 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition duration-300">
              Contact
            </Link>
            <Link to="/cart" className="flex items-center space-x-1 bg-primary text-white px-4 py-2 rounded-full hover:bg-red-600 transition duration-300">
              <FaShoppingCart className="h-5 w-5" />
              <span>Cart ({getCartCount()})</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Link to="/cart" className="mr-4 p-2 text-primary hover:text-red-600">
              <div className="relative">
                <FaShoppingCart className="h-6 w-6" />
                {getCartCount() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-primary text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                    {getCartCount()}
                  </span>
                )}
              </div>
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-900 hover:text-primary focus:outline-none"
            >
              {isMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-primary hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/sweets"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-primary hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Sweets
            </Link>
            <Link
              to="/dairy"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-primary hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Dairy Products
            </Link>
            <Link
              to="/milk"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-primary hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Fresh Milk
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-primary hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}