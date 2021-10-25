import { NavLink } from "react-router-dom";
import "./Nav.scss";

const Nav = () => {
  const routes = [
    { id: 1, name: "Home", route: "/home" },
    { id: 2, name: "Cart", route: "/cart" },
    { id: 3, name: "Favorites", route: "/favorites" },
  ];
  return (
    <ul className="nav__list">
      {routes.map((link) => (
        <li key={link.id} className="nav__item">
          <NavLink
            className="nav__link"
            activeClassName="nav__link--active"
            to={link.route}
          >
            {link.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Nav;
