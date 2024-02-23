import { removeItem } from "../../utils/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import Header from "../Header/Header";
// Assuming the file containing cartSlice is in the same directory as Cart component

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  const handleRemove = (id) => {
    dispatch(removeItem({ id }));
  };

  return (
    <>
      <Header />
      <div className="text-center  p-4 ">
        <h1 className="text-6xl font-bold text-green-500 mt-20">Cart</h1>
        {cartItems.length === 0 ? (
          <p className="text-4xl font-bold text-blue-800">Your cart is empty</p>
        ) : (
          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-md p-4 flex flex-col"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24  mx-auto "
                />
                <div className="mt-2 flex-grow">
                  <h2 className="text-lg font-semibold">{item.category}</h2>
                  <p className="text-gray-600 font-semibold">
                    Rating: {item.rating.rate}
                    <span className="text-yellow-500 text-lg">&#9733;</span>
                  </p>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <button
                    className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded-lg font-sans font-semibold"
                    onClick={() => handleRemove(item.id)}
                  >
                    Remove
                  </button>
                  <button className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded-lg font-sans font-semibold">
                    Buy now
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
