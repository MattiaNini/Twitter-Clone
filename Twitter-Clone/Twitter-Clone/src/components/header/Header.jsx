import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import HamburgerMenu from "../hamburgerMenu";
import "./index.css";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const hamburgerTrigger = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="Header">
      <div className="TopBar">
        <img
          src="https://img.icons8.com/fluency/256/menu--v2.png"
          alt="hamburger"
          onClick={hamburgerTrigger}
        />
        <HamburgerMenu showMenu={showMenu} />
        <img
          src="https://img.icons8.com/tiny-color/256/twitter.png"
          alt="logoTw"
        ></img>
        <img
          src="https://img.icons8.com/material-sharp/256/sparkling.png"
          alt="sparkling"
        ></img>
      </div>
    </div>
  );
};

export default Header;
