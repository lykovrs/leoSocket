import React from "react";

const Product = ({}) => (
  <div className="card bg-dark text-white">
    <img
      className="card-img"
      src="https://pix-media.priceonomics-media.com/blog/921/cicero_gradient.png"
      alt="Card image"
    />
    <div className="card-img-overlay">
      <h4 className="card-title">Card title</h4>
      <p className="card-text">
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </p>
      <p className="card-text">Last updated 3 mins ago</p>
    </div>
  </div>
);

export default Product;
