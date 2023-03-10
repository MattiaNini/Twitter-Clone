import { useState, useEffect } from "react";
import TrendItem from "../trendItem";
import "./index.css";

const TrendList = () => {
  const arrayTrends = [
    {
      id: 1,
      trendLoc: "Trending in USA",
      trendHt: "#NationalWomensDay",
      text: "Respect and love womens every day",
    },
    {
      id: 2,
      trendLoc: "Trending in Ukraine",
      trendHt: "#StopWar",
      text: "We want freedom!",
    },
    {
      id: 3,
      trendLoc: "Trending in Russia",
      trendHt: "#WearenotlikePutin",
      text: "Real Russia does not support Putin!",
    },
    {
      id: 4,
      trendLoc: "Trending in Italy",
      trendHt: "#StopRazzismo!",
      text: "Gli Italiani ripudiano ogni forma di razzismo!",
    },
    {
      id: 5,
      trendLoc: "Trending in Sweden",
      trendHt: "#StopPollution!",
      text: "Please, respect our planet!",
    },
    {
      id: 6,
      trendLoc: "Trending in Norway",
      trendHt: "#StopCacthing!",
      text: "Please, respect our sea!",
    },
    {
      id: 7,
      trendLoc: "Trending in Siria",
      trendHt: "#WeHateTerrorism!",
      text: "Stop killing people",
    },
    {
      id: 8,
      trendLoc: "Trending in England",
      trendHt: "#WedontlikeCharles",
      text: "God Save the Queen!",
    },
    {
      id: 9,
      trendLoc: "Trending in Space",
      trendHt: "#ElonMusk",
      text: "He's coming on Mars",
    },
    {
      id: 10,
      trendLoc: "Trending in Vatican City",
      trendHt: "#WelovePope",
      text: "Pope Francesco, we love you",
    },
    {
      id: 11,
      trendLoc: "Trending in France",
      trendHt: "#GaltierOut",
      text: "We Love PSG",
    },
    {
      id: 12,
      trendLoc: "Trending in Bruxelles",
      trendHt: "#NATO",
      text: "Peace",
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
