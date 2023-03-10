import { useRef } from "react";
import TrendList from "../trendList";
import "./index.css";

const SideTrends = () => {
  const sideTrendsRef = useRef(null);

  return (
    <div
      className="SideTrends"
      ref={sideTrendsRef}
      onScroll={() =>
        sideTrendsRef.current.scrollTop >= 1
          ? (sideTrendsRef.current.style.transform = "translateY(-500px)")
          : (sideTrendsRef.current.style.transform = "translateY(0)")
      }
    >
      <div className="SideTrends__title">
        <h1>TRENDS PER TE</h1>
      </div>
      <TrendList />
    </div>
  );
};

export default SideTrends;
