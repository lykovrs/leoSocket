import {
  SOCKETS_CONNECTING,
  SOCKETS_MESSAGE_SENDING,
  LIKE_COMMENT
} from "../constants";

export function connectToTheServer() {
  console.log("connectToTheServer");
  const action = {
    type: SOCKETS_CONNECTING,
    callAPI: "http://localhost:4001"
  };

  return action;
}

export function sendMessage(name, text, id) {
  const action = {
    type: SOCKETS_MESSAGE_SENDING,
    payload: {
      message: {
        name,
        text,
        id
      }
    }
  };

  return action;
}

export function likeComment(id, step) {
  const action = {
    type: LIKE_COMMENT,
    payload: {
      id,
      step
    }
  };

  return action;
}
