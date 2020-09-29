import React from "react";
import FormDisplay from "../Components/formDisplay";
import formDisplay from "../Components/formDisplay";

const lessThan1000 = (first, second, third) => {
  const sum = first + second + third;
  const result = sum < 1000 && sum > 0 ? "true" : "false";
  const params = [first, second, third];
  return result;
};

export default lessThan1000;
