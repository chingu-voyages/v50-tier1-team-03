import React from "react";

export default function MenuNav() {
    return (
        <div className="menu-nav-container">
            <nav className="menu-nav">
                <ul className="menu-links-list">
                    <li><a href="#bbq-meals" className="menu-link">Meals</a></li>
                    <li><a href="#sides" className="menu-link">Sides</a></li>
                    <li><a href="#drinks" className="menu-link">Drinks</a></li>
                    <li><a href="#desserts" className="menu-link">Desserts</a></li>
                </ul>
            </nav>
        </div>
    )
}