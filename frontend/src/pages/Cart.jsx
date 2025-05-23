import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaTrash, FaMinus, FaPlus } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import OrderProgress from '../components/OrderProgress';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import toast from 'react-hot-toast';

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleQuantityUpdate = async (productId, newQuantity) => {
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 500)); // Simulate API call
      updateQuantity(productId, newQuantity);
      toast.success('Cart updated successfully');
    } catch (error) {
      toast.error('Failed to update cart');
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveItem = async (productId) => {
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 500)); // Simulate API call
      removeFromCart(productId);
      toast.success('Item removed from cart');
    } catch (error) {
      toast.error('Failed to remove item');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <OrderProgress currentStep="cart" />
      
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
          <Link to="/" className="flex items-center text-primary hover:text-red-600">
            <FaArrowLeft className="mr-2" />
            Continue Shopping
          </Link>
        </div>

        {cartItems.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="text-6xl mb-4">🛒</div>
            <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">Looks like you haven't added any items to your cart yet</p>
            <Link
              to="/"
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-full hover:bg-red-600 transition duration-300"
            >
              Start Shopping
              <FaArrowLeft className="ml-2" />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6 space-y-6">
                  {loading ? (
                    Array(3).fill().map((_, index) => (
                      <div key={index} className="flex space-x-4">
                        <Skeleton width={96} height={96} />
                        <div className="flex-1">
                          <Skeleton width={200} height={24} />
                          <Skeleton width={100} height={20} />
                          <Skeleton width={150} height={32} />
                        </div>
                      </div>
                    ))
                  ) : (
                    cartItems.map((item) => (
                      <div key={item.id} className="flex items-center border-b pb-6 last:border-0 last:pb-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-24 h-24 object-cover rounded-md"
                        />
                        <div className="flex-1 ml-6">
                          <h3 className="text-lg font-semibold">{item.name}</h3>
                          <p className="text-gray-600">{item.weight || item.volume}</p>
                          <div className="mt-4 flex items-center space-x-4">
                            <div className="flex items-center border rounded-full">
                              <button
                                onClick={() => handleQuantityUpdate(item.id, item.quantity - 1)}
                                className="p-2 hover:text-primary"
                                disabled={item.quantity <= 1}
                              >
                                <FaMinus />
                              </button>
                              <span className="px-4 py-2 font-medium">{item.quantity}</span>
                              <button
                                onClick={() => handleQuantityUpdate(item.id, item.quantity + 1)}
                                className="p-2 hover:text-primary"
                              >
                                <FaPlus />
                              </button>
                            </div>
                            <button
                              onClick={() => handleRemoveItem(item.id)}
                              className="text-red-500 hover:text-red-600"
                            >
                              <FaTrash />
                            </button>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-semibold">₹{item.price * item.quantity}</p>
                          <p className="text-sm text-gray-500">₹{item.price} each</p>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
                <div className="space-y-4">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>₹{getCartTotal()}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Delivery</span>
                    <span>Free</span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between font-semibold text-lg">
                      <span>Total</span>
                      <span>₹{getCartTotal()}</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">Including GST</p>
                  </div>
                  <button 
                    onClick={() => navigate('/checkout')}
                    disabled={loading}
                    className={`w-full bg-primary text-white py-3 rounded-full hover:bg-red-600 transition duration-300 ${
                      loading ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {loading ? 'Processing...' : 'Proceed to Checkout'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}