import HeaderNav from "./HeaderNav";
import { Link } from 'react-router-dom';

export default function Header()  {
    return(
        <header className="header">
            <div>
                <img src="../src/assets/griddle-logo.png" alt="Griddle and Github Grill logo" className="griddle-logo" />
                <Link to="/" className="header-link"><h1>Griddle and Github Grill</h1></Link>
            </div>
            <HeaderNav />
        </header>
    )
}