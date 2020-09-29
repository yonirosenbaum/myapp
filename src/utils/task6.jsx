import React from "react";

const returnRepeatStrings = ({ stringArray }) => {
  let validStrings = [];
  stringArray.filter((string) => {
    const splitString = string.split("");
    console.log(splitString);
    splitString.filter((character, index) => {
      if (index !== 0 && character[index] !== character[0]) {
        console.log(character, "chacrater different");
      }
      return;
    });
  });
  console.log(validStrings);
  return validStrings;
};

export default returnRepeatStrings;
