import React from "react";

const InputQuery = () => {
  const userDetails = [
    { useid: 1, firstName: "richa", lastName: "singh" },
    { useid: 2, firstName: "sanu", lastName: "singh" },
    { useid: 3, firstName: "bhanu", lastName: "singh" },
  ];

  return (
    <>
      <input placeHolder={"Enter your query here.."} />
    </>
  );
};
export default InputQuery;
