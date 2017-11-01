import React, { Component } from "react";

class AddComment extends Component {
  render() {
    return (
      <div>
        {" "}
        <ul id="messages" />
        <form action="">
          <input id="m" />
          <button>Send</button>
        </form>
      </div>
    );
  }
}

export default AddComment;
