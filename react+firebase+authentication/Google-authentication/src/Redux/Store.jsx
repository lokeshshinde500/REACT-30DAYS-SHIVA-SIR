import { legacy_createStore } from "redux";
import Reducer from "./Reducer";

const initialState = {
  isAuth: false,
  token: null,
};

export const store = legacy_createStore(Reducer, initialState);
console.log(store);
