import "../css/Navbar.css"
import CartWidget from "./CartWidget"
const Navbar = () => {
    return (
        <nav className="nav-conteiner">
            <img alt='logo' src='../logo-click.png' className="logo-navbar"/>
            <a className="titulo-nav">Futuros shows</a>
            <a className="titulo-nav">Ofertas</a>
            <a className="titulo-nav">Sorteos</a>
            <CartWidget/>
        </nav>

    )
}
export default Navbar