import React, { Fragment, Component } from "react";
import "./MiniCart.css";
import cartLogo from "../images/cart.png";
import Cart from "./Cart";

class MiniCart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isClicked: false,
    };
  }

  handlePopupClick() {
    this.setState({ isClicked: !this.state.isClicked });
  }

  render() {
    let badgeNum = 0;
    if (this.props.MyBag.length > 0) {
      badgeNum = this.props.MyBag.length;
    }

    return (
      <Fragment>
        <Fragment>
          <span onClick={() => this.handlePopupClick()}>
            <img className="cartImg" src={cartLogo} alt="cart logo text" />
            <span className="cartImg badge">{badgeNum}</span>
          </span>
        </Fragment>
        <CartOverLay
          MyBag={this.props.MyBag}
          onAdd={this.props.onAdd}
          onRemove={this.props.onRemove}
          isClicked={this.state.isClicked}
          handlePopupClick={() => this.handlePopupClick()}
          currencySymbol={this.props.currencySymbol}
          SelectedCurrency={this.props.SelectedCurrency}
          SPEC={this.props.SPEC}
          shelter={this.props.shelter}
        />
      </Fragment>
    );
  }
}

class CartOverLay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
    };
  }

  handlePopupClick() {
    this.setState({ isClicked: !this.state.isClicked });
  }

  render() {
    // let CURR = "USD";

    let CURR = this.props.SelectedCurrency;
    let symbol = this.props.currencySymbol;

    let thisARR = this.props.MyBag.map(
      (item) => item.prices.filter((x) => x.currency === CURR)[0].amount
    );

    let thisArrSUM = 0;
    if (thisARR.length > 0) {
      thisArrSUM = thisARR.reduce((result, number) => result + number);
    }

    return this.props.isClicked ? (
      <div className="allWrapper">
        <div className="myBagMC">My Bag: {this.props.MyBag.length} items</div>
        <div className="cartWrapper">
          {this.props.MyBag.filter((x, i, a) => a.indexOf(x) === i).map(
            (filtered) => (
              <Fragment key={filtered.id}>
                <div className="cartWrapper">
                  <hr className="lineRC" />
                  {/* <div className="productBrand">{filtered.brand}</div> */}
                  <div className="productBrand">{filtered.brand}</div>
                  <div className="productName">{filtered.name}</div>
                  <div className="trioBtnNum">
                    {/* <div className="plusBTN"> */}
                    <button
                      className="plusBTN"
                      onClick={() => this.props.onAdd(filtered)}
                    >
                      +
                    </button>
                    {/* </div> */}
                    <div className="itemCounter">
                      {
                        this.props.MyBag.filter(
                          (element) => element === filtered
                        ).length
                      }
                    </div>
                    {/* <div className="minusBTN"> */}
                    <button
                      className="minusBTN"
                      onClick={() => this.props.onRemove(filtered)}
                    >
                      -
                    </button>
                    {/* </div> */}
                  </div>

                  <img
                    className="cartIcon"
                    src={filtered.gallery[0]}
                    alt="cart icon not text"
                  />

                  {/* <div className="cartImg">
                  <img src={filtered.gallery[0]} alt="Photo.png" />
                </div> */}

                  <div className="itemPrice">
                    {symbol}{" "}
                    {
                      filtered.prices.filter((x) => x.currency === CURR)[0]
                        .amount
                    }
                  </div>
                </div>
                {filtered.attributes.map((attribute) => {
                  return attribute.type === "text" ? (
                    <Fragment key={attribute.ProductId}>
                      <div className="attributeContainer">
                        <div className="attributeTitle">{attribute.name}</div>
                        {attribute.items.map((item) => (
                          <div
                            className="attributeContainerItems"
                            key={item.id}
                          >
                            {item.value}
                          </div>
                        ))}
                      </div>
                    </Fragment>
                  ) : (
                    <Fragment key={attribute.ProductId}>
                      <div className="attributeContainer">
                        <div className="attributeTitle">{attribute.name}</div>
                        {attribute.items.map((item) => (
                          <div
                            key={item.id}
                            className="swatchBoxGrid"
                            style={{ background: item.value }}
                          >
                            {/* {item.value} */}
                          </div>
                        ))}
                      </div>
                    </Fragment>
                  );
                })}
              </Fragment>
            )
          )}
        </div>
        <div className="totalAmount">
          <div className="amountTitle">Total</div>
          <div className="amountPrice">
            {symbol} {Math.floor(thisArrSUM)}
          </div>
        </div>
        <div className="buttonManagment">
          <button
            className="viewBagBTN"
            onClick={() => this.handlePopupClick()}
          >
            view bag
          </button>

          <button
            className="checkOutBTN"
            onClick={() => this.props.handlePopupClick()}
          >
            check out
          </button>
        </div>
        <Cart
          isClicked={this.state.isClicked}
          handlePopupClick={() => this.handlePopupClick()}
          onAdd={this.props.onAdd}
          onRemove={this.props.onRemove}
          currencySymbol={this.props.currencySymbol}
          SelectedCurrency={this.props.SelectedCurrency}
          MyBag={this.props.MyBag}
        />
      </div>
    ) : (
      ""
    );
  }
}

export default MiniCart;
