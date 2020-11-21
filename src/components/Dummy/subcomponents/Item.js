function Item(props) {
    return (
        <li className={props.className} onClick={props.onClick}>
            {props.children}
        </li>
    )
}

export default Item;