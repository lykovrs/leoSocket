import React, { Component } from "react";
import { connect } from "react-redux";

/**
 * Компонент карточки товара
 * @type {Object}
 */
class Product extends Component {
  /**
   * render
   * @return {ReactElement} разметка
   */
  render() {
    if (!this.props.product) return null;

    const { name, id, description, img } = this.props.product;

    return (
      <div key={id} className="card bg-dark text-white">
        <img className="card-img" src={img} alt="product" />
        <div className="card-img-overlay">
          <h4 className="card-title">{name}</h4>
          <p className="card-text">{description}</p>
        </div>
      </div>
    );
  }
}

export default connect(state => {
  return {
    product: state.product.active
  };
}, {})(Product);
