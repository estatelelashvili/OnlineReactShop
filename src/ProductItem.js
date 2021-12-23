import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import "./index.css";

class ProductItem extends Component {
  render() {
    const {
      id,
      name,
      inStock,
      gallery,
      description,
      category: cat,
    } = this.props.product;

    return (
      <div className="cards_wrap">
        <div className="card_item">
          <div className="card_inner">
            <Fragment>
              {gallery.map((gal) => (
                <div>
                  <img
                    src={gal}
                    alt="can't find the image"
                    width="100"
                    height="100"
                  />
                </div>
              ))}
            </Fragment>
            <div className="productID_name">{id}</div>
            <div className="product_name">{name}</div>
            <div className="inStock">InStock: {inStock.toString()}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductItem;
