import {
  SOCKETS_CONNECTING,
  SOCKETS_DISCONNECTING,
  SOCKETS_MESSAGE_SENDING,
  SOCKETS_MESSAGE_RECEIVING
} from "../constants";

export function connectToTheServer() {
  console.log("connectToTheServer");
  const action = {
    type: SOCKETS_CONNECTING,
    callAPI: "http://localhost:4001"
  };

  return action;
}

export function disconnectToTheServer() {
  const action = {
    type: SOCKETS_DISCONNECTING
  };

  return action;
}
