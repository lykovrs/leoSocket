import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";
import Voter from "../Voter";

/**
 * Список комментариев к карточке товара
 * @type {Object}
 */
class Comments extends Component {
  /**
   * render
   * @return {ReactElement} разметка
   */
  render() {
    const { messages } = this.props;
    const messageNodes = messages.reverse().map(item => {
      const { name, id, text, timeStamp, likes } = item;
      let time = moment(timeStamp).format("MMMM Do YYYY, h:mm:ss a");
      return (
        <div
          key={id}
          className="list-group-item list-group-item-action flex-column align-items-start"
        >
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{name}:</h5>
            <small>{time}</small>
          </div>
          <p className="mb-1">{text}</p>
          <Voter id={id} likes={likes} />
        </div>
      );
    });
    return (
      <div className="App__comments">
        <div className="list-group">{messageNodes}</div>
      </div>
    );
  }
}

export default connect(state => {
  let messages = state.comments.messages.toIndexedSeq().toArray();
  return {
    messages
  };
}, {})(Comments);
