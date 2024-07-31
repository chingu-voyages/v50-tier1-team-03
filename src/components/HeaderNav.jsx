// Can not render locally with this import. To fix later
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from "react";
import { Link } from "react-router-dom";

const HeaderNav = () => {
    return(
        <nav>
            <ul>
                <li><a href="#" className="header--nav__link">About</a></li>
                <li><a href="#" className="header--nav__link">Contact</a></li>
                <li><a href="#" className="header--nav__link">Add Credits</a></li>
                <li><Link to="/Cart">Cart | 3</Link></li>
                    {/* Number (3) above is placeholder for now. Will update to change with amount of items in cart*/}
            </ul>
        </nav>
    )
}

export default HeaderNav;