import React from "react";

const isOdd = ({ number }) => {
  const divisible = number % 2;
  console.log("isodd", divisible === 0 && number > 1 ? true : false);
  return divisible === 0 && number > 1 ? true : false;
};

export default isOdd;
