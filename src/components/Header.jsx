import HeaderNav from "./HeaderNav";

export default function Header()  {
    return(
        <header className="header">
            <div>
                <img src="../../assets/griddle-logo.png" alt="Griddle and Github Grill logo" className="griddle-logo" />
                <h1>Griddle and Github Grill</h1>
            </div>
            <HeaderNav />
        </header>
    )
}