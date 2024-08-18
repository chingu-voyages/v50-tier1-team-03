import { useState, useEffect } from 'react';


export default function MenuNav() {

    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 650) {
              setIsSticky(true);
            } else {
              setIsSticky(false);
            }
        }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

    }, [])


    return (
        <div className={`menu-nav-container ${isSticky ? 'sticky' : ''}`}>
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