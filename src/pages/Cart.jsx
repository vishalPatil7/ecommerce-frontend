import { useEffect, useState, useContext } from "react"; 
import { useSelector } from "react-redux";
import CartTile from "../components/cart-tile";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { AuthContext } from "../context/AuthContext";

export default function Cart() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  const [cartCost, setCartCost] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    if (!user) {
      navigate("/login"); // Redirect to login if not authenticated
    }
  }, [user, navigate]);

  useEffect(() => {
    setCartCost(
      cartItems.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
    );
    setTotalItems(cartItems.reduce((acc, curr) => acc + curr.quantity, 0));
  }, [cartItems]);

  if (!user) {
    return null; // Prevents rendering the cart page until redirection happens
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="flex justify-center">
        {cartItems && cartItems.length ? (
          <>
            <div className="min-h-[80vh] grid md:grid-cols-2 max-w-6xl mx-auto">
              <div className="flex flex-col justify-center items-center p-3">
                {cartItems.map((cartItem) => (
                  <CartTile key={cartItem.id} cartItem={cartItem} />
                ))}
              </div>
            </div>
            <div className="w-[300px]">
              <div className="flex flex-col justify-center items-end p-5 space-y-5 mt-14">
                <h1 className="font-bold text-lg text-red-800">
                  Your Cart Summary
                </h1>
                <p>
                  <span className="text-gray-800 font-bold">Total Items</span>
                  <span>: {totalItems}</span>
                </p>
                <p>
                  <span className="text-gray-800 font-bold">Total Amount</span>
                  <span>: ${cartCost.toFixed(2)}</span>
                </p>
              </div>
            </div>
          </>
        ) : (
          <div className="min-h-[80vh] flex flex-col items-center justify-center">
            <h1 className="text-gray-800 font-bold text-xl mb-2">
              Your cart is empty
            </h1>
            <Link to="/">
              <button className="bg-red-950 text-white border-2 rounded-lg font-bold p-4">
                SHOP NOW
              </button>
            </Link>
          </div>
        )}
      </div>
    </motion.div>
  );
}







// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import CartTile from "../components/cart-tile";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

// export default function Cart() {
//   const cartItems = useSelector((state) => state.cart.items);
//   const [cartCost, setCartCost] = useState(0);
//   const [totalItems, setTotalItems] = useState(0);

//   useEffect(() => {
//     setCartCost(
//       cartItems.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
//     );
//     setTotalItems(cartItems.reduce((acc, curr) => acc + curr.quantity, 0));
//   }, [cartItems]);

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.7 }}
//     >
//       <div className="flex justify-center">
//         {cartItems && cartItems.length ? (
//           <>
//             <div className="min-h-[80vh] grid md:grid-cols-2 max-w-6xl mx-auto">
//               <div className="flex flex-col justify-center items-center p-3">
//                 {cartItems.map((cartItem) => (
//                   <CartTile key={cartItem.id} cartItem={cartItem} />
//                 ))}
//               </div>
//             </div>
//             <div className="w-[300px]">
//               <div className="flex flex-col justify-center items-end p-5 space-y-5 mt-14">
//                 <h1 className="font-bold text-lg text-red-800">
//                   Your Cart Summary
//                 </h1>
//                 <p>
//                   <span className="text-gray-800 font-bold">Total Items</span>
//                   <span>: {totalItems}</span>
//                 </p>
//                 <p>
//                   <span className="text-gray-800 font-bold">Total Amount</span>
//                   <span>: ${cartCost.toFixed(2)}</span>
//                 </p>
//               </div>
//             </div>
//           </>
//         ) : (
//           <div className="min-h-[80vh] flex flex-col items-center justify-center">
//             <h1 className="text-gray-800 font-bold text-xl mb-2">
//               Your cart is empty
//             </h1>
//             <Link to="/">
//               <button className="bg-red-950 text-white border-2 rounded-lg font-bold p-4">
//                 SHOP NOW
//               </button>
//             </Link>
//           </div>
//         )}
//       </div>
//     </motion.div>
//   );
// }
