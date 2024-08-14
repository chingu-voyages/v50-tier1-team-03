// Can not render locally with this import. To fix later
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from "react";
import { Link } from "react-router-dom";

function calculateCartAmount(){
    let total = 0
    let cart = JSON.parse(localStorage.getItem("cart"))
    if (cart) {
        cart.forEach(item => {
            total = total + item.amount
        })
    }
    return total
}
// {localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")).length : 0}
const HeaderNav = () => {
    return(
        <nav>
            <ul>
                <li><Link to="#" className="header--nav__link">About</Link></li>
                <li><Link to="#" className="header--nav__link">Contact</Link></li>
                <li><Link to="#" className="header--nav__link">Add Credits</Link></li>
                <li><Link to="/Cart" className="header--nav__link">Cart | {calculateCartAmount()}</Link></li>
                    {/* Number (3) above is placeholder for now. Will update to change with amount of items in cart*/}
            </ul>
        </nav>
    )
}

export default HeaderNav;