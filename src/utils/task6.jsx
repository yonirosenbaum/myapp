import React from "react";

const returnRepeatStrings = ({ stringArray }) => {
  let validString = [];
  stringArray.filter((string, index) => {
    const splitString = string.split("");
    for (let i = 0; i < splitString.length - 1; i++) {
      let prevCharactersEquals = 0;
      if (splitString[i + 1] !== splitString[i]) {
        break;
      }
      console.log(i, string);
      console.log(splitString.length);
      if (i == splitString.length - 2) {
        validString.push(splitString.join(""));
      }
    }
  });
  console.log(validString);
};

export default returnRepeatStrings;
