import React, { Component } from "react";
import { connect } from "react-redux";

class Comments extends Component {
  render() {
    const { messages } = this.props;
    const messageNodes = messages.map(item => {
      return (
        <div
          key={item.id}
          className="list-group-item list-group-item-action flex-column align-items-start"
        >
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{item.name}:</h5>
            <small>3 days ago</small>
          </div>
          <p className="mb-1">{item.text}</p>
          {/* <small>Donec id elit non mi porta.</small> */}
        </div>
      );
    });
    return (
      <div>
        <div className="list-group">{messageNodes}</div>
      </div>
    );
  }
}

export default connect(state => {
  console.log("Comments ===>", state);
  return {
    messages: state.comments.messages
    // loading: state.articles.isLoading
  };
}, {})(Comments);
