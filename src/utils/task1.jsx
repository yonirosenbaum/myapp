import React from "react";
import FormDisplay from "../Components/formDisplay";
import formDisplay from "../Components/formDisplay";

const lessThan1000 = ({ first, second, third }) => {
  const sum = first + second + third;
  const truth = sum < 1000 ? "true" : "false";
  const params = [first, second, third];
  const result = truth;
  return <div>{formDisplay(params, result)}</div>;
};

export default lessThan1000;
