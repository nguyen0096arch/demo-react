import './NavigationBar.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

function NavigationBar(props) {
    
    const navTree = props.navTree || [];
    const [path, setPath] = useState(props.currentPath || []);

    // renderItems(navTree, 0, '/');
    return (
        <div className="container">
            <nav id="ml-menu" className="navbar">
                <button className="action action--close" aria-label="Close Menu"><span className="icon icon--cross"></span></button>
                <div className="menu__wrap">
                    {/* {renderItems(navTree, 0, '', '/')} */}
                    <ul data-menu="main" className="menu__level--current">
                        <li className="menu__item"><a className="menu__link" data-submenu="submenu-1" href="#">Vegetables</a></li>
                        <li className="menu__item"><a className="menu__link" data-submenu="submenu-2" href="#">Fruits</a></li>
                        <li className="menu__item"><a className="menu__link" data-submenu="submenu-3" href="#">Grains</a></li>
                        <li className="menu__item"><a className="menu__link" data-submenu="submenu-4" href="#">Mylk & Drinks</a></li>
                    </ul>

                    <ul data-menu="main" className="menu__level--current">
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

NavigationBar.propTypes = {
    navTree: PropTypes.array,
    currentPath: PropTypes.array,
}

export default NavigationBar;