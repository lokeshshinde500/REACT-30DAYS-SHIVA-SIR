import React from "react";
import { LOGIN } from "./ActionTypes";

export default function Reducer(state, action) {
  switch (action.type) {
    case LOGIN:
      return { ...state, isAuth: true, token: action.payload };
      break;
    default:
      return state;
      break;
  }
}
