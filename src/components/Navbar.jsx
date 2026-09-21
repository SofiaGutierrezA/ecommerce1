import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar({ cart}) {
    return (
        <nav className="navbar">
            <h2 className="navbar-title">Soleva</h2>

            <ul className="navbar-menu">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li><Link to="/men">Men</Link></li>
                <li><Link to="/women">Women</Link></li>
                <li><Link to="/account">My Account</Link></li>
                <li className="menu-actions">
                    <Link to="/cart">
                        Cart ({cart.length})
                    </Link>

                </li>
            </ul>

                

        </nav>
        
    )
}

export default Navbar;