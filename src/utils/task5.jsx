import React from "react";

const distanceBetweenPoints = ({ object1, object2 }) => {
  const xvalue1 = object1.x;
  const yvalue1 = object1.y;
  const xvalue2 = object2.x;
  const yvalue2 = object2.y;

  const xdistance = Math.abs(xvalue2 - xvalue1);
  const ydistance = Math.abs(yvalue2 - yvalue1);

  const finalDistance = Math.sqrt(
    Math.pow(xdistance, 2) + Math.pow(ydistance, 2)
  ).toFixed(4);
  console.log(finalDistance);
  return finalDistance;
};

export default distanceBetweenPoints;
