// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
// import { useCart } from '../context/CartContext';

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const { getCartCount } = useCart();

//   return (
//     <nav className="bg-white shadow-lg sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-20">
//           <div className="flex items-center">
//             <Link to="/" className="flex-shrink-0 flex items-center group">
//               <img
//                 src="/logo.png"
//                 alt="Shreeji Sweets"
//                 className="h-16 w-16 transition-transform duration-300 group-hover:scale-105"
//               />
//               <span className="ml-3 text-xl font-semibold text-primary hidden sm:block px-3 py-1 rounded-md transition-all duration-300 border-2 border-transparent group-hover:border-primary group-hover:text-accent">
//                 𝗦𝗵𝗿𝗲𝗲𝗷𝗶 𝗚𝗼𝗿𝗮𝘀
//               </span>
//             </Link>

//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex md:items-center md:space-x-8">
//             <Link to="/" className="text-gray-900 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition duration-300">
//               Home
//             </Link>
//             <Link to="/sweets" className="text-gray-900 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition duration-300">
//               Sweets
//             </Link>
//             <Link to="/dairy" className="text-gray-900 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition duration-300">
//               Dairy Products
//             </Link>
//             <Link to="/milk" className="text-gray-900 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition duration-300">
//               Fresh Milk
//             </Link>
//             <Link to="/contact" className="text-gray-900 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition duration-300">
//               Contact
//             </Link>
//             <Link to="/cart" className="flex items-center space-x-1 bg-primary text-white px-4 py-2 rounded-full hover:bg-red-600 transition duration-300">
//               <FaShoppingCart className="h-5 w-5" />
//               <span>Cart ({getCartCount()})</span>
//             </Link>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden flex items-center">
//             <Link to="/cart" className="mr-4 p-2 text-primary hover:text-red-600">
//               <div className="relative">
//                 <FaShoppingCart className="h-6 w-6" />
//                 {getCartCount() > 0 && (
//                   <span className="absolute -top-2 -right-2 bg-primary text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
//                     {getCartCount()}
//                   </span>
//                 )}
//               </div>
//             </Link>
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="p-2 rounded-md text-gray-900 hover:text-primary focus:outline-none"
//             >
//               {isMenuOpen ? (
//                 <FaTimes className="h-6 w-6" />
//               ) : (
//                 <FaBars className="h-6 w-6" />
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Mobile menu */}
//         <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
//           <div className="px-2 pt-2 pb-3 space-y-1">
//             <Link
//               to="/"
//               className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-primary hover:bg-gray-50"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Home
//             </Link>
//             <Link
//               to="/sweets"
//               className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-primary hover:bg-gray-50"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Sweets
//             </Link>
//             <Link
//               to="/dairy"
//               className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-primary hover:bg-gray-50"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Dairy Products
//             </Link>
//             <Link
//               to="/milk"
//               className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-primary hover:bg-gray-50"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Fresh Milk
//             </Link>
//             <Link
//               to="/contact"
//               className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-primary hover:bg-gray-50"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Contact
//             </Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getCartCount } = useCart();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-md shadow-md sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img
              src="/logo.png"
              alt="Shreeji Sweets"
              className="h-14 w-14 md:h-16 md:w-16 transition-transform duration-300 group-hover:scale-105"
            />
            <span className="ml-2 md:ml-3 text-lg md:text-xl font-semibold text-primary hidden sm:block px-2 py-1 rounded-md border-2 border-transparent group-hover:border-primary group-hover:text-accent transition-all duration-300">
              𝗦𝗵𝗿𝗲𝗲𝗷𝗶 𝗚𝗼𝗿𝗮𝘀
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {[
              { to: '/', label: 'Home' },
              { to: '/sweets', label: 'Sweets' },
              // { to: '/dairy', label: 'Dairy Products' },
              // { to: '/milk', label: 'Fresh Milk' },
              { to: '/contact', label: 'Contact' },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`text-sm lg:text-base font-medium px-2 py-1 rounded-md transition duration-300 ${
                  isActive(item.to)
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-gray-900 dark:text-white hover:text-primary'
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Cart Button */}
            <Link
              to="/cart"
              className="flex items-center space-x-2 bg-primary text-white px-4 py-1.5 rounded-full hover:bg-red-600 transition duration-300 text-sm"
            >
              <FaShoppingCart className="h-5 w-5" />
              <span>Cart ({getCartCount()})</span>
            </Link>
          </div>

          {/* Mobile Menu Button & Cart */}
          <div className="md:hidden flex items-center space-x-3">
            {/* Cart Icon */}
            <Link to="/cart" className="relative group">
              <FaShoppingCart className="h-6 w-6 text-primary transition-transform group-hover:scale-110" />
              {getCartCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-white rounded-full text-[10px] w-5 h-5 flex items-center justify-center animate-pulse">
                  {getCartCount()}
                </span>
              )}
            </Link>

            {/* Toggle Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-primary hover:text-accent focus:outline-none transition-transform hover:scale-110"
            >
              {isMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out transform overflow-hidden ${
            isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-2 pt-2 pb-4 space-y-1">
            {[
              { to: '/', label: 'Home' },
              { to: '/sweets', label: 'Sweets' },
              // { to: '/dairy', label: 'Dairy Products' },
              // { to: '/milk', label: 'Fresh Milk' },
              { to: '/contact', label: 'Contact' },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-sm font-medium transition duration-300 ${
                  isActive(item.to)
                    ? 'text-primary bg-gray-100 dark:bg-gray-700'
                    : 'text-gray-900 dark:text-white hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
