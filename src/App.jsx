import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import DisplayData from "./components/DisplayData";
import Buttons from "./components/Buttons";

function App() {
  return (
    <>
      <DisplayData />
      <Buttons />
    </>
  );
}

export default App;
