import Navbar from "./Navbar";
import Logo from "../assets/img/logo.svg";
import ConvertPortable from "../components/ConvertPortable";

const Header = (props) => {
  const links = [
    {
      to: "/swap-react/",
      content: "Main",
    },
    {
      to: "top",
      content: "Top currency",
    },
  ];
  return (
    <header className="header">
      <div className="header__wrapper">
        <img src={Logo} alt="logo" className="header__logo logo" />
        <Navbar links={links} />
      </div>
      <div className="header__wrapper">
        <ConvertPortable />
      </div>
    </header>
  );
};

export default Header;
