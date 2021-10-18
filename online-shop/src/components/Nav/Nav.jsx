import { NavLink } from "react-router-dom";
import "./Nav.scss"

const Nav = () => {
    return (
        <ul className="nav__list">
            <li className="nav__item"><NavLink className="nav__link" activeClassName="nav__link--active" to="/home">Home</NavLink></li>
            <li className="nav__item"><NavLink className="nav__link" activeClassName="nav__link--active" to="/cart">Cart</NavLink></li>
            <li className="nav__item"><NavLink className="nav__link" activeClassName="nav__link--active" to="/favorites">Favorites</NavLink></li>
        </ul>
    )
}

export default Nav