import { FaCartShopping } from "react-icons/fa6";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";


const CartWidget = () => {
  const { cartQuantity } = useContext(CartContext);
  return (
    <div className="flex items-center gap-2">
      <Link to="/cart" className="text-white hover:text-lime-400 transition">
        <FaCartShopping size={24} />
      </Link>
      <span className="text-lime-500 font-bold">{cartQuantity()}</span>
    </div>
  );
};

export default CartWidget;
