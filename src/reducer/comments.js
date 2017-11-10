import { DefaultReducerState } from "./helpers";
import { Map } from "immutable";

import {
  SOCKETS_CONNECTING,
  SOCKETS_MESSAGE_SENDING,
  SOCKETS_MESSAGE_RECEIVING,
  SUCCESS,
  FAIL,
  LIKE_COMMENT
} from "../constants";

const defaultState = new DefaultReducerState();

export default (state = defaultState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SOCKETS_CONNECTING + SUCCESS:
      const { socket } = payload;
      return state.set("connected", true).set("socket", socket);

    case SOCKETS_CONNECTING + FAIL:
      return state.set("connected", false);

    case SOCKETS_MESSAGE_SENDING:
      state.socket.emit("message send", JSON.stringify(payload.message));
      return state;

    case SOCKETS_MESSAGE_RECEIVING:
      return state.setIn(
        ["messages"],
        new Map(
          JSON.parse(payload.messages, function(key, value) {
            if (key == "timeStamp") return new Date(value);
            return value;
          })
        )
      );

    case LIKE_COMMENT:
      let { id, step } = payload;
      state.socket.emit("like comment", JSON.stringify({ id, step }));
      return state;

    default:
      return state;
  }
};
