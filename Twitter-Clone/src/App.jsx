import { useEffect } from "react";
import Content from "./components/content";
import SideTrends from "./components/sideTrends";
import SideMenu from "./components/sideMenu";
import "./App.css";

function App() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log(window.pageXOffset);
    }
  });

  return (
    <div className="App">
      <SideMenu />
      <Content />
      <SideTrends />
    </div>
  );
}

export default App;
