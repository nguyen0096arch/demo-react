import './NavigationBar.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

import React from 'react';
import PropTypes from 'prop-types';

import NavigationMenu from './subcomponents/NavigationMenu';

function NavigationBar(props) {
    return (
        <div className="container">
            <nav id="ml-menu" className="navbar">
                <nav className="menu__breadcrumbs">
                    <a>All</a>
                </nav>
                {/* <button className="action action--close" aria-label="Close Menu"><span className="icon icon--cross"></span></button> */}
                <div className="menu__wrap">
                    <NavigationMenu {...props} level={0} key="root"/>
                </div>
            </nav>
        </div>
    )
}

NavigationBar.propTypes = {
    /**
     * Array of menu items in format: { id: integer, label: String, childs: Array}
     */
    navTree: PropTypes.array,
    path: PropTypes.array,
}

export default NavigationBar;

