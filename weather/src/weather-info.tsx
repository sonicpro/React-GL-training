import React, { useState } from "react";
import { Day } from "./Interfaces/day";
import "./weather-info.css";
import WeatherDay from "./weather-day";

const WeatherInfo: React.FC<{days: Day[]}> = ({days}) => {
    const [day, setState] = useState<Day>(days[0]);
    const dayEventHandler = (day: Day) => setState(day);
    return (<>
    <header>
        <h2 className={day.weather}>Day {day.key}, weather: {day.weather}</h2>
    </header>
    <ul className="list-group">
        {days.map(d => <WeatherDay key={d.key.toString()} day={d} parentChannel={dayEventHandler}/>)}
    </ul>
    </>);
}

export default WeatherInfo;