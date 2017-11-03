import { combineReducers } from "redux";
import product from "./product";
import comments from "./comments";

/**
 * Подключение редьюсеров
 */
export default combineReducers({
  product,
  comments
});
