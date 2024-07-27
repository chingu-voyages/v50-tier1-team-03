import HeaderNav from "./HeaderNav";

const Header = () => {
    return(
        <header className="header">
            <div>
                <img src="../src/assets/griddle-logo.png" alt="Griddle and Github Grill logo" className="griddle-logo" />
                <h1>Griddle and Github Grill</h1>
            </div>
            <HeaderNav />
        </header>
    )
}

export default Header;