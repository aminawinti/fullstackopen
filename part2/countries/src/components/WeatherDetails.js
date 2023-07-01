import { useEffect, useState } from 'react';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

const WeatherDetails = ({ capital }) => {
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${capital}&units=metric&appid=${API_KEY}`
      )
      .then((response) => {
        setWeather(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {weather.main && (
        <div>
          <h2>Weather in {capital}</h2>
          <div>Temperature {weather.main.temp}°C</div>
          <img
            alt="weather icon"
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          />
          <div>Wind {weather.wind.speed} m/s</div>
        </div>
      )}
    </>
  );
};

export default WeatherDetails;
