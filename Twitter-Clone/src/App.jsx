import { useState, useEffect } from "react";
import Button from "./components/button";
import Content from "./components/content";
import SideTrends from "./components/sideTrends";
import Modal from "./components/modal";
import SideMenu from "./components/sideMenu";
import "./App.css";

function App() {
  const [isModalVisibile, setModalVisibility] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log(window.pageXOffset);
    }
  });

  return (
    <div className="App">
      <SideMenu setModalVisibility={setModalVisibility} />
      <Content />
      <SideTrends />

      {isModalVisibile && <Modal setModalVisibility={setModalVisibility} />}
    </div>
  );
}

export default App;
