import React from "react";
import { ADD_ANSWER } from "./types";

const addAnswer = (question, answer) => {
  console.log(question, answer);
  return {
    type: ADD_ANSWER,
    payload: {
      question,
      answer,
    },
  };
};

export { addAnswer };
