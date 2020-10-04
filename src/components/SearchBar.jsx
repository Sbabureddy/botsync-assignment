import React, { Fragment, useState } from "react";

import Weather from "./Weather";

export default function SearchBar() {
  const [city, setCity] = useState(""); // storing city name to fetch  user choosen city weather
  const [cityName, setCityName] = useState(""); // getting city name after form submitting
  const [lat, setLat] = useState(12.9716); // default lat for banglore location
  const [lng, setLng] = useState(-77.5946); // default lng for banglore location
  const handleChange = (e) => {
    setCity(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // convert user entered city into latitude and longitutde
    fetch(
      `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=${process.env.REACT_APP_GEO_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setLat(data.results[0].geometry.lat);
        setLng(data.results[0].geometry.lng);
        setCityName(data.results[0].formatted.split(",")[0]);
      });
  };
  return (
    <Fragment>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <section className="form-group">
            <label htmlFor="search">Find Your City Weather</label>
            <input
              type="search"
              className="form-control"
              id="search"
              aria-describedby="searchHelp"
              name="search"
              value={city}
              onChange={handleChange}
              placeholder="Search City Name, ex: London"
            />
          </section>
          <button type="submit" className="btn btn-primary btn-lg">
            Submit
          </button>
        </form>
      </div>
      {/* to dispaly weather data of user city  */}
      <Weather lat={lat} lng={lng} city={cityName} />
    </Fragment>
  );
}
