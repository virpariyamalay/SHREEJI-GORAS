// import React from 'react';
// import { Link, Navigate } from 'react-router-dom';
// import { useCart } from '../context/CartContext';
// import { FaCheck, FaDownload } from 'react-icons/fa';
// import { jsPDF } from 'jspdf';
// import OrderProgress from '../components/OrderProgress';

// export default function OrderConfirmation() {
//   const { orderDetails } = useCart();

//   if (!orderDetails) {
//     return <Navigate to="/" />;
//   }

//   const handleDownloadBill = () => {
//     const doc = new jsPDF();

//     const lineHeight = 8;
//     let yPos = 20;

//     // Header
//     doc.setFontSize(18);
//     doc.setFont("helvetica", "bold");
//     doc.text("SHREEJI SWEETS AND DAIRY", 105, yPos, { align: "center" });

//     yPos += 10;
//     doc.setFontSize(12);
//     doc.setFont("helvetica", "normal");
//     doc.text("123, Sweet Street, Delight City, India", 105, yPos, { align: "center" });

//     yPos += 10;
//     doc.text("GSTIN: 27ABCDE1234F1Z5 | Phone: +91 98765 43210", 105, yPos, { align: "center" });

//     // Divider
//     yPos += 5;
//     doc.line(20, yPos, 190, yPos);
//     yPos += 10;

//     // Order Info
//     doc.setFont("helvetica", "bold");
//     doc.text("Order Details", 20, yPos);
//     doc.setFont("helvetica", "normal");
//     yPos += lineHeight;
//     doc.text(`Order ID: ${orderDetails.orderId}`, 20, yPos);
//     yPos += lineHeight;
//     doc.text(`Date: ${new Date(orderDetails.orderDate).toLocaleDateString()}`, 20, yPos);
//     yPos += lineHeight;
//     doc.text(`Time: ${new Date(orderDetails.orderDate).toLocaleTimeString()}`, 20, yPos);

//     // Customer Info
//     yPos += lineHeight + 5;
//     doc.setFont("helvetica", "bold");
//     doc.text("Customer Details", 20, yPos);
//     doc.setFont("helvetica", "normal");
//     yPos += lineHeight;
//     doc.text(`Name: ${orderDetails.deliveryDetails.fullName}`, 20, yPos);
//     yPos += lineHeight;
//     doc.text(`Email: ${orderDetails.deliveryDetails.email}`, 20, yPos);
//     yPos += lineHeight;
//     doc.text(`Phone: ${orderDetails.deliveryDetails.phone}`, 20, yPos);

//     // Address
//     yPos += lineHeight + 5;
//     doc.setFont("helvetica", "bold");
//     doc.text("Delivery Address", 20, yPos);
//     doc.setFont("helvetica", "normal");
//     yPos += lineHeight;
//     doc.text(orderDetails.deliveryDetails.address, 20, yPos);
//     yPos += lineHeight;
//     doc.text(`${orderDetails.deliveryDetails.city}, ${orderDetails.deliveryDetails.state} - ${orderDetails.deliveryDetails.pincode}`, 20, yPos);

//     // Divider
//     yPos += lineHeight + 5;
//     doc.line(20, yPos, 190, yPos);
//     yPos += lineHeight;

//     // Order Items Table Header
//     doc.setFont("helvetica", "bold");
//     doc.text("Item", 20, yPos);
//     doc.text("Qty", 100, yPos);
//     doc.text("Price", 130, yPos);
//     doc.text("Total", 160, yPos);

//     doc.setFont("helvetica", "normal");
//     yPos += lineHeight;

//     // Items Loop
//     orderDetails.items.forEach(item => {
//       if (yPos > 270) {
//         doc.addPage();
//         yPos = 20;
//       }
//       doc.text(item.name, 20, yPos);
//       doc.text(`${item.quantity}`, 100, yPos);
//       doc.text(`₹${item.price.toFixed(2)}`, 130, yPos);
//       doc.text(`₹${(item.price * item.quantity).toFixed(2)}`, 160, yPos);
//       yPos += lineHeight;
//     });

//     // Divider and Total
//     yPos += 5;
//     doc.line(20, yPos, 190, yPos);
//     yPos += lineHeight;
//     doc.setFont("helvetica", "bold");
//     doc.text("Total Amount:", 130, yPos);
//     doc.text(`₹${orderDetails.total.toFixed(2)}`, 160, yPos);

//     // Footer
//     yPos += 20;
//     doc.setFontSize(10);
//     doc.setFont("helvetica", "italic");
//     doc.text("Thank you for your order! Visit again!", 105, yPos, { align: "center" });

//     doc.save(`bill-${orderDetails.orderId}.pdf`);
//   };

//   return (
//     <div className="max-w-3xl mx-auto px-4 py-10">
//       <OrderProgress currentStep="confirmation" />
      
//       <div className="flex flex-col items-center text-center mb-10">
//         <div className="animate-ping absolute inline-flex h-16 w-16 rounded-full bg-green-200 opacity-75"></div>
//         <div className="relative inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full shadow-md mb-4">
//           <FaCheck className="h-8 w-8 text-green-600 animate-bounce" />
//         </div>
//         <h1 className="text-3xl font-bold text-gray-900">Order Confirmed!</h1>
//         <p className="text-gray-600 mt-2">Thank you for your order. Your order has been placed successfully.</p>
//       </div>

//       <div className="bg-white rounded-lg shadow-md p-6 space-y-8">
//         <section>
//           <h2 className="text-xl font-semibold mb-4">Order Details</h2>
//           <div className="grid grid-cols-2 gap-4 text-sm">
//             <div>
//               <p className="text-gray-600">Order ID</p>
//               <p className="font-medium">{orderDetails.orderId}</p>
//             </div>
//             <div>
//               <p className="text-gray-600">Order Date</p>
//               <p className="font-medium">
//                 {new Date(orderDetails.orderDate).toLocaleDateString()}
//               </p>
//             </div>
//           </div>
//         </section>

//         <hr className="border-gray-200" />

//         <section>
//           <h2 className="text-xl font-semibold mb-4">Delivery Address</h2>
//           <div className="text-sm space-y-1">
//             <p className="font-medium">{orderDetails.deliveryDetails.fullName}</p>
//             <p>{orderDetails.deliveryDetails.address}</p>
//             <p>{orderDetails.deliveryDetails.city}, {orderDetails.deliveryDetails.state}</p>
//             <p>PIN: {orderDetails.deliveryDetails.pincode}</p>
//             <p>Phone: {orderDetails.deliveryDetails.phone}</p>
//             <p>Email: {orderDetails.deliveryDetails.email}</p>
//           </div>
//         </section>

//         <hr className="border-gray-200" />

//         <section>
//           <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
//           <div className="space-y-2 text-sm">
//             {orderDetails.items.map(item => (
//               <div key={item.id} className="flex justify-between">
//                 <div>
//                   <span className="font-medium">{item.name}</span>
//                   <span className="text-gray-600"> × {item.quantity}</span>
//                 </div>
//                 <span>₹{item.price * item.quantity}</span>
//               </div>
//             ))}
//             <div className="border-t pt-4 mt-4">
//               <div className="flex justify-between font-semibold text-lg">
//                 <span>Total Amount</span>
//                 <span>₹{orderDetails.total}</span>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>

//       <div className="mt-10 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
//         <button
//           onClick={handleDownloadBill}
//           className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition duration-300"
//         >
//           <FaDownload className="mr-2" />
//           Download Bill (PDF)
//         </button>
//         <Link
//           to="/"
//           className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-full hover:bg-red-600 transition duration-300"
//         >
//           Continue Shopping
//         </Link>
//       </div>
//     </div>
//   );
// }
import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { FaCheck, FaDownload } from 'react-icons/fa';
import { jsPDF } from 'jspdf';
import OrderProgress from '../components/OrderProgress';

export default function OrderConfirmation() {
  const { orderDetails } = useCart();

  if (!orderDetails) {
    return <Navigate to="/" />;
  }

  const handleDownloadBill = () => {
    const doc = new jsPDF();

    const lineHeight = 8;
    let yPos = 20;

    // Header
    doc.setFontSize(18);
    doc.setFont("helvetica", "bold");
    doc.text("SHREEJI SWEETS AND DAIRY", 105, yPos, { align: "center" });

    yPos += 10;
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text("123, Sweet Street, Delight City, India", 105, yPos, { align: "center" });

    yPos += 10;
    doc.text("GSTIN: 27ABCDE1234F1Z5 | Phone: +91 98765 43210", 105, yPos, { align: "center" });

    // Divider
    yPos += 5;
    doc.line(20, yPos, 190, yPos);
    yPos += 10;

    // Order Info
    doc.setFont("helvetica", "bold");
    doc.text("Order Details", 20, yPos);
    doc.setFont("helvetica", "normal");
    yPos += lineHeight;
    doc.text(`Order ID: ${orderDetails.orderId}`, 20, yPos);
    yPos += lineHeight;
    doc.text(`Date: ${new Date(orderDetails.orderDate).toLocaleDateString()}`, 20, yPos);
    yPos += lineHeight;
    doc.text(`Time: ${new Date(orderDetails.orderDate).toLocaleTimeString()}`, 20, yPos);

    // Customer Info
    yPos += lineHeight + 5;
    doc.setFont("helvetica", "bold");
    doc.text("Customer Details", 20, yPos);
    doc.setFont("helvetica", "normal");
    yPos += lineHeight;
    doc.text(`Name: ${orderDetails.deliveryDetails.fullName}`, 20, yPos);
    yPos += lineHeight;
    doc.text(`Email: ${orderDetails.deliveryDetails.email}`, 20, yPos);
    yPos += lineHeight;
    doc.text(`Phone: ${orderDetails.deliveryDetails.phone}`, 20, yPos);

    // Address
    yPos += lineHeight + 5;
    doc.setFont("helvetica", "bold");
    doc.text("Delivery Address", 20, yPos);
    doc.setFont("helvetica", "normal");
    yPos += lineHeight;
    doc.text(orderDetails.deliveryDetails.address, 20, yPos);
    yPos += lineHeight;
    doc.text(`${orderDetails.deliveryDetails.city}, ${orderDetails.deliveryDetails.state} - ${orderDetails.deliveryDetails.pincode}`, 20, yPos);

    // Divider
    yPos += lineHeight + 5;
    doc.line(20, yPos, 190, yPos);
    yPos += lineHeight;

    // Order Items Table Header
    doc.setFont("helvetica", "bold");
    doc.text("Item", 20, yPos);
    doc.text("Category", 70, yPos);
    doc.text("Weight", 110, yPos);
    doc.text("Qty", 140, yPos);
    doc.text("Price", 160, yPos);
    doc.text("Total", 180, yPos);

    doc.setFont("helvetica", "normal");
    yPos += lineHeight;

    // Items Loop
    orderDetails.items.forEach(item => {
      if (yPos > 270) {
        doc.addPage();
        yPos = 20;
      }
      doc.text(item.subcategory.substring(0, 25), 20, yPos);
      doc.text(item.category.substring(0, 20), 70, yPos);
      doc.text(`${item.weight}${item.weightUnit}`, 110, yPos);
      doc.text(`${item.quantity}`, 140, yPos);
      doc.text(`₹${item.price.toFixed(2)}`, 160, yPos);
      doc.text(`₹${(item.price * item.quantity).toFixed(2)}`, 180, yPos);
      yPos += lineHeight;
    });

    // Divider and Total
    yPos += 5;
    doc.line(20, yPos, 190, yPos);
    yPos += lineHeight;
    doc.setFont("helvetica", "bold");
    doc.text("Total Amount:", 150, yPos);
    doc.text(`₹${orderDetails.total.toFixed(2)}`, 180, yPos);

    // Footer
    yPos += 20;
    doc.setFontSize(10);
    doc.setFont("helvetica", "italic");
    doc.text("Thank you for your order! Visit again!", 105, yPos, { align: "center" });

    doc.save(`bill-${orderDetails.orderId}.pdf`);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <OrderProgress currentStep="confirmation" />
      
      <div className="flex flex-col items-center text-center mb-10">
        <div className="animate-ping absolute inline-flex h-16 w-16 rounded-full bg-green-200 opacity-75"></div>
        <div className="relative inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full shadow-md mb-4">
          <FaCheck className="h-8 w-8 text-green-600 animate-bounce" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900">Order Confirmed!</h1>
        <p className="text-gray-600 mt-2">Thank you for your order. Your order has been placed successfully.</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 space-y-8">
        <section>
          <h2 className="text-xl font-semibold mb-4">Order Details</h2>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-600">Order ID</p>
              <p className="font-medium">{orderDetails.orderId}</p>
            </div>
            <div>
              <p className="text-gray-600">Order Date</p>
              <p className="font-medium">
                {new Date(orderDetails.orderDate).toLocaleDateString()}
              </p>
            </div>
          </div>
        </section>

        <hr className="border-gray-200" />

        <section>
          <h2 className="text-xl font-semibold mb-4">Delivery Address</h2>
          <div className="text-sm space-y-1">
            <p className="font-medium">{orderDetails.deliveryDetails.fullName}</p>
            <p>{orderDetails.deliveryDetails.address}</p>
            <p>{orderDetails.deliveryDetails.city}, {orderDetails.deliveryDetails.state}</p>
            <p>PIN: {orderDetails.deliveryDetails.pincode}</p>
            <p>Phone: {orderDetails.deliveryDetails.phone}</p>
            <p>Email: {orderDetails.deliveryDetails.email}</p>
          </div>
        </section>

        <hr className="border-gray-200" />

        <section>
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="space-y-4">
            {orderDetails.items.map(item => (
              <div key={item.id} className="border-b pb-4 last:border-0">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">{item.subcategory}</h3>
                    <p className="text-sm text-gray-600">Category: {item.category}</p>
                    <p className="text-sm text-gray-600">Weight: {item.weight}{item.weightUnit}</p>
                    <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">₹{item.price * item.quantity}</p>
                    <p className="text-sm text-gray-500">₹{item.price} each</p>
                  </div>
                </div>
              </div>
            ))}
            <div className="border-t pt-4 mt-4">
              <div className="flex justify-between font-semibold text-lg">
                <span>Total Amount</span>
                <span>₹{orderDetails.total}</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <button
          onClick={handleDownloadBill}
          className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition duration-300"
        >
          <FaDownload className="mr-2" />
          Download Bill (PDF)
        </button>
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-full hover:bg-red-600 transition duration-300"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}