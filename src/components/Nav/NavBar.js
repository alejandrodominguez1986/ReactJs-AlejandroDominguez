import "./NavBar.css";
import CartWidgets from "../Cart-Icon/CartWidgets";
import { Link } from 'react-router-dom'

const NavBar = () => {


    return (
        <div className="bg-navbar container my-3">
            <div className="navbar-container">
                <nav className="navbar-navbar">
                    <Link to='/productos/cuchillos' className="navbar-navlink">Cuchillos</Link>
                    <Link to='/productos/cucharas' className="navbar-navlink">Cucharas</Link>
                    <Link to='/productos/espatulas' className="navbar-navlink">Espatulas</Link>
                    <CartWidgets className="cart-img"></CartWidgets>
                </nav>
            </div>
        </div>
    )
}

export default NavBar