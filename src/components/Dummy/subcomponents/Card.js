import React from 'react';

export function Card() {
    console.log('Rendering: Card');
    return (
        <div style={{ backgroundColor: 'aqua', height: '50px', width: '200px'}}>
            Should I faded out?
        </div>
    )
}

export default Card;