import React from "react";
import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary";
import Footer from "./components/Footer";
import Header from "./components/Header";

// Error boundary for whole app for chaching error and display fall back ui along with header and footer

function App() {
  return (
    <ErrorBoundary>
      <Header />

      <Footer />
    </ErrorBoundary>
  );
}

export default App;
