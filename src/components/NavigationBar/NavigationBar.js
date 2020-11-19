import './NavigationBar.css';

function NavigationBar() {
    return (
        <div className="container">
            <nav id="ml-menu" className="navbar">
                <button className="action action--close" aria-label="Close Menu"><span className="icon icon--cross"></span></button>
                <div className="menu__wrap">
                    <ul data-menu="main" className="menu__level">
                        <li className="menu__item"><a className="menu__link" data-submenu="submenu-1" href="#">Vegetables</a></li>
                        <li className="menu__item"><a className="menu__link" data-submenu="submenu-2" href="#">Fruits</a></li>
                        <li className="menu__item"><a className="menu__link" data-submenu="submenu-3" href="#">Grains</a></li>
                        <li className="menu__item"><a className="menu__link" data-submenu="submenu-4" href="#">Mylk & Drinks</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavigationBar;