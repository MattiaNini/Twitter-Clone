import MenuContent from "../menuContent";
import { useState } from "react";
import "./index.css";

const SideMenu = () => {
  const [isActive, setActive] = useState(false);

  const showMessage = () => {
    setActive((prev) => !prev);
  };

  return (
    <div className="SideMenu">
      <MenuContent />
      <button>Tweet</button>
      {isActive ? <MenuContent /> : null}
    </div>
  );
};

export default SideMenu;
