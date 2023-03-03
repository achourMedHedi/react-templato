import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Testing from "./components/Testing";
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomePage from "./pages/home";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className=" text-red-s500">
      <HomePage />
    </div>
  );
}

export default App;
