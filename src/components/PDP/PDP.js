import React, { Component, Fragment } from "react";
import CarouselVertical from "../Carousel/CarouselVertical";
import "./PDP.css";

class PDP extends Component {
  render() {
    let CURR = this.props.SelectedCurrency;
    let symbol = this.props.currencySymbol;

    return this.props.isClicked ? (
      <div className="allWrapperPDP">
        <div className="close-btnPDP">
          <button
            className="close-btnPDP"
            onClick={() => this.props.handlePopupClick()}
          >
            X
          </button>
        </div>
        <div className="cartWrapperPDP">
          <div className="cartIconPDP">
            <CarouselVertical data={this.props.product.gallery} />
          </div>
          <div className="productBrandPDP">{this.props.product.brand}</div>
          <div className="productNamePDP">{this.props.product.name}</div>
          <div className="itemPricePDP">
            <p className="priceTagPDP">Price:</p>

            <p className="actualPricePDP">
              {symbol}
              {
                this.props.product.prices.filter((x) => x.currency === CURR)[0]
                  .amount
              }
            </p>
          </div>
          {this.props.product.attributes.map((attribute) => {
            return attribute.type === "text" ? (
              <Fragment key={attribute.ProductId}>
                <div className="attributeContainerPDP">
                  <p className="attributeTitlePDP">
                    <span>
                      {attribute.name}
                      {":"}
                    </span>
                  </p>
                  {attribute.items.map((item) => (
                    <div
                      className="attributeContainerItemsPDP"
                      key={item.value}
                    >
                      {item.value}
                    </div>
                  ))}
                </div>
              </Fragment>
            ) : (
              <Fragment key={attribute.ProductId}>
                <div
                  className="attributeContainerPDP"
                  key={attribute.ProductId}
                >
                  <div className="attributeTitlePDP" key={attribute.ProductId}>
                    <span>
                      {attribute.name}
                      {":"}
                    </span>
                  </div>

                  {attribute.items.map((item) => (
                    <div
                      key={item.value}
                      className="swatchBoxGridPDP"
                      style={{ background: item.value }}
                    ></div>
                  ))}
                </div>
              </Fragment>
            );
          })}
          <div
            className="dangerouslySetInnerHTML"
            dangerouslySetInnerHTML={{
              __html: this.props.product.description,
            }}
          />
          <div className="addBtnCPDP">
            <button
              className="addBtnPDP"
              onClick={() => this.props.onAdd(this.props.product)}
            >
              add to cart
            </button>
          </div>
        </div>
      </div>
    ) : (
      ""
    );
  }
}

export default PDP;
