// Can not render locally with this import. To fix later
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const HeaderNav = () => {
    return(
        <nav>
            <ul>
                <li><a href="#" className="header--nav__link">About</a></li>
                <li><a href="#" className="header--nav__link">Contact</a></li>
                <li><a href="#" className="header--nav__link">Add Credits</a></li>
                {/* <li><FontAwesomeIcon icon={faCartShopping} /></li> */}
            </ul>
        </nav>
    )
}

export default HeaderNav;