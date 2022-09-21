import Navbar from "./Navbar";
import Logo from "../assets/img/logo.svg";
import ConvertPortable from "../components/ConvertPortable";

const Header = (props) => {
  const links = [
    {
      href: "swap",
      content: "Swap",
    },
    {
      href: "cover",
      content: "Cover",
    },
    {
      href: "stake",
      content: "Stake",
    },
    {
      href: "claims",
      content: "Claims",
    },
  ];
  return (
    <header className="header">
      <div className="header__wrapper">
        <img src={Logo} alt="logo" className="header__logo logo" />
        <Navbar links={links} />
      </div>
      <div className="header__wrapper">
        <a href="#" className="header__auth-link">
          Login
        </a>
        <ConvertPortable />
      </div>
    </header>
  );
};

export default Header;
