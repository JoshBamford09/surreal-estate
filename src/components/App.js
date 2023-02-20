import React from "react";
import { Route, Routes } from "react-router-dom";
import "../styles/app.css";
import NavBar from "./Navbar";
import Properties from "./Properties";
import AddProperties from "./AddProperties";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Properties />} />
        <Route path="/add-properties" element={<AddProperties />} />
      </Routes>
    </div>
  );
};

export default App;
