import React from "react";
import { Day } from "./Interfaces/day";

const WeatherDay: React.FC<{day: Day, parentChannel: (day: Day) => void}> = ({day, children, parentChannel}) =>
{
    return(
        <li className="list-group-item" onClick={() => parentChannel(day)}>Day {day.key}</li>
    );
}

export default WeatherDay;