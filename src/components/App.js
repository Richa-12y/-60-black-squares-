import React, { Component, useEffect, useRef, useState } from "react";
import "../styles/App.css";
import Heading from "../components/Heading";
import InputQuery from "../components/InputQuery";
import BlackSquare from "./BlackSquare";

const App = () => {
  const previousState = useRef(null);
  const [name, setName] = useState("");

  const handleChange = (event) => {
    console.log(setName(event.target.value));
  };

  useEffect(() => {
    previousState.current = name;
  }, [name]);

  return (
    <div id="main">
      <p>Hello</p>
      <input
        type="text"
        placeholder="enter your name"
        value={name}
        onChange={handleChange}
      />
      <div>
        <div>Current value:{name}</div>
        <div>Previous value:{previousState.current}</div>
      </div>
      <Heading />
      <InputQuery />
      <BlackSquare />
    </div>
  );
};
export default App;
