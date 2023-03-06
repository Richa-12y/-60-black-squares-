import React, { useEffect, useState } from "react";

const BlackSquare = () => {
  const [square, setSquare] = useState(Array(60).fill(false));
  const [whiteSquare, setWhiteSquare] = useState(new Set());

  //create logic here
  useEffect(() => {
    let intervalId = setInterval(() => {
      if (whiteSquare.size === square.length) {
        setWhiteSquare(new Set());
      } else {
        let randomeIndex;
        do {
          randomeIndex = Math.floor(Math.random() * square.length);
        } while (whiteSquare.has(randomeIndex));
        setWhiteSquare(new Set([...whiteSquare, randomeIndex]));
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, [whiteSquare, square.length]);
  //create blacksquare
  const randomeSquare = square.map((_, i) => (
    <div
      key={i}
      style={{
        width: 30,
        height: 30,
        backgroundColor: whiteSquare.has(i) ? "white" : "black",
        display: "inline-block",
        margin: 2,
      }}
    />
  ));
  //create rows
  const rows = [];
  for (let i = 0; i < randomeSquare.length; i += 6) {
    rows.push(
      <div key={i} style={{ display: "flex" }}>
        {randomeSquare.slice(i, i + 6)}
      </div>
    );
  }
  return (
    <div>
      BlackSquare
      <div>{rows}</div>
    </div>
  );
};

export default BlackSquare;
