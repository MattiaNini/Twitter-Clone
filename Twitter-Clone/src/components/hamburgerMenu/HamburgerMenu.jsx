import MenuContent from "../menuContent";
import "./index.css";

const HamburgerMenu = ({ showMenu }) => {
  return (
    <div className={`hamburger ${showMenu ? "show" : ""} `}>
      <MenuContent />
    </div>
  );
};

export default HamburgerMenu;
