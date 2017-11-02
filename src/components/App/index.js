import React, { Component } from "react";
import logo from "./logo.svg";
import "./style.css";
import { connect } from "react-redux";
import { connectToTheServer } from "../../AC";
import Product from "../Product";
import Comments from "../Comments";
import AddComment from "../AddComment";

class App extends Component {
  componentDidMount() {
    this.props.connectToTheServer();
  }

  render() {
    console.log("rnd");
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div class="container-fluid">
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>

          <Product />
          <Comments />
          <AddComment />
        </div>

        {/* <div style={{ textAlign: "center" }}>
          <button onClick={() => this.send()}>Change Color</button>
        </div> */}
      </div>
    );
  }
}

export default connect(null, { connectToTheServer })(App);
