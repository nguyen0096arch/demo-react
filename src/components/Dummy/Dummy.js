import './Dummy.css';

<<<<<<< HEAD
import { useState } from 'react';

import Item from './subcomponents/Item';

function Dummy() {
    const [className, setClassName] = useState('');

    const handleClick = (e) => {
        setClassName('animate-inFromRight');
    }

    return (
        <>
            <ul className="prev">
                <Item className={className} onClick={(e) => handleClick(e)}>Item 1</Item>
                <Item className="">Item 2</Item>
            </ul>
            <ul className="prev">
                <Item className={className} onClick={(e) => handleClick(e)}>Item 1</Item>
                <Item className="">Item 2</Item>
            </ul>
        </>
=======
import Item from './subcomponents/Item';

function Dummy() {
    setTimeout(() => {
        var item = document.getElementById('item_1');
        item && item.classList.add('animate-outToRight-1s');
        console.log('class added');

    }, 2000);
    return (
        <ul className="dummy-menu">
            <Item id="item_1">Item 1</Item>
            <Item id="item_2">Item 2</Item>
        </ul>
>>>>>>> origin/master
    )
}

export default Dummy;