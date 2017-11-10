import { SOCKETS_PRODUCT_RECEIVING } from "../constants";
import { DefaultProductState } from "./helpers";

const defaultState = new DefaultProductState();

export default (state = defaultState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SOCKETS_PRODUCT_RECEIVING:
      const { product } = payload;
      return state.set("active", JSON.parse(product));

    default:
      return state;
  }
};
