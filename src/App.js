import React from "react";
// import { Line } from "react-chartjs-2";
import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary";
import Footer from "./components/Footer";
import Header from "./components/Header";

// fetch("https://api.openweathermap.org/data/2.5/forecast?id=524901&cnt=5&APPID=38a9649538adbdd22fa0080fa86876f9").then(res => res.json()).then(data => console.log(data))

// https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=12.9716&lon=-77.5946&dt=${date}&appid=38a9649538adbdd22fa0080fa86876f9

function App() {
  return (
    <ErrorBoundary>
      <Header />

      <Footer />
    </ErrorBoundary>
  );
}

export default App;
