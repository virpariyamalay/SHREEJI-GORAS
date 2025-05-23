import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

export default function Home() {
  const categories = [
    {
      id: 1,
      name: 'Traditional Sweets',
      description: 'Discover authentic Indian sweets made with pure ingredients and traditional recipes',
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      link: '/sweets'
    },
    {
      id: 2,
      name: 'Dairy Products',
      description: 'Fresh and pure dairy products including paneer, curd, and butter',
      image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      link: '/dairy'
    },
    {
      id: 3,
      name: 'Fresh Milk',
      description: 'Farm-fresh milk delivered daily to your doorstep',
      image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      link: '/milk'
    }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[500px] -mt-8">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1528735602780-2552fd46c7af?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Welcome to Sweet & Dairy Shop</h1>
            <p className="text-xl md:text-2xl mb-8">Discover authentic Indian sweets and fresh dairy products</p>
            <Link
              to="/sweets"
              className="inline-flex items-center px-8 py-3 bg-primary text-white rounded-full hover:bg-red-600 transition duration-300"
            >
              Shop Now
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Our Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={category.link}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-w-16 aspect-h-9 relative">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div className="flex items-center text-primary group-hover:text-red-600">
                  <span>Explore</span>
                  <FaArrowRight className="ml-2" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-primary text-4xl mb-4">🍯</div>
              <h3 className="text-xl font-semibold mb-2">Pure Ingredients</h3>
              <p className="text-gray-600">We use only the finest and purest ingredients in our products</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-primary text-4xl mb-4">🚚</div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Same day delivery for orders placed before 2 PM</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-primary text-4xl mb-4">💯</div>
              <h3 className="text-xl font-semibold mb-2">Quality Assured</h3>
              <p className="text-gray-600">100% quality guarantee on all our products</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}