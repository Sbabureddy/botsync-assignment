import React, { useEffect, useState } from "react";
import BarGraph from "./BarGraph";
import LineGraph from "./LineGraph";

import Spinner from "./Spinner";

function Weather({ city, lat, lng }) {
  const [current, setCurrent] = useState({}); //current weather stats
  const [currentWeather, setCurrentWeather] = useState([]); //current weather condition like description
  const [hourly, setHourly] = useState([]); // hourly city weatehr stats
  const [daily, setDaily] = useState([]); // daily city weather stats
  const [isLoading, setIsLoading] = useState(false); //loading indicatior state

  //function to fetch weathe data from open weather api
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

  // using lifecycle method in functional component
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
          <LineGraph name={city} hourly={hourly} />{" "}
          {/* component for  hourly data displayed in line chart with city name */}
          <BarGraph name={city} daily={daily} />{" "}
          {/* component for displaying daily data in barchat chart city name */}
        </section>
      )}
    </div>
  );
}

export default Weather;
