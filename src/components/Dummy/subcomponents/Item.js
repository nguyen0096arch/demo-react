function Item(props) {
    return (
        <li id={props.id} key={props.id} className="dummy-item">
            {props.children}
        </li>
    )
}

export default Item;