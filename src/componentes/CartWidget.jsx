
import { FaCartShopping } from "react-icons/fa6";

const CartWidget = () => {
    return(
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <FaCartShopping size={24} color="#333"/>
            <span style={{color:'blue'}}>5</span>
        </div>
    )
}

export default CartWidget