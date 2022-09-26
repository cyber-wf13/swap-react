import { Link } from "react-router-dom";

const Navbar = ({ links }) => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {links.map((link) => {
          return (
            <li key={link.to} className="navbar-list__item">
              <Link to={link.to} className="navbar-list__link">
                {link.content}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
