import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar({ cart}) {
    return (
        <nav className="navbar">
            <h1 className="navbar-title">Sport Shop</h1>

            <ul className="navbar-menu">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li><Link to="/">Men</Link></li>
                <li><Link to="/">Women</Link></li>
                <li><Link to="/">Shoes</Link></li>
                <li><Link to="/">Contact</Link></li>
                <li className="menu-actions"><button>Search</button></li>
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