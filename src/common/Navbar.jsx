import { NavLink } from "react-router-dom";

const Navbar = ({ links }) => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {links.map((link) => {
          return (
            <li key={link.to} className="navbar-list__item">
              <NavLink to={link.to} className="navbar-list__link" end>
                {link.content}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
