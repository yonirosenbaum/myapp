import React from "react";
import FormDisplay from "../Components/formDisplay";

const mutipleOf10 = ({ number }) => {
  const divisible = number % 10;
  const isDivisible = divisible === 0 ? true : false;

  console.log("multipl", isDivisible && number !== 0 ? true : false);
  const params = [number];
  const result = isDivisible && number !== 0 ? true : false;
  return <div>{FormDisplay(params, result)}</div>;
};

export default mutipleOf10;
