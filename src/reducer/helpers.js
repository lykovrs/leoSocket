import { Record, List } from "immutable";

export const DefaultReducerState = new Record({
  connected: false,
  messages: new List([])
});
