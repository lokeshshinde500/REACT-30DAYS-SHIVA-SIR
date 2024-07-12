import { LOGIN } from "./ActionTypes";

export function login(payload) {
  return { type: LOGIN, payload: payload };
}
