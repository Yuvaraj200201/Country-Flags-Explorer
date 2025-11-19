import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import CountryList from "./pages/CountryList";
import CountryDetails from "./pages/CountryDetails";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<CountryList />} />
          <Route path="/country/:name" element={<CountryDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
