import React, { Component } from "react";
import logo from "./logo.svg";
import "./style.css";
import { connect } from "react-redux";
import { connectToTheServer } from "../../AC";
import Product from "../Product";
import Comments from "../Comments";
import AddComment from "../AddComment";

class App extends Component {
  /**
   * Устанавливаем ссоединение с сервером перед рендером страницы
   * @return {Void}
   */
  componentDidMount() {
    this.props.connectToTheServer();
  }

  /**
   * render
   * @return {ReactElement} разметка
   */
  render() {
    return (
      <div className="App">
        <header className="App__header">
          <img src={logo} className="App__logo" alt="logo" />
          <h1 className="App__title">Welcome to React</h1>
        </header>
        <div className="App__container container-fluid">
          <h2>Product Card</h2>

          <Product />

          <h3>Comments</h3>
          <Comments />

          <h3>Add comment</h3>
          <div className="bd-example">
            <AddComment />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { connectToTheServer })(App);
