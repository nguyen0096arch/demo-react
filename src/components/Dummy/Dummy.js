import './Dummy.css';

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
    )
}

export default Dummy;