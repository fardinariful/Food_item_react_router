import {  NavLink } from "react-router-dom";
import './Header.css'
const Header = () => {
    return (
        <div>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact Us</NavLink>
                <NavLink to="/fooditems">Food Items</NavLink>
            </nav>
        </div>
    );
};

export default Header;