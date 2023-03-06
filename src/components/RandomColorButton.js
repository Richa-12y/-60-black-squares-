import React, { useState } from "react";

const RandomColorButton = () => {
  const [number, setNumber] = useState(0);
  const [buttonColor, setButtonColor] = useState("#000000");

  const handleClick = () => {
    setNumber(number + 3);
    const randmorColor = `#${Math.floor(Math.random() * 16777215).toString(
      16
    )}`;
    setButtonColor(randmorColor);
  };
  const ButtonStyle = {
    backgroundColor: buttonColor,
    color: "#ffffff",
    fontSize: "24px",
    padding: "10px",
    width: "150px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
  };
  return (
    <div>
      <h1>
        when clicked, the number will increase by 3 and the button's color will
        change randomly
      </h1>
      <button style={ButtonStyle} onClick={handleClick}>
        {number}
      </button>
    </div>
  );
};

export default RandomColorButton;
