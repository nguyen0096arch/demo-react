import React, { useState, useEffect } from 'react';
import PropTypes, { element } from 'prop-types';

import { addClass } from './../domUtils';

import NavigationItem from './NavigationItem';

function NavigationMenu(props) {
    const items = props.navTree || [];
    const pathArray = props.path || [];

    const [direction, setDirection] = useState(1);

    const handleClick = (e) => {
        e.preventDefault();
        addClass(e.target.parentElement, 'animate-outToRight');
    }

    const renderMenu = (items, isCurrent) => {
        return (
            <ul data-menu="main" className='menu__level--current'>
                {items.map((item, index) => {
                    return (
                        <NavigationItem 
                            id={item.id + ''} 
                            key={item.id + ''}
                            onClick={(e) => handleClick(e)}
                        >
                            {item.label}
                        </NavigationItem>
                    );
                })}
            </ul>
        );
    }

    const renderMenuRecursive = (items, path) => {
        if (!Array.isArray(path) || path.length < 1)
            return renderMenu(items, true);
        else {
            let menuId = path.shift();
            let result = '';
            items.forEach((item) => {
                if (item.id == menuId && Array.isArray(item.children))
                    result = renderMenuRecursive(item.children, path);
            });
            return result;
        }   
    }

    return (
        <>
            {renderMenuRecursive(items, pathArray)}
        </>
    )
}

NavigationMenu.propTypes = {
    navTree: PropTypes.array,
    path: PropTypes.array,
}

export default NavigationMenu;