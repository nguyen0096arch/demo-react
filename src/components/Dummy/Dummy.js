import './Dummy.css';

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
    )
}

export default Dummy;