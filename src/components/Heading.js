import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

const Heading = () => {
  const inputToFoucuse = useRef(null);
  const [details, setDetails] = useState([]);
  const handleClick = () => {
    inputToFoucuse.current.focus();
  };
  //   const featchData = async () => {
  //     const { data } = await axios.get("https://fakestoreapi.com/users");
  //     setDetails(data);
  //     console.log(data);
  //   };
  //   useEffect(() => {
  //     featchData(details);
  //   }, []);
  return (
    <>
      <h1>Welcome to our Site.</h1>
      <div>
        <input ref={inputToFoucuse} type="text" placeholder="enter something" />
        <button onClick={handleClick}>+</button>
      </div>
    </>
  );
};
export default Heading;
