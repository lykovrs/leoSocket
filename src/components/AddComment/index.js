import React, { Component } from "react";
import { connect } from "react-redux";
import { sendMessage } from "../../AC";
import { makeid } from "../../utils";

/**
 * Компонент добавления комментария
 * @type {Object}
 */
class AddComment extends Component {
  state = { value: "", name: "" };

  /**
   * Обработчик изменения состояния полей ввода
   * @param  {Event} event
   * @return {Void}
   */
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  /**
   * Отправка формы
   * @param  {Event} event
   * @return {Void}
   */
  handleSubmit = event => {
    event.preventDefault();
    this.props.sendMessage(this.state.name, this.state.value, makeid(10));
    this.setState({ value: "" });
  };

  /**
   * render
   * @return {ReactElement} разметка
   */
  render() {
    return (
      <form className="form-inline" onSubmit={this.handleSubmit}>
        <div className="input-group mb-2 mr-sm-2 mb-sm-0">
          <div className="input-group-addon">@</div>
          <input
            required
            type="text"
            className="form-control"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder="Username"
          />
        </div>

        <input
          required
          name="value"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          className="form-control mb-2 mr-sm-2 mb-sm-0"
        />

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

export default connect(null, { sendMessage })(AddComment);
