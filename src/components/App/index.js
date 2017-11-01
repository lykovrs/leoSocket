import React, { Component } from "react";
import logo from "./logo.svg";
import "./style.css";
import { connect } from "react-redux";
import { connectToTheServer, disconnectToTheServer } from "../../AC";
import Product from "../Product";
import Comments from "../Comments";
import AddComment from "../AddComment";

class App extends Component {
  constructor() {
    super();
  }

  // sending sockets
  send = () => {
    console.log("send");
  };

  ///

  render() {
    // testing for socket connections

    // const socket = socketIOClient(this.state.endpoint);
    // socket.on("change message", messages => {
    //   console.dir(JSON.parse(messages));
    // });
    this.props.connectToTheServer();
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p className="App-intro">
          <button onClick={this.props.connectToTheServer}>
            Conect to server
          </button>
          <button onClick={this.props.disconnectToTheServer}>
            Disonect to server
          </button>
        </p>
        <Product />
        <Comments />
        <AddComment />

        {/* <div style={{ textAlign: "center" }}>
          <button onClick={() => this.send()}>Change Color</button>
        </div> */}
      </div>
    );
  }
}

export default connect(null, { connectToTheServer, disconnectToTheServer })(
  App
);
