import {
  START,
  SUCCESS,
  FAIL,
  SOCKETS_MESSAGE_RECEIVING,
  SOCKETS_PRODUCT_RECEIVING
} from "../constants";
import socketIOClient from "socket.io-client";

export default store => next => action => {
  // Если action не содержит callAPI пропускаем как есть
  if (!action.callAPI) return next(action);

  const { callAPI, type, ...rest } = action;
  // Старт ссоединения с сервером
  next({ ...rest, type: type + START, connection: false });

  const socket = socketIOClient(callAPI);
  socket.on("connect", () => {
    next({
      ...rest,
      type: type + SUCCESS,
      connection: true,
      payload: { socket }
    });
  });
  // Получение данных продукта
  socket.on("get product", product => {
    next({
      ...rest,
      type: SOCKETS_PRODUCT_RECEIVING,
      payload: { product },
      connection: true
    });
  });
  // Получение комментариев
  socket.on("get messages", messages => {
    next({
      ...rest,
      type: SOCKETS_MESSAGE_RECEIVING,
      payload: { messages },
      connection: true
    });
  });
  // Потеря ссоединения
  socket.on("disconnect", () => {
    console.log("disconnect");
    next({ ...rest, type: type + FAIL, connection: false });
  });
};
