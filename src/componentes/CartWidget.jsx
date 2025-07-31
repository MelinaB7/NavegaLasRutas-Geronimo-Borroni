
import { FaCartShopping } from "react-icons/fa6";

const CartWidget = () => {
    return(
        <div className="flex items-center gap-2">
        <FaCartShopping size={24} className="text-gray-800" />
        <span className="text-blue-600 font-bold">5</span>
      </div>
    )
}

export default CartWidget