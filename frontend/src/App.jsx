import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import OrderConfirmation from './pages/OrderConfirmation';
import Contact from './pages/Contact';
import Login from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';
import AddProduct from './pages/admin/AddProduct';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <Toaster
          position="bottom-center"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
            className: '',
            duration: 3000,
            style: {
              background: '#333',
              color: '#fff',
              padding: '16px',
              borderRadius: '10px',
              fontSize: '14px',
              maxWidth: '400px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            },
            success: {
              iconTheme: {
                primary: '#10B981',
                secondary: '#fff',
              },
              style: {
                background: '#059669',
              },
            },
            error: {
              iconTheme: {
                primary: '#EF4444',
                secondary: '#fff',
              },
              style: {
                background: '#DC2626',
              },
            },
          }}
        />
        <Routes>
          {/* Admin Routes */}
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/add-product" element={<AddProduct />} />

          {/* User Routes */}
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                  <Home />
                </main>
              </>
            }
          />
          <Route
            path="/sweets"
            element={
              <>
                <Navbar />
                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                  <ProductList category="sweets" />
                </main>
              </>
            }
          />
          <Route
            path="/dairy"
            element={
              <>
                <Navbar />
                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                  <ProductList category="dairy" />
                </main>
              </>
            }
          />
          <Route
            path="/milk"
            element={
              <>
                <Navbar />
                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                  <ProductList category="milk" />
                </main>
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Navbar />
                <Contact />
              </>
            }
          />
          <Route
            path="/cart"
            element={
              <>
                <Navbar />
                <Cart />
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
                <Navbar />
                <Checkout />
              </>
            }
          />
          <Route
            path="/order-confirmation"
            element={
              <>
                <Navbar />
                <OrderConfirmation />
              </>
            }
          />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;