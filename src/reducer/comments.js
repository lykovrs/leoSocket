import { DefaultReducerState } from "./helpers";
import { Record, List } from "immutable";

import {
  SOCKETS_CONNECTING,
  SOCKETS_DISCONNECTING,
  SOCKETS_MESSAGE_SENDING,
  SOCKETS_MESSAGE_RECEIVING,
  START,
  SUCCESS,
  FAIL
} from "../constants";

const defaultState = new DefaultReducerState();

export default (state = defaultState, action) => {
  console.log(state);
  const { type, payload, randomId } = action;
  switch (type) {
    case SOCKETS_CONNECTING + SUCCESS:
      console.log(SOCKETS_CONNECTING + SUCCESS, payload);
      return state.set("connected", true).set("socket", payload.socket);

    case SOCKETS_CONNECTING + FAIL:
      return state.set("connected", false);

    case SOCKETS_MESSAGE_SENDING:
      state.socket.emit("message send", JSON.stringify(payload.message));
      return state;

    case SOCKETS_MESSAGE_RECEIVING:
      console.log("SOCKETS_MESSAGE_RECEIVING =>>>", payload);
      return state.setIn(["messages"], JSON.parse(payload.messages));

    default:
      return state;
  }
};
