import React from "react";
import HeaderNav from "./HeaderNav";

const Header = () => {
    return(
        <div className = "header">
            <p>logo here</p>{/* <img src="../assets/logo.png" alt="Griddle and Github Grill logo"> */}
            <h1>Griddle and Github Grill</h1>
            <HeaderNav />
        </div>
    )
}

export default Header;