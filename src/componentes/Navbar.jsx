
import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget"
const Navbar = () => {
    return (
      <nav className="flex items-center justify-between px-15 py-4 bg-gray-200 text-black flex-wrap">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-0">
          <NavLink to='/'><img alt="logosvg" src="../click.svg" className="w-10 h-10 object-contain" /></NavLink>
          <NavLink to='/'><img alt="logo" src="../logo-click.png" className="w-20 h-20 object-contain" /></NavLink>
          </div>
          <NavLink to='/categories/Futuros-shows' className="text-l font-semibold hover:text-blue-500 cursor-pointer">Futuros shows</NavLink>
          <NavLink to='/categories/Ofertas' className="text-l font-semibold hover:text-blue-500 cursor-pointer">Ofertas</NavLink>
          <NavLink to='/categories/Sorteos'className="text-l font-semibold hover:text-blue-500 cursor-pointer">Sorteos</NavLink>
        </div>
        <CartWidget />
      </nav>
    );
  };
  
  export default Navbar;