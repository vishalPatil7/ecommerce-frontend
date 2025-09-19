import { useDispatch } from "react-redux";
import { addToCart, removeFromCart, updateQuantity } from "../../store/slices/cart-slice";
import { useState } from "react";

export default function CartTile({ cartItem }) {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(cartItem.quantity || 1);

  function handleIncreaseQuantity() {
    setQuantity(quantity + 1);
    dispatch(addToCart(cartItem));
  }

  function handleDecreaseQuantity() {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      dispatch(updateQuantity({ id: cartItem.id, quantity: newQuantity }));
    }
  }

  function handleRemoveFromCart() {
    dispatch(removeFromCart(cartItem.id));
  }

  return (
    <div className="flex items-center p-5 justify-between bg-red-500 mt-2 mb-2 rounded-xl">
      <div className="flex p-3">
        <img
          src={cartItem?.images[1] || product.images[0]}
          className="h-28 rounded-lg"
          alt={cartItem?.title}
        />
        <div className="ml-10 mr-10 flex flex-col pr-10 items-center self-start space-y-5">
          <p className="text-white font-extrabold self-center">
            ${cartItem?.price}
          </p>
          <div className="flex items-center space-x-3 bg-gray-800 text-white rounded-lg p-2">
            <button
              onClick={handleDecreaseQuantity}
              className="bg-red-700 px-3 py-1 rounded text-white font-bold text-lg"
            >
              -
            </button>
            <span className="text-lg font-bold">{quantity}</span>
            <button
              onClick={handleIncreaseQuantity}
              className="bg-green-700 px-3 py-1 rounded text-white font-bold text-lg"
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div>
        <button
          onClick={handleRemoveFromCart}
          className="bg-red-950 cursor-pointer text-white border-2 rounded-lg font-bold p-4"
        >
          Remove From Cart
        </button>
      </div>
    </div>
  );
}
