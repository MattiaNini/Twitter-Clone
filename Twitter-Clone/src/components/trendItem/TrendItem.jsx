import "./index.css";

const TrendItem = ({ data }) => {
  return (
    <div>
      <h3>{data.trendLoc}</h3>
      <h1>{data.trendHt}</h1>
      <p>{data.text}</p>
    </div>
  );
};

export default TrendItem;
