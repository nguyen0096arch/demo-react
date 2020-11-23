import { useState, useEffect } from 'react';

import Card from './Card';

export function AnimatedCard(props) {
    const [ isMounted, setMount ] = useState(false);
    const [ animating, setAnimating] = useState(false);
    const [ className, setClassName ] = useState('');
    const [ clickCount, setClickCount ] = useState(0);

    useEffect(() => {
        animate();
    }, [props.mount]);

    const animate = () => {
        if (animating) {
            setClickCount(clickCount+1);
        }
        if (props.mount !== isMounted && !isMounted) {
            setMount(true);
            setClassName(`${props.defaultClass} initial-card ${props.introClass}`);
            setAnimating(true);
            // setTimeout(() => {
            //     setClassName(`${props.defaultClass}`);
            // }, 600);
        } else if (props.mount !== isMounted && isMounted) {
            setClassName(`${props.defaultClass} ${props.outroClass}`);
            setAnimating(true);
        }
    }

    const handleAnimationEnd = () => {
        setAnimating(false);
        setMount(props.mount);
        console.log('Animation ended!');
    }

    if (clickCount > 0) {
        animate();
        setClickCount(0);
    }

    return (
        <>
            {
                (isMounted)?
                <div
                    className={className}
                    onAnimationEnd={handleAnimationEnd} 
                    // style={initialStyle}   
                >
                    <Card />
                </div>
                :''
            }
        </>
    )
}

export default AnimatedCard;

