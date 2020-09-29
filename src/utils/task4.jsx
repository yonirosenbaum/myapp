import React from "react";

const triangleArea = ({ side1, side2, side3 }) => {
  const p = (side1 + side2 + side3) / 2;
  const area = Math.sqrt(p * (p - side1) * (p - side2) * (p - side3));
  console.log(area);
  return area;
};

export default triangleArea;
