import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../store/slices/cart-slice";

export default function ProductTile({ product }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);

  function handleAddToCart() {
    dispatch(addToCart(product));
  }

  function handleRemoveFromCart() {
    dispatch(removeFromCart(product.id));
  }

  return (
    <div>
      <div className="group flex flex-col items-center border-2 border-red-900 gap-3 p-4 h-[360px] mt-10 ml-5 rounded-xl">
        <div className="h-[180px]">
          <img
            src={product?.images[1]}
            alt={product?.title}
            className="object-cover h-full w-full rounded-lg"
          />
        </div>
        <div>
          <h1 className="truncate sm:whitespace-normal h-[36px] w-40 sm:w-60 mt-3 text-gray-700 font-bold text-sm">
            {product?.title}
          </h1>
        </div>
        <div className="flex items-center justify-center w-full mt-1">
          {cart.some((item) => item.id === product.id) ? (
            <div className="flex items-center gap-3">
              <button
                onClick={handleRemoveFromCart}
                className="bg-red-950 cursor-pointer text-white border-2 rounded-lg font-bold p-4"
              >
                Remove from cart
              </button>
            </div>
          ) : (
            <button
              onClick={handleAddToCart}
              className="bg-red-950 cursor-pointer text-white border-2 rounded-lg font-bold p-4 mb-[15px]"
            >
              Add to cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
