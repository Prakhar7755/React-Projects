import React, { useState } from "react";
import "./BMI.css";

const BMI = () => {
  const [age, setAge] = useState();
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [bmi, setBmi] = useState();
  const [msg, setMsg] = useState("");

  const reload = () => {
    window.location.reload();
  };

  const handleCalculations = (e) => {
    e.preventDefault();
    if (weight === 0 || height === 0) {
      alert("Hello please enter a valid number");
    } else {
      let bmiFormula = weight / (height * height);
      let newBmi = Math.floor(bmiFormula);
      setBmi(newBmi);

      if (newBmi < 18) {
        setMsg("Start Eating more!");
      } else if (newBmi > 18 && newBmi <= 25) {
        setMsg("You're Healthy!!");
      } else if (newBmi > 25 && newBmi <= 30) {
        setMsg("Doctor's Appointment in near...");
      } else if (newBmi > 30 && newBmi <= 35) {
        setMsg("Coffin for your size is too expensive");
      } else if (newBmi > 35) {
        setMsg("It's Official, You're a Burden on the Planet");
      }
    }
  };

  return (
    <div className="app">
      <div className="container">
        <h1 className="title">BMI Calculator</h1>

        <form onSubmit={handleCalculations}>
          <div>
            <label className="labels" htmlFor="age">
              Age :{" "}
            </label>
            <input
              className="bmi-inputs"
              id="age"
              type="number"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div>
            <label className="labels" htmlFor="weight">
              Weight(in kg) :{" "}
            </label>
            <input
              className="bmi-inputs"
              id="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              type="number"
              step="0.01"
              placeholder="Weight"
            />
          </div>
          <div>
            <label className="labels" htmlFor="height">
              Height (in m) :{" "}
            </label>
            <input
              className="bmi-inputs"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              id="height"
              type="number"
              step="0.01"
              placeholder="Height"
            />
          </div>

          <div className="btn-container">
            <button className="btn" type="submit" onClick={handleCalculations}>
              Calculate
            </button>

            <button className="btn  btn-reload" onClick={reload}>
              Reload
            </button>
          </div>
          <div className="result">
            <h3>Age :{age}</h3>
            <h3>Your BMI is: {bmi}</h3>
            <p className="p-msg">{msg}</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BMI;
