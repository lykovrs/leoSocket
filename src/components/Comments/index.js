import React, { Component } from "react";
import { connect } from "react-redux";

class Comments extends Component {
  render() {
    const { messages } = this.props;
    const messageNodes = messages.map(item => {
      return (
        <div key={item.id}>
          <b>{item.name}:</b> {item.text}
        </div>
      );
    });
    return <div>{messageNodes}</div>;
  }
}

export default connect(state => {
  console.log(state);
  return {
    messages: state.comments.messages
    // loading: state.articles.isLoading
  };
}, {})(Comments);
