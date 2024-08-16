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
                {/* <li><Link to="#" className="header--nav__link">About</Link></li> */}
                {/* <li><a href="#footer" className="header--nav__link">Contact</a></li> */}
                {/* <li><Link to="#" className="header--nav__link">Add Credits</Link></li> */}
                <li><Link to="/Cart" className="header--nav__link"><span id="cart-button">Cart | {calculateCartAmount()}</span></Link></li>
            </ul>
        </nav>
    )
}

export default HeaderNav;