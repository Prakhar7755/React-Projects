import React, { useState } from "react";
import "./App.css";

const App = () => {
  let time = new Date().toLocaleString();

  const [currTime, setCurrTime] = useState(time);

  setInterval(() => {
    time = new Date().toLocaleString();
    setCurrTime(time);
  }, 1000);

  return (
    <>
      <h1>Your Local Time is : </h1>
      <h1>{currTime}</h1>
    </>
  );
};

export default App;
