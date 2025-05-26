// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// export default function AddProduct() {
//   const navigate = useNavigate();
//   const [product, setProduct] = useState({
//     name: '',
//     category: '',
//     subcategory: '',
//     price: '',
//     weight: '',
//     description: '',
//     image: ''
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const products = JSON.parse(localStorage.getItem('products') || '[]');
//     const newProduct = {
//       ...product,
//       id: `product-${Date.now()}`,
//       price: Number(product.price)
//     };
//     products.push(newProduct);
//     localStorage.setItem('products', JSON.stringify(products));
//     navigate('/admin/dashboard');
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
//       <div className="relative py-3 sm:max-w-xl sm:mx-auto">
//         <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
//           <div className="max-w-md mx-auto">
//             <div className="flex items-center space-x-5">
//               <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
//                 <h2 className="leading-relaxed">Add New Product</h2>
//               </div>
//             </div>
//             <form className="divide-y divide-gray-200" onSubmit={handleSubmit}>
//               <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
//                 <div className="flex flex-col">
//                   <label className="leading-loose">Product Name</label>
//                   <input
//                     type="text"
//                     required
//                     className="px-4 py-2 border focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md"
//                     value={product.name}
//                     onChange={(e) => setProduct({ ...product, name: e.target.value })}
//                   />
//                 </div>
//                 <div className="flex flex-col">
//                   <label className="leading-loose">Category</label>
//                   <input
//                     type="text"
//                     required
//                     className="px-4 py-2 border focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md"
//                     value={product.category}
//                     onChange={(e) => setProduct({ ...product, category: e.target.value })}
//                   />
//                 </div>
//                 <div className="flex flex-col">
//                   <label className="leading-loose">Subcategory</label>
//                   <input
//                     type="text"
//                     required
//                     className="px-4 py-2 border focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md"
//                     value={product.subcategory}
//                     onChange={(e) => setProduct({ ...product, subcategory: e.target.value })}
//                   />
//                 </div>
//                 <div className="flex flex-col">
//                   <label className="leading-loose">Price (₹)</label>
//                   <input
//                     type="number"
//                     required
//                     className="px-4 py-2 border focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md"
//                     value={product.price}
//                     onChange={(e) => setProduct({ ...product, price: e.target.value })}
//                   />
//                 </div>
//                 <div className="flex flex-col">
//                   <label className="leading-loose">Weight</label>
//                   <input
//                     type="text"
//                     required
//                     className="px-4 py-2 border focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md"
//                     value={product.weight}
//                     onChange={(e) => setProduct({ ...product, weight: e.target.value })}
//                   />
//                 </div>
//                 <div className="flex flex-col">
//                   <label className="leading-loose">Description</label>
//                   <textarea
//                     required
//                     className="px-4 py-2 border focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md"
//                     rows="3"
//                     value={product.description}
//                     onChange={(e) => setProduct({ ...product, description: e.target.value })}
//                   ></textarea>
//                 </div>
//                 <div className="flex flex-col">
//                   <label className="leading-loose">Image URL</label>
//                   <input
//                     type="url"
//                     required
//                     className="px-4 py-2 border focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md"
//                     value={product.image}
//                     onChange={(e) => setProduct({ ...product, image: e.target.value })}
//                   />
//                 </div>
//               </div>
//               <div className="pt-4 flex items-center space-x-4">
//                 <button
//                   type="button"
//                   className="flex justify-center items-center w-full text-gray-900 px-4 py-3 rounded-md focus:outline-none"
//                   onClick={() => navigate('/admin/dashboard')}
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="bg-primary flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none hover:bg-red-600"
//                 >
//                   Create
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// export default function AddProduct() {
//   const navigate = useNavigate();
//   const [product, setProduct] = useState({
//     name: '',
//     category: '',
//     subcategory: '',
//     price: '',
//     weight: '',
//     description: '',
//     image: null
//   });

//   const categories = ['Sweets', 'Dairy', 'Snacks', 'Beverages']; // Example categories
//   const subcategories = {
//     Sweets: ['Cake', 'Barfi', 'Ladoo', 'Gulab Jamun'],
//     Dairy: ['Milk', 'Curd', 'Paneer', 'Butter'],
//     Snacks: ['Chips', 'Namkeen', 'Biscuits'],
//     Beverages: ['Juices', 'Milkshakes', 'Soft Drinks']
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Validate if category and subcategory match
//     if (!product.category || !product.subcategory) {
//       alert('Please select a category and subcategory.');
//       return;
//     }

//     const products = JSON.parse(localStorage.getItem('products') || '[]');
//     const newProduct = {
//       ...product,
//       id: `product-${Date.now()}`,
//       price: Number(product.price)
//     };

//     // Save to localStorage
//     products.push(newProduct);
//     localStorage.setItem('products', JSON.stringify(products));

//     // Redirect to the dashboard
//     navigate('/admin/dashboard');
//   };

//   const handleCategoryChange = (e) => {
//     const selectedCategory = e.target.value;
//     setProduct({
//       ...product,
//       category: selectedCategory,
//       subcategory: '' // Reset subcategory when category changes
//     });
//   };

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     setProduct({
//       ...product,
//       image: file
//     });
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 py-6 flex flex-col justify-center sm:py-12">
//       <div className="relative py-3 sm:max-w-xl sm:mx-auto">
//         <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow-xl rounded-3xl sm:p-10">
//           <div className="max-w-md mx-auto">
//             <h2 className="text-2xl font-semibold text-gray-700 mb-6">Add New Product</h2>
//             <form className="divide-y divide-gray-200" onSubmit={handleSubmit}>
//               <div className="space-y-6">
//                 {/* Product Name */}
//                 <div className="flex flex-col">
//                   <label className="font-medium text-gray-600">Product Name</label>
//                   <input
//                     type="text"
//                     required
//                     className="px-4 py-3 border focus:ring-primary focus:border-primary block w-full text-sm border-gray-300 rounded-md"
//                     value={product.name}
//                     onChange={(e) => setProduct({ ...product, name: e.target.value })}
//                   />
//                 </div>

//                 {/* Category */}
//                 <div className="flex flex-col">
//                   <label className="font-medium text-gray-600">Category</label>
//                   <select
//                     required
//                     className="px-4 py-3 border focus:ring-primary focus:border-primary block w-full text-sm border-gray-300 rounded-md"
//                     value={product.category}
//                     onChange={handleCategoryChange}
//                   >
//                     <option value="">Select Category</option>
//                     {categories.map((category) => (
//                       <option key={category} value={category}>
//                         {category}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 {/* Subcategory */}
//                 {product.category && (
//                   <div className="flex flex-col">
//                     <label className="font-medium text-gray-600">Subcategory</label>
//                     <select
//                       required
//                       className="px-4 py-3 border focus:ring-primary focus:border-primary block w-full text-sm border-gray-300 rounded-md"
//                       value={product.subcategory}
//                       onChange={(e) => setProduct({ ...product, subcategory: e.target.value })}
//                     >
//                       <option value="">Select Subcategory</option>
//                       {subcategories[product.category]?.map((subcategory) => (
//                         <option key={subcategory} value={subcategory}>
//                           {subcategory}
//                         </option>
//                       ))}
//                     </select>
//                   </div>
//                 )}

//                 {/* Price */}
//                 <div className="flex flex-col">
//                   <label className="font-medium text-gray-600">Price (₹)</label>
//                   <input
//                     type="number"
//                     required
//                     className="px-4 py-3 border focus:ring-primary focus:border-primary block w-full text-sm border-gray-300 rounded-md"
//                     value={product.price}
//                     onChange={(e) => setProduct({ ...product, price: e.target.value })}
//                   />
//                 </div>

//                 {/* Weight */}
//                 <div className="flex flex-col">
//                   <label className="font-medium text-gray-600">Weight</label>
//                   <input
//                     type="text"
//                     required
//                     className="px-4 py-3 border focus:ring-primary focus:border-primary block w-full text-sm border-gray-300 rounded-md"
//                     value={product.weight}
//                     onChange={(e) => setProduct({ ...product, weight: e.target.value })}
//                   />
//                 </div>

//                 {/* Description */}
//                 <div className="flex flex-col">
//                   <label className="font-medium text-gray-600">Description</label>
//                   <textarea
//                     required
//                     className="px-4 py-3 border focus:ring-primary focus:border-primary block w-full text-sm border-gray-300 rounded-md"
//                     rows="3"
//                     value={product.description}
//                     onChange={(e) => setProduct({ ...product, description: e.target.value })}
//                   ></textarea>
//                 </div>

//                 {/* Image Upload */}
//                 <div className="flex flex-col">
//                   <label className="font-medium text-gray-600">Product Image</label>
//                   <input
//                     type="file"
//                     accept="image/*"
//                     required
//                     className="px-4 py-3 border focus:ring-primary focus:border-primary block w-full text-sm border-gray-300 rounded-md"
//                     onChange={handleImageUpload}
//                   />
//                 </div>
//               </div>

//               {/* Action Buttons */}
//               <div className="pt-6 flex justify-between">
//                 <button
//                   type="button"
//                   className="text-gray-600 font-medium px-4 py-3 bg-gray-200 rounded-md hover:bg-gray-300"
//                   onClick={() => navigate('/admin/dashboard')}
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="bg-primary text-white font-semibold px-6 py-3 rounded-md hover:bg-orange-600 transition duration-300"
//                 >
//                   Add Product
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// export default function AddProduct() {
//   const navigate = useNavigate();
//   const [product, setProduct] = useState({
//     name: '',
//     category: '',
//     subcategory: '',
//     price: '',
//     weight: '',
//     weightUnit: '',
//     description: '',
//     image: null,
//   });

//   const categories = {
//      'Penda': ['Kesar Penda', 'Mava Penda', 'Elichi Penda', 'Dudh Penda', 'Saffron Penda'],
//     'Shrikhand': ['Kesar Shrikhand', 'Elichi Shrikhand', 'Pineapple Shrikhand', 'Mango Shrikhand', 'Strawberry Shrikhand'],
//     'Ghari': ['Mawa Ghari', 'Pista Ghari', 'Badam Ghari', 'Kesar Ghari', 'Chocolate Ghari'],
//     'Basundi': ['Kesar Basundi', 'Elichi Basundi', 'Rose Basundi', 'Sitaphal Basundi'],
//     'Mohanthal': ['Traditional Mohanthal', 'Chocolate Mohanthal', 'Dry Fruit Mohanthal'],
//     'Sukhdi': ['Gud Sukhdi', 'Dry Fruit Sukhdi', 'Til Sukhdi'],
//     'Lapsi': ['Fada Lapsi', 'Dry Fruit Lapsi', 'Gud Lapsi'],
//     'Puran Poli': ['Toor Dal Puran Poli', 'Chana Dal Puran Poli', 'Coconut Puran Poli'],
//     'Jalebi': ['Regular Jalebi', 'Paneer Jalebi', 'Mawa Jalebi'],
//     'Adadiya Pak': ['Dry Fruit Adadiya', 'Ghee-rich Adadiya', 'Ginger Adadiya'],
//     'Churma Ladoo': ['Wheat Churma Ladoo', 'Besan Churma Ladoo', 'Jaggery Churma Ladoo'],
//     'Kopra Pak': ['White Kopra Pak', 'Pink Kopra Pak', 'Dry Fruit Kopra Pak'],
//     'Magas': ['Classic Magas', 'Kesar Magas', 'Nutty Magas'],
//     'Kaju Katli': ['Kesar Kaju Katli', 'Chocolate Kaju Katli', 'Rose Kaju Katli'],
//     'Thabdi': ['Plain Thabdi', 'Kesar Thabdi', 'Ghee Thabdi'],
//     'Rasgulla': ['Regular Rasgulla', 'Dry Fruit Rasgulla', 'Saffron Rasgulla'],
//     'Gulab Jamun': ['Classic Gulab Jamun', 'Kala Jamun', 'Stuffed Gulab Jamun'],
//     'Halwasan': ['Mawa Halwasan', 'Dry Fruit Halwasan', 'Kesar Halwasan'],
//     'Boondi Ladoo': ['Classic Boondi Ladoo', 'Kesar Boondi Ladoo', 'Dry Fruit Boondi'],
//     'Malpua': ['Plain Malpua', 'Rabdi Malpua', 'Banana Malpua'],
//     'Barfi': ['Milk Barfi', 'Kesar Barfi', 'Chocolate Barfi', 'Coconut Barfi'],
//     'Sandesh': ['Mango Sandesh', 'Rose Sandesh', 'Chocolate Sandesh'],
//     'Cham Cham': ['White Cham Cham', 'Stuffed Cham Cham', 'Coconut Cham Cham'],
//     'Sev Barfi': ['Classic Sev Barfi', 'Kesar Sev Barfi', 'Pistachio Sev Barfi'],
//     'Anjeer Roll': ['Dry Fruit Anjeer Roll', 'Kaju Anjeer Roll'],
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!product.category || !product.subcategory) {
//       alert('Please select a category and subcategory.');
//       return;
//     }

//     const products = JSON.parse(localStorage.getItem('products') || '[]');
//     const newProduct = {
//       ...product,
//       id: `product-${Date.now()}`,
//       price: Number(product.price),
//     };

//     products.push(newProduct);
//     localStorage.setItem('products', JSON.stringify(products));
//     navigate('/admin/dashboard');
//   };

//   const handleCategoryChange = (e) => {
//     const category = e.target.value;
//     setProduct({ ...product, category, subcategory: '' });
//   };

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setProduct({ ...product, image: file });
//     }
//   };

//   const handleRemoveImage = () => {
//     setProduct({ ...product, image: null });
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-pink-100 py-10 flex justify-center">
//       <div className="w-full max-w-2xl bg-white shadow-2xl rounded-3xl p-8">
//         <h2 className="text-3xl font-bold text-center text-yellow-800 mb-8">🍬 Add Sweet Product</h2>
//         <form onSubmit={handleSubmit} className="space-y-6">

//           {/* Product Name */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Product Name</label>
//             <input
//               type="text"
//               required
//               value={product.name}
//               onChange={(e) => setProduct({ ...product, name: e.target.value })}
//               className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:ring-pink-400 focus:border-pink-400"
//             />
//           </div>

//           {/* Category */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Category</label>
//             <select
//               required
//               value={product.category}
//               onChange={handleCategoryChange}
//               className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:ring-pink-400 focus:border-pink-400"
//             >
//               <option value="">Select Category</option>
//               {Object.keys(categories).map((cat) => (
//                 <option key={cat} value={cat}>{cat}</option>
//               ))}
//             </select>
//           </div>

//           {/* Subcategory */}
//           {product.category && (
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Subcategory</label>
//               <select
//                 required
//                 value={product.subcategory}
//                 onChange={(e) => setProduct({ ...product, subcategory: e.target.value })}
//                 className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:ring-pink-400 focus:border-pink-400"
//               >
//                 <option value="">Select Subcategory</option>
//                 {categories[product.category].map((subcat) => (
//                   <option key={subcat} value={subcat}>{subcat}</option>
//                 ))}
//               </select>
//             </div>
//           )}

//           {/* Price */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Price (₹)</label>
//             <input
//               type="number"
//               required
//               value={product.price}
//               onChange={(e) => setProduct({ ...product, price: e.target.value })}
//               className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:ring-pink-400 focus:border-pink-400"
//             />
//           </div>

//           {/* Weight + Unit */}
//           <div className="flex space-x-4">
//             <div className="w-2/3">
//               <label className="block text-sm font-medium text-gray-700">Weight</label>
//               <input
//                 type="text"
//                 required
//                 value={product.weight}
//                 onChange={(e) => setProduct({ ...product, weight: e.target.value })}
//                 className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:ring-pink-400 focus:border-pink-400"
//               />
//             </div>
//             <div className="w-1/3">
//               <label className="block text-sm font-medium text-gray-700">Unit</label>
//               <select
//                 required
//                 value={product.weightUnit}
//                 onChange={(e) => setProduct({ ...product, weightUnit: e.target.value })}
//                 className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:ring-pink-400 focus:border-pink-400"
//               >
//                 <option value="">Select</option>
//                 <option value="g">g</option>
//                 <option value="kg">kg</option>
//                 <option value="ml">ml</option>
//                 <option value="L">L</option>
//               </select>
//             </div>
//           </div>

//           {/* Description */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Description</label>
//             <textarea
//               rows="3"
//               required
//               value={product.description}
//               onChange={(e) => setProduct({ ...product, description: e.target.value })}
//               className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:ring-pink-400 focus:border-pink-400"
//             ></textarea>
//           </div>

//           {/* Image Upload */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Product Image</label>
//             <div className="border-2 border-dashed border-gray-300 rounded-xl p-4 flex items-center justify-center relative min-h-[150px]">
//               {product.image ? (
//                 <div className="relative">
//                   <img
//                     src={URL.createObjectURL(product.image)}
//                     alt="Preview"
//                     className="h-32 object-contain"
//                   />
//                   <button
//                     type="button"
//                     onClick={handleRemoveImage}
//                     className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs"
//                   >
//                     ✕
//                   </button>
//                 </div>
//               ) : (
//                 <label className="text-center text-gray-500 cursor-pointer">
//                   <input
//                     type="file"
//                     accept="image/*"
//                     onChange={handleImageUpload}
//                     className="hidden"
//                   />
//                   <div className="flex flex-col items-center">
//                     <span className="text-3xl">📤</span>
//                     <span className="mt-1 font-medium text-green-700">Upload a file</span>
//                     <span className="text-sm text-gray-400">PNG, JPG, GIF up to 10MB</span>
//                   </div>
//                 </label>
//               )}
//             </div>
//           </div>

//           {/* Buttons */}
//           <div className="flex justify-between pt-4">
//             <button
//               type="button"
//               className="bg-gray-200 text-gray-700 px-5 py-2 rounded-xl hover:bg-gray-300"
//               onClick={() => navigate('/admin/dashboard')}
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="bg-pink-500 text-white px-6 py-2 font-semibold rounded-xl hover:bg-pink-600"
//             >
//               Add Product
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddProduct() {
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    section: '',
    name: '',
    category: '',
    subcategory: '',
    price: '',
    weight: '',
    weightUnit: '',
    description: '',
    image: null,
  });

  const sections = {
    'Sweets': {
      categories: {
        'Penda': ['Kesar Penda', 'Mava Penda', 'Elichi Penda', 'Dudh Penda', 'Saffron Penda'],
        'Shrikhand': ['Kesar Shrikhand', 'Elichi Shrikhand', 'Pineapple Shrikhand', 'Mango Shrikhand', 'Strawberry Shrikhand'],
        'Ghari': ['Mawa Ghari', 'Pista Ghari', 'Badam Ghari', 'Kesar Ghari', 'Chocolate Ghari'],
        'Basundi': ['Kesar Basundi', 'Elichi Basundi', 'Rose Basundi', 'Sitaphal Basundi'],
        'Mohanthal': ['Traditional Mohanthal', 'Chocolate Mohanthal', 'Dry Fruit Mohanthal'],
        'Sukhdi': ['Gud Sukhdi', 'Dry Fruit Sukhdi', 'Til Sukhdi'],
        'Lapsi': ['Fada Lapsi', 'Dry Fruit Lapsi', 'Gud Lapsi'],
        'Puran Poli': ['Toor Dal Puran Poli', 'Chana Dal Puran Poli', 'Coconut Puran Poli'],
        'Jalebi': ['Regular Jalebi', 'Paneer Jalebi', 'Mawa Jalebi'],
        'Adadiya Pak': ['Dry Fruit Adadiya', 'Ghee-rich Adadiya', 'Ginger Adadiya'],
        'Churma Ladoo': ['Wheat Churma Ladoo', 'Besan Churma Ladoo', 'Jaggery Churma Ladoo'],
        'Kopra Pak': ['White Kopra Pak', 'Pink Kopra Pak', 'Dry Fruit Kopra Pak'],
        'Magas': ['Classic Magas', 'Kesar Magas', 'Nutty Magas'],
        'Kaju Katli': ['Kesar Kaju Katli', 'Chocolate Kaju Katli', 'Rose Kaju Katli'],
        'Thabdi': ['Plain Thabdi', 'Kesar Thabdi', 'Ghee Thabdi'],
        'Rasgulla': ['Regular Rasgulla', 'Dry Fruit Rasgulla', 'Saffron Rasgulla'],
        'Gulab Jamun': ['Classic Gulab Jamun', 'Kala Jamun', 'Stuffed Gulab Jamun'],
        'Halwasan': ['Mawa Halwasan', 'Dry Fruit Halwasan', 'Kesar Halwasan'],
        'Boondi Ladoo': ['Classic Boondi Ladoo', 'Kesar Boondi Ladoo', 'Dry Fruit Boondi'],
        'Malpua': ['Plain Malpua', 'Rabdi Malpua', 'Banana Malpua'],
        'Barfi': ['Milk Barfi', 'Kesar Barfi', 'Chocolate Barfi', 'Coconut Barfi'],
        'Sandesh': ['Mango Sandesh', 'Rose Sandesh', 'Chocolate Sandesh'],
        'Cham Cham': ['White Cham Cham', 'Stuffed Cham Cham', 'Coconut Cham Cham'],
        'Sev Barfi': ['Classic Sev Barfi', 'Kesar Sev Barfi', 'Pistachio Sev Barfi'],
        'Anjeer Roll': ['Dry Fruit Anjeer Roll', 'Kaju Anjeer Roll'],
      }
    },
    'Dairy Products': {
      categories: {
        'Milk Products': ['Fresh Milk', 'Pasteurized Milk', 'Full Cream Milk', 'Toned Milk', 'Double Toned Milk'],
        'Curd Products': ['Plain Curd', 'Greek Yogurt', 'Flavored Yogurt', 'Low Fat Curd', 'Probiotic Curd'],
        'Butter Products': ['White Butter', 'Table Butter', 'Ghee', 'Low Fat Butter', 'Salted Butter'],
        'Paneer Products': ['Fresh Paneer', 'Low Fat Paneer', 'Malai Paneer', 'Spiced Paneer', 'Tofu'],
        'Cheese Products': ['Processed Cheese', 'Mozzarella Cheese', 'Cottage Cheese', 'Cream Cheese', 'Cheese Spread'],
        'Cream Products': ['Fresh Cream', 'Low Fat Cream', 'Whipping Cream', 'Sour Cream', 'Malai'],
        'Buttermilk': ['Plain Buttermilk', 'Masala Buttermilk', 'Spiced Buttermilk', 'Jeera Buttermilk'],
        'Lassi': ['Sweet Lassi', 'Mango Lassi', 'Rose Lassi', 'Plain Lassi', 'Dry Fruit Lassi']
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!product.section || !product.category || !product.subcategory) {
      alert('Please select all required fields');
      return;
    }

    const products = JSON.parse(localStorage.getItem('products') || '[]');
    const newProduct = {
      ...product,
      id: `product-${Date.now()}`,
      price: Number(product.price),
    };

    products.push(newProduct);
    localStorage.setItem('products', JSON.stringify(products));
    navigate('/admin/dashboard');
  };

  const handleSectionChange = (e) => {
    const section = e.target.value;
    setProduct({
      ...product,
      section,
      category: '',
      subcategory: '',
    });
  };

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setProduct({
      ...product,
      category,
      subcategory: '',
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProduct({ ...product, image: file });
    }
  };

  const handleRemoveImage = () => {
    setProduct({ ...product, image: null });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-pink-100 py-10 flex justify-center">
      <div className="w-full max-w-2xl bg-white shadow-2xl rounded-3xl p-8">
        <h2 className="text-3xl font-bold text-center text-yellow-800 mb-8">🍬 Add Product</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Section Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Section</label>
            <select
              required
              value={product.section}
              onChange={handleSectionChange}
              className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:ring-pink-400 focus:border-pink-400"
            >
              <option value="">Select Section</option>
              {Object.keys(sections).map((section) => (
                <option key={section} value={section}>{section}</option>
              ))}
            </select>
          </div>

          {/* Category Selection */}
          {product.section && (
            <div>
              <label className="block text-sm font-medium text-gray-700">Category</label>
              <select
                required
                value={product.category}
                onChange={handleCategoryChange}
                className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:ring-pink-400 focus:border-pink-400"
              >
                <option value="">Select Category</option>
                {Object.keys(sections[product.section].categories).map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          )}

          {/* Subcategory Selection */}
          {product.category && (
            <div>
              <label className="block text-sm font-medium text-gray-700">Product Type</label>
              <select
                required
                value={product.subcategory}
                onChange={(e) => setProduct({ ...product, subcategory: e.target.value })}
                className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:ring-pink-400 focus:border-pink-400"
              >
                <option value="">Select Product Type</option>
                {sections[product.section].categories[product.category].map((subcategory) => (
                  <option key={subcategory} value={subcategory}>{subcategory}</option>
                ))}
              </select>
            </div>
          )}

          {/* Price */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Price (₹)</label>
            <input
              type="number"
              required
              value={product.price}
              onChange={(e) => setProduct({ ...product, price: e.target.value })}
              className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:ring-pink-400 focus:border-pink-400"
            />
          </div>

          {/* Weight + Unit */}
          <div className="flex space-x-4">
            <div className="w-2/3">
              <label className="block text-sm font-medium text-gray-700">Weight/Volume</label>
              <input
                type="text"
                required
                value={product.weight}
                onChange={(e) => setProduct({ ...product, weight: e.target.value })}
                className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:ring-pink-400 focus:border-pink-400"
              />
            </div>
            <div className="w-1/3">
              <label className="block text-sm font-medium text-gray-700">Unit</label>
              <select
                required
                value={product.weightUnit}
                onChange={(e) => setProduct({ ...product, weightUnit: e.target.value })}
                className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:ring-pink-400 focus:border-pink-400"
              >
                <option value="">Select</option>
                <option value="g">g</option>
                <option value="kg">kg</option>
                <option value="ml">ml</option>
                <option value="L">L</option>
              </select>
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              rows="3"
              required
              value={product.description}
              onChange={(e) => setProduct({ ...product, description: e.target.value })}
              className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:ring-pink-400 focus:border-pink-400"
            ></textarea>
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Product Image</label>
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-4 flex items-center justify-center relative min-h-[150px]">
              {product.image ? (
                <div className="relative">
                  <img
                    src={URL.createObjectURL(product.image)}
                    alt="Preview"
                    className="h-32 object-contain"
                  />
                  <button
                    type="button"
                    onClick={handleRemoveImage}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs"
                  >
                    ✕
                  </button>
                </div>
              ) : (
                <label className="text-center text-gray-500 cursor-pointer">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                  <div className="flex flex-col items-center">
                    <span className="text-3xl">📤</span>
                    <span className="mt-1 font-medium text-green-700">Upload a file</span>
                    <span className="text-sm text-gray-400">PNG, JPG, GIF up to 10MB</span>
                  </div>
                </label>
              )}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-between pt-4">
            <button
              type="button"
              className="bg-gray-200 text-gray-700 px-5 py-2 rounded-xl hover:bg-gray-300"
              onClick={() => navigate('/admin/dashboard')}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-pink-500 text-white px-6 py-2 font-semibold rounded-xl hover:bg-pink-600"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}