
import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
    const { cart } = useContext(CartContext);
    return (
      <nav className="flex items-center justify-between px-5">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-0">
          <NavLink to='/'><img alt="logo" src="https://i.postimg.cc/26PRZdZT/newlogo.png" className="w-40 m-4 h-32 object-contain" /></NavLink>
          </div>
          <NavLink to='/categories/Futuros-shows' className="text-xl font-semibold hover:text-lime-500 cursor-pointer">Futuros shows</NavLink>
          <NavLink to='/categories/Ofertas' className="text-xl font-semibold hover:text-lime-500 cursor-pointer">Ofertas</NavLink>
          <NavLink to='/categories/Sorteos'className="text-xl font-semibold hover:text-lime-500 cursor-pointer">Sorteos</NavLink>
        </div>
         {cart.length > 0 && <CartWidget />}
      </nav>
    );
  };
  
  export default Navbar;