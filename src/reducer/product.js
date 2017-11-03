import { Record } from "immutable";

import { SOCKETS_PRODUCT_RECEIVING } from "../constants";

const defaultState = new Record({ active: null });

export default (state = new defaultState(), action) => {
  const { type, payload } = action;
  switch (type) {
    case SOCKETS_PRODUCT_RECEIVING:
      const { product } = payload;
      return state.set("active", JSON.parse(product));

    default:
      return state;
  }
};
