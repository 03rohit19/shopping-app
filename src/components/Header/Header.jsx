import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <>
      <nav className="bg-[#FFFFFF] border border-white fixed w-full z-10">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 shadow-xl">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex space-x-4 bg-[#FFFFFF] text-[#4A4A4A">
                <Link
                  to="/"
                  className="relative px-3 py-2 text-[16px] font-medium border-b-2 border-transparent transition-colors duration-300 hover:border-[#8051FF]"
                >
                  Home
                </Link>

                <Link
                  to="/about"
                  className="relative px-3 py-2 text-[16px] font-medium border-b-2 border-transparent transition-colors duration-300 hover:border-[#8051FF]"
                >
                  About Us
                </Link>

                <Link
                  to="/contact"
                  className="relative px-3 py-2 text-[16px] font-medium border-b-2 border-transparent transition-colors duration-300 hover:border-[#8051FF]"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="flex space-x-4 bg-[#FFFFFF] text-[#4A4A4A">
              <Link
                to="/cart"
                className="  px-3 py-2 text-[16px] font-medium flex"
              >
                <span>
                  <FaShoppingCart className="m-1" />
                </span>
                {cartItems.length === 0 ? "Cart" : `Cart-${cartItems.length}`}
              </Link>
              <a href="#" className="  px-3 py-2 text-[16px] font-medium flex">
                <span>
                  <FaUser className="m-1" />
                </span>
                Login
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
