import React from "react";
import { createStore } from "redux";
import { combineReducers } from "redux";
import { ADD_ANSWER } from "./types";

const initialState = {
  0: [],
  1: [],
  2: [],
  3: [],
  4: [],
  5: [],
  6: [],
};

const answers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ANSWER:
      let newState = state;
      newState[action.payload.question].push(action.payload.answer);
      if (newState[action.payload.question].length > 5) {
        newState[action.payload.question].shift();
      }
      return newState;
    default:
      return state;
  }
};

const Reducers = combineReducers({ answers });

export default createStore(Reducers);
