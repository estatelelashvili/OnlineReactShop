import React, { Component } from "react";
import CustomButtonAll from "./CustomButtonAll";
import CategoryButtons from "./CategoryButtons";
import CurrencySwitcher from "./CurrencySwitcher";

import MiniCart from "../Cart/MiniCart";

export class Header extends Component {
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
    return (
      <div className="header">
        <CustomButtonAll
          handlePickCategory={(e) => this.props.handlePickCategory(e)}
        />
        <CategoryButtons
          data={this.props.data}
          handlePickCategory={(e) => this.props.handlePickCategory(e)}
        />
        <CurrencySwitcher
          data={this.props.data}
          isClicked={this.state.isClicked}
          handlePopupClick={() => this.handlePopupClick()}
          SelectCurrency={(e) => this.props.SelectCurrency(e)}
          currencySymbol={this.props.currencySymbol}
          SelectedCurrency={this.props.SelectedCurrency}
        />
        <MiniCart
          MyBag={this.props.MyBag}
          onAdd={this.props.onAdd}
          onRemove={this.props.onRemove}
          isClicked={this.state.isClicked}
          handlePopupClick={() => this.handlePopupClick()}
          SelectCurrency={(e) => this.props.SelectCurrency(e)}
          currencySymbol={this.props.currencySymbol}
          SelectedCurrency={this.props.SelectedCurrency}
        />
      </div>
    );
  }
}

export default Header;
