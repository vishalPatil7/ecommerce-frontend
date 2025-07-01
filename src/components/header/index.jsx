import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function Header() {
  const { user, logout } = useContext(AuthContext);

  return (
    <div>
      <nav className="flex items-center justify-between h-15 max-w-6xl mx-auto">
        <Link to={"/"}>
          <div>
            <img
              src="https://www.freepnglogos.com/uploads/flipkart-logo-png/flipkart-logo-transparent-vector-3.png"
              alt="Flipkart Logo"
              width={260}
              height={180}
            />
          </div>
        </Link>
        <ul className="flex list-none items-center space-x-6 text-gray-800 font-semibold">
          <Link to={"/"}>
            <li className="cursor-pointer list-none">Home</li>
          </Link>
          <Link to={"/cart"}>
            <li className="cursor-pointer">Cart</li>
          </Link>
          {user ? (
            <>
              <li className="cursor-pointer">
                My Orders
              </li>
              <li
                className="cursor-pointer bg-red-700 text-white px-4 py-2 rounded-lg"
                onClick={logout}
              >
                Logout
              </li>
            </>
          ) : (
            <>
              <Link to={"/login"}>
                <li className="cursor-pointer">Login</li>
              </Link>
              <Link to={"/register"}>
                <li className="cursor-pointer">Register</li>
              </Link>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}

// export default function Header() {
//   return (
//     <div>
//       <nav className="flex items-center justify-between h-20 max-w-6xl mx-auto">
//         <Link to={"/"}>
//           <div className="ml-5">
//             <h1 className="text-red-900 font-bold text-xl sm:text-2xl md:text-3xl cursor-pointer tracking-wide">
//               REACT REDUX SHOPPING CART
//             </h1>
//           </div>
//         </Link>
//         <ul className="flex list-none items-center space-x-6 text-gray-800 font-semibold">
//           <Link to={"/"}>
//             <li className="cursor-pointer list-none">Home</li>
//           </Link>
//           <Link to={"/cart"}>
//             <li className="cursor-pointer">Cart</li>
//           </Link>
//           <Link to={"/login"}>
//             <li className="cursor-pointer">Login</li>
//           </Link>
//           <Link to={"/register"}>
//             <li className="cursor-pointer">Register</li>
//           </Link>
//         </ul>
//       </nav>
//     </div>
//   );
// }
