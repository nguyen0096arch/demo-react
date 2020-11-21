import PropTypes from 'prop-types';
import './../NavigationBar.css';

function NavigationItem(props) {
    let className = (props.className)? 'menu__item ' + props.className : 'menu__item';
    return (
        <li id={props.id} className={className} onClick={props.onClick}>
            <a className="menu__link" href="#">
                {props.children}
            </a>
        </li>
    )
}

NavigationItem.propTypes = {
    id: PropTypes.string,
    onClick: PropTypes.func,
}

NavigationItem.defaultProps = {
}

export default NavigationItem;