import React, { Component } from "react";
import { connect } from "react-redux";
import { sendMessage } from "../../AC";
import { makeid } from "../../utils";

class AddComment extends Component {
  state = { value: "", name: "" };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.sendMessage(this.state.name, this.state.value, makeid(10));
    this.setState({ value: "" });
  };

  render() {
    return (
      <form className="form-inline" onSubmit={this.handleSubmit}>
        <label className="sr-only" for="inlineFormInputGroupUsername2">
          Username
        </label>
        <div className="input-group mb-2 mr-sm-2 mb-sm-0">
          <div className="input-group-addon">@</div>
          <input
            type="text"
            className="form-control"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder="Username"
          />
        </div>

        {/* <div className="form-check mb-2 mr-sm-2 mb-sm-0">
          <label className="form-check-label">
            <input className="form-check-input" type="checkbox" /> Remember me
          </label>
        </div> */}
        <label className="sr-only" for="inlineFormInputName2">
          Text
        </label>
        <input
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
