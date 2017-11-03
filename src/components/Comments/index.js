import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";

class Comments extends Component {
  render() {
    const { messages } = this.props;
    const messageNodes = messages.map(item => {
      const { name, id, text, timeStamp } = item;

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
          {/* <small>Donec id elit non mi porta.</small> */}
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
  return {
    messages: state.comments.messages.reverse()
  };
}, {})(Comments);
