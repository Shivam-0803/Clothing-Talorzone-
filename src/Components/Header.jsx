import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Importing a separate CSS file for the header styles

const Header = ({ cartCount }) => {
    return (
        <header className="header">
            <div className="logo">
                <Link to="/">MyTalorzone</Link>
            </div>
            <nav className="nav">
                <ul>
                    <li><Link to="/">New Arrivals</Link></li>
                    <li><Link to="/ethnic-wear">Ethnic Wear</Link></li>
                    <li><Link to="/Bestseller">Best Sellers</Link></li>
                    <li><Link to="/dresses">Dresses</Link></li>
                    <li><Link to="/co-ords-jumpsuits">Co-Ords & Jumpsuits</Link></li>
                    <li><Link to="/tops-shirts">Tops & Shirts</Link></li>
                    {/* <li><Link to="/Login">Login</Link></li> */}
                </ul>
            </nav>
            <div className="header-icons">
                <Link to="/cart">
                    <span className="cart-icon">🛒 {cartCount}</span>
                </Link>
                <Link to="/Login">
                    <span className="profile-icon">👤</span>
                </Link>
            </div>
        </header>
    );
};

export default Header;
