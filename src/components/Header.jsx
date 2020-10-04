import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import BarGraph from "./BarGraph";

import LineGraph from "./LineGraph";
import SearchBar from "./SearchBar";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="http://localhost:3000">
            Botsync
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/hourly">
                  Hourly
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/daily">
                  Daily
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/" component={SearchBar} />

          <Route exact path="/hourly" component={LineGraph} />

          <Route exact path="/daily" component={BarGraph} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
