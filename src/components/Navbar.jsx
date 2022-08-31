const Navbar = ({ links }) => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {links.map((link) => {
          return (
            <li key={link.href} className="navbar-list__item">
              <a href={link.href} className="navbar-list__link">
                {link.content}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
