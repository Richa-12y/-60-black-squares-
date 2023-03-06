import React, { useState } from "react";

const LetterList = () => {
  const [words, setWords] = useState(["Hello", "There", "", "", "", ""]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    const newWords = [...words];
    const lastLetter = inputValue[inputValue.length - 1];
    newWords.shift();
    newWords.push(lastLetter + words[0].slice(1));
    setWords(newWords);
    setInputValue("");
  };

  const listItemStyle = {
    fontSize: "24px",
    listStyleType: "none",
    margin: "8px",
    padding: "8px",
    border: "1px solid #000000",
    borderRadius: "8px",
  };

  return (
    <div>
      <ul>
        {words.map((word, index) => (
          <li key={index} style={listItemStyle}>
            {word}
          </li>
        ))}
      </ul>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleButtonClick}>Add Letter</button>
    </div>
  );
};
export default LetterList;
