import WeatherContainer from './weather-container';
import "./App.css";

function App() {
  return (
    <div>
      <WeatherContainer days={[ { key: 1, weather: "sunny" }, { key: 2, weather: "cloudy" }, { key: 3, weather: "rain" } ]} />
    </div>
  );
}

export default App;
