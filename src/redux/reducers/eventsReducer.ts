/* eslint-disable @typescript-eslint/no-explicit-any */
import { GET_ALL_EVENTS } from "../Constants";

const initialState = {
  events: [],
};

export default function (
  state = initialState,
  action: { type?: string; payload?: any }
) {
  switch (action.type) {
    case GET_ALL_EVENTS:
      return {
        ...state,
        events: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}
