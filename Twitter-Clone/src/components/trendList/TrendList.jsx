import { useState, useEffect } from "react";
import TrendItem from "../trendItem";
import "./index.css";

const TrendList = () => {
  const arrayTrends = [
    {
      id: 1,
      trendLoc: "Trending in USA",
      trendHt: "#National Womens Day",
      text: "Respect and love womens every day",
    },
    {
      id: 2,
      trendLoc: "Trending in Ukraine",
      trendHt: "#Stop War",
      text: "We want freedom!",
    },
    {
      id: 3,
      trendLoc: "Trending in Russia",
      trendHt: "#We are not like Putin",
      text: "Real Russia does not support Putin!",
    },
    {
      id: 4,
      trendLoc: "Trending in Italy",
      trendHt: "#Stop Razzismo!",
      text: "Gli Italiani ripudiano ogni forma di razzismo!",
    },
    {
      id: 5,
      trendLoc: "Trending in Sweden",
      trendHt: "#Stop Pollution!",
      text: "Please, respect our planet!",
    },
  ];

  return (
    <div className="TrendList">
      {arrayTrends.map((item) => (
        <TrendItem data={item} key={item.id} />
      ))}
    </div>
  );
};

export default TrendList;
