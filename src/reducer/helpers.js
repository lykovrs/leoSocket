import { Record, List } from "immutable";

export const DefaultReducerState = new Record({
  connected: false,
  socket: null,
  messages: new List([])
});
