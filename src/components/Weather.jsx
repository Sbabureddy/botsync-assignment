import React, { useEffect, useState } from "react";
import BarGraph from "./BarGraph";
import LineGraph from "./LineGraph";

import Spinner from "./Spinner";

// fetch("https://api.openweathermap.org/data/2.5/forecast?id=524901&cnt=5&APPID=38a9649538adbdd22fa0080fa86876f9").then(res => res.json()).then(data => console.log(data))

// https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=12.9716&lon=-77.5946&dt=${date}&appid=38a9649538adbdd22fa0080fa86876f9

function Weather({ city, lat, lng }) {
  const [current, setCurrent] = useState({});
  const [currentWeather, setCurrentWeather] = useState([]);
  const [hourly, setHourly] = useState([]);
  const [daily, setDaily] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = () => {
    setIsLoading(true);
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&exclude=minutely,alerts&APPID=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        setCurrent(data.current);
        setCurrentWeather(data.current.weather[0]);
        setHourly(data.hourly);
        setDaily(data.daily);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <section className="container">
          <section className="card d-flex justify-content-center align-items-center text-center">
            <div className="card-body">
              <h2>
                Temperature: {current.temp} <sup>o</sup>C
              </h2>

              <h2>Humidity: {current.humidity}</h2>
              <h4>Description: {currentWeather.description}</h4>
              <h4>
                Date:
                {new Intl.DateTimeFormat("us-en", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                }).format(current.dt)}
              </h4>
              <h4>Time: {new Date(current.dt).toLocaleTimeString()}</h4>
            </div>
          </section>
          <LineGraph name={city} hourly={hourly} />
          <BarGraph name={city} daily={daily} />
        </section>
      )}
    </div>
  );
}

export default Weather;
