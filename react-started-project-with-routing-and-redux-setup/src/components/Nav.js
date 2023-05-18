import '../App.css';
import {Link} from "react-router-dom";

function Nav() {
    return (
        <nav>
            <h3>Logo</h3>
            <ul className="nav-links">
                <Link to="/about">
                    <li>About Us</li>
                </Link>
                <Link to="/contact">
                    <li>Contact Us</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;