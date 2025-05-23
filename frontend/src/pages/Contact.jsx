import React, { useState } from 'react';
import { FaPhone, FaClock, FaMapMarkerAlt, FaStar } from 'react-icons/fa';

export default function Contact() {
  const [reviewForm, setReviewForm] = useState({
    name: '',
    rating: 5,
    review: ''
  });

  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const businessHours = [
    { day: 'Monday', hours: '7:15 am–10:30 pm' },
    { day: 'Tuesday', hours: '7:15 am–10:30 pm' },
    { day: 'Wednesday', hours: '7:15 am–10:30 pm' },
    { day: 'Thursday', hours: '7:15 am–10:30 pm' },
    { day: 'Friday', hours: '7:15 am–10:30 pm' },
    { day: 'Saturday', hours: '7:15 am–10:30 pm' },
    { day: 'Sunday', hours: '7:15 am–10:30 pm' },
  ];

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the review to your backend
    console.log('Review submitted:', reviewForm);
    alert('Thank you for your review!');
    setReviewForm({ name: '', rating: 5, review: '' });
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the message to your backend
    console.log('Message sent:', contactForm);
    alert('Thank you for your message! We will get back to you soon.');
    setContactForm({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
        <div className="flex items-center justify-center space-x-2">
          <span className="text-yellow-400">4.5</span>
          <div className="flex">
            {[1, 2, 3, 4].map((_, index) => (
              <FaStar key={index} className="text-yellow-400 w-4 h-4" />
            ))}
            <FaStar
              className="text-yellow-400 w-4 h-4"
              style={{ clipPath: 'inset(0 50% 0 0)' }}
            />
          </div>
          <span className="text-gray-600">100 Google reviews</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column */}
        <div className="space-y-8">
          {/* Store Info */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Store Information</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-primary w-5 h-5 mt-1" />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-gray-600">
                    Patel Colony, Jamnagar, Gujarat 361008
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FaPhone className="text-primary w-5 h-5 mt-1" />
                <div>
                  <p className="font-medium">Phone</p>
                  <a
                    href="tel:02882755840"
                    className="text-gray-600 hover:text-primary"
                  >
                    0288 275 5840
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FaClock className="text-primary w-5 h-5 mt-1" />
                <div>
                  <p className="font-medium">Business Hours</p>
                  <div className="text-gray-600">
                    {businessHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between">
                        <span className="w-32">{schedule.day}</span>
                        <span>{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Additional Information</h2>
            <div className="space-y-2 text-gray-600">
              <p>• Service options: Offers same-day delivery</p>
              <p>• Type: Dairy store</p>
            </div>
          </div>

          {/* Map */}
          <div className="h-[400px] bg-white rounded-lg shadow-md overflow-hidden">
            <iframe
              title="Shop Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.045606682439!2d70.05910547499999!3d22.482693799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39576aa843a4a485%3A0x9bd565b5664bf795!2sSHREEJI+GORAS+SHOP!5e0!3m2!1sen!2sin!4v1708101548811!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Right Column - Forms */}
        <div className="space-y-8">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="contact-name"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                  value={contactForm.name}
                  onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="contact-email"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                  value={contactForm.email}
                  onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                />
              </div>
              <div>
                <label htmlFor="contact-phone" className="block text-sm font-medium text-gray-700">Phone</label>
                <input
                  type="tel"
                  id="contact-phone"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                  value={contactForm.phone}
                  onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="contact-message"
                  rows="4"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                  value={contactForm.message}
                  onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Review Form */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-6">Leave a Review</h2>
            <form onSubmit={handleReviewSubmit} className="space-y-4">
              <div>
                <label htmlFor="review-name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="review-name"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                  value={reviewForm.name}
                  onChange={(e) => setReviewForm({...reviewForm, name: e.target.value})}
                />
              </div>
              <div>
                <label htmlFor="rating" className="block text-sm font-medium text-gray-700">Rating</label>
                <div className="flex items-center space-x-1 mt-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setReviewForm({...reviewForm, rating: star})}
                      className="focus:outline-none"
                    >
                      <FaStar
                        className={`w-6 h-6 ${
                          star <= reviewForm.rating ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label htmlFor="review-text" className="block text-sm font-medium text-gray-700">Your Review</label>
                <textarea
                  id="review-text"
                  rows="4"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                  value={reviewForm.review}
                  onChange={(e) => setReviewForm({...reviewForm, review: e.target.value})}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-300"
              >
                Submit Review
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}