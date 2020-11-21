function Item(props) {
    return (
<<<<<<< HEAD
        <li className={props.className} onClick={props.onClick}>
=======
        <li id={props.id} key={props.id} className="dummy-item">
>>>>>>> origin/master
            {props.children}
        </li>
    )
}

export default Item;