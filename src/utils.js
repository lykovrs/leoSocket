// import { Map } from "immutable";

/**
 * Генерирует уникальный id
 * @param  {[type]} num колличество симоволов в ключе
 * @return {[type]}     уникальный ключ
 */
export function makeid(num) {
  let text = "";
  let possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < num; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}
