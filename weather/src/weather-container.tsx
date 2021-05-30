import React from "react";
import { Day } from "./Interfaces/day";
import WeatherInfo from "./weather-info";

const WeatherContainer: React.FC<{days: Day[]}> = ({ days }) => {
    return (<WeatherInfo days={days} />);
}

export default WeatherContainer;