import { Record, Map } from "immutable";

// Состояние по-умолчанию для комментариев
export const DefaultCommentsState = new Record({
  connected: false,
  socket: null,
  messages: new Map({})
});

// Состояние по-умолчанию для карточки продукта
export const DefaultProductState = new Record({ active: null });
