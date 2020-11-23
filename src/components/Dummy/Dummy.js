import './Dummy.css';

import { useState } from 'react';

import Item from './subcomponents/Item';
import Card from './subcomponents/Card';
import AnimatedCard from './subcomponents/AnimatedCard';

function Dummy() {
    const [className, setClassName] = useState('');
    const [ isVisible, setVisibility ] = useState(false);

    const handleClick = (e) => {
        setClassName('animate-outToLeft');
    }

    const handleClickButton = () => {
        setVisibility(!isVisible);
    }

    return (
        <>
            <ul className="prev">
                <Item className={className} onClick={(e) => handleClick(e)}>Item 1</Item>
                <Item className="">Item 2</Item>
            </ul>
            <button onClick={handleClickButton}>{isVisible?'Hide card':'Show card'}</button>
            <AnimatedCard mount={isVisible} defaultClass={'card'} outroClass={'animate-outToLeft'} introClass={'animate-inFromRight'}/>
        </>
    )
}

export default Dummy;