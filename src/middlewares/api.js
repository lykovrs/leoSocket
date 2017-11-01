import socketIOClient from "socket.io-client";

export default store => next => action => {
  if (!action.callAPI) return next(action);

  const socket = socketIOClient(action.callAPI);
  const { callAPI, type, ...rest } = action;
  console.log("mid => ", callAPI);
  socket.on("messages init", messages => {
    next({ ...rest, type: type, payload: { messages } });
  });
};
