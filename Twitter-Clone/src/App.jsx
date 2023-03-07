import Content from "./components/content";
import SideTrends from "./components/sideTrends";
import SideMenu from "./components/sideMenu";
import "./App.css";

function App() {
  return (
    <div className="App">
      <SideMenu />
      <Content />
      <SideTrends />
    </div>
  );
}

export default App;
