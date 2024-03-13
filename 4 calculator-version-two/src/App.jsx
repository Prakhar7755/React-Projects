import styles from "./App.module.css";
import Display from "./components/Display";
import React, { useState } from "react";
import ButtonContainer from "./components/ButtonContainer";

export default function App() {


  // the logic behind a calculator
  const [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal); // pass a string and eval() method will evaluate it on its own
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal} />
      <ButtonContainer onButtonClick={onButtonClick} />
    </div>
  );
}
