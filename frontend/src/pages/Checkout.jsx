import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import OrderProgress from '../components/OrderProgress';
import toast from 'react-hot-toast';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function Checkout() {
  const navigate = useNavigate();
  const { cartItems, getCartTotal, placeOrder } = useCart();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      placeOrder(formData);
      toast.success('Order placed successfully!');
      navigate('/order-confirmation');
    } catch (error) {
      toast.error('Failed to place order. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (cartItems.length === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <OrderProgress currentStep="checkout" />
      
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Checkout</h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Delivery Info */}
        <div className="bg-white shadow-xl rounded-xl p-6 space-y-6">
          <h2 className="text-2xl font-semibold text-gray-700 border-b pb-2">Delivery Information</h2>

          {loading ? (
            <div className="space-y-4">
              <Skeleton height={40} count={4} />
              <Skeleton height={80} />
              <Skeleton height={40} count={2} />
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <InputField label="Full Name" name="fullName" value={formData.fullName} onChange={handleChange} />
                <InputField label="Email" name="email" type="email" value={formData.email} onChange={handleChange} />
                <InputField label="Phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} />
                <InputField label="PIN Code" name="pincode" value={formData.pincode} onChange={handleChange} />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <textarea
                  name="address"
                  rows={3}
                  required
                  value={formData.address}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border border-gray-300 p-2 shadow-sm focus:ring-2 focus:ring-primary focus:outline-none transition"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <InputField label="City" name="city" value={formData.city} onChange={handleChange} />
                <InputField label="State" name="state" value={formData.state} onChange={handleChange} />
              </div>
            </>
          )}
        </div>

        {/* Order Summary */}
        <div className="bg-white shadow-xl rounded-xl p-6 space-y-6 h-fit sticky top-24">
          <h2 className="text-2xl font-semibold text-gray-700 border-b pb-2">Order Summary</h2>

          <div className="space-y-4 max-h-96 overflow-y-auto">
            {loading ? (
              <Skeleton count={5} height={30} />
            ) : (
              cartItems.map(item => (
                <div key={item.id} className="flex justify-between items-center text-sm border-b pb-2">
                  <span>{item.name} × {item.quantity}</span>
                  <span className="font-medium text-gray-800">₹{item.price * item.quantity}</span>
                </div>
              ))
            )}
          </div>

          <div className="border-t pt-4 flex justify-between font-bold text-xl text-gray-800">
            <span>Total</span>
            <span>₹{getCartTotal()}</span>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-primary hover:bg-red-700 transition text-white py-3 rounded-lg text-lg font-semibold shadow-md ${
              loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {loading ? 'Processing...' : 'Place Order'}
          </button>
        </div>
      </form>
    </div>
  );
}

function InputField({ label, name, value, onChange, type = 'text' }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        required
        value={value}
        onChange={onChange}
        className="mt-1 w-full rounded-md border border-gray-300 p-2 shadow-sm focus:ring-2 focus:ring-primary focus:outline-none transition"
      />
    </div>
  );
}