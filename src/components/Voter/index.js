import React, { Component } from "react";
import PropTypes from "prop-types";
import { likeComment } from "../../AC";
import { connect } from "react-redux";

class Voter extends Component {
  static get defaultProps() {
    return {
      likes: 0
    };
  }

  state = {
    disabled: false
  };

  static propTypes = {
    id: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired
  };
  render() {
    return (
      <div className="input-group w-50 ">
        <span className="input-group-btn">
          <button
            disabled={this.state.disabled}
            className="btn btn-secondary"
            onClick={this.unLike}
            type="button"
          >
            -
          </button>
        </span>
        <span className="input-group-addon">Likes: </span>
        <span className="input-group-addon">{this.props.likes}</span>

        <span className="input-group-btn">
          <button
            disabled={this.state.disabled}
            className="btn btn-secondary"
            onClick={this.like}
            type="button"
          >
            +
          </button>
        </span>
      </div>
    );
  }

  like = ev => {
    this.props.likeComment(this.props.id, 1);
    this.setState({ disabled: true });
  };

  unLike = ev => {
    this.props.likeComment(this.props.id, -1);
    this.setState({ disabled: true });
  };
}

export default connect(null, { likeComment })(Voter);
