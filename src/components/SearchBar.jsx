import React, { Fragment, useState } from "react";

// import BarGraph from "./BarGraph";

// import LineGraph from "./LineGraph";
import Weather from "./Weather";

export default function SearchBar() {
  const [city, setCity] = useState("");
  const [cityName, setCityName] = useState("");
  const [lat, setLat] = useState(12.9716);
  const [lng, setLng] = useState(-77.5946);
  const handleChange = (e) => {
    setCity(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
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
      <Weather lat={lat} lng={lng} city={cityName} />
    </Fragment>
  );
}
