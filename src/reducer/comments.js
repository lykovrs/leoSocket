import { DefaultReducerState } from "./helpers";
import { Record, List } from "immutable";

import {
  SOCKETS_CONNECTING,
  SOCKETS_DISCONNECTING,
  SOCKETS_MESSAGE_SENDING,
  SOCKETS_MESSAGE_RECEIVING
} from "../constants";

const defaultState = new DefaultReducerState();

export default (state = defaultState, action) => {
  console.log(state);
  const { type, payload, randomId } = action;
  switch (type) {
    case SOCKETS_CONNECTING:
      console.log(SOCKETS_CONNECTING);
      return state.setIn(["messages"], JSON.parse(payload.messages));
    case SOCKETS_DISCONNECTING:
      return state;
    case SOCKETS_MESSAGE_SENDING:
      return state;
    case SOCKETS_MESSAGE_RECEIVING:
      return state;

    default:
      return state;
  }
};
