import { LOGIN } from "./ActionType";

export function login(payload) {
  return { type: LOGIN, payload: payload };
}
