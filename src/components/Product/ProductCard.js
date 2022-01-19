import React, { Component } from "react";
import PDP from "../PDP/PDP";
import "./ProductsView.css";
import productLogo from "../images/cartBuy.png";

class ProductCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cartList: [],
      isClicked: false,
      OutOfStockCSS: false,
      clickControll: false,
    };
  }

  handlePopupClick() {
    this.setState({ isClicked: !this.state.isClicked });
  }

  render() {
    const product = this.props.product;
    let outOfStockTxt = "";
    let outOfStockID = "";
    let CURR = this.props.SelectedCurrency;
    let symbol = this.props.currencySymbol;

    if (!this.props.product.inStock) {
      outOfStockTxt = "out of stock";
      outOfStockID = "imageID";
    }

    return (
      <div className="card_item">
        <div className="card_inner">
          <div id={outOfStockID}>
            <img className="imgCard" src={product.gallery[0]} alt="oops..." />
            <p>{outOfStockTxt}</p>
          </div>

          <div className="cardNameN">{product.name}</div>
          <div className="cardPrice">
            {" "}
            {symbol}
            {product.prices.filter((x) => x.currency === CURR)[0].amount}
          </div>
          <div className="overlay"></div>
          <div className="button">
            <input
              type="image"
              src={productLogo}
              alt="Submit"
              width="28"
              height="28"
              onClick={() => this.handlePopupClick()}
            />
          </div>

          <div className="inStock">{product.prices.amount}</div>
        </div>

        <PDP
          product={product}
          isClicked={this.state.isClicked}
          handlePopupClick={() => this.handlePopupClick()}
          SelectSpec={this.props.SelectSpec}
          onAdd={this.props.onAdd}
          HandleProps={this.props.HandleProps}
          currencySymbol={this.props.currencySymbol}
          SelectedCurrency={this.props.SelectedCurrency}
        />
      </div>
    );
  }
}

export default ProductCard;
