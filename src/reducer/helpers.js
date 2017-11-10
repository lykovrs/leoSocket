import { Record, Map } from "immutable";

export const DefaultReducerState = new Record({
  connected: false,
  socket: null,
  messages: new Map({})
});
