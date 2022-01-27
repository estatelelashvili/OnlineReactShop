import React, { Component } from "react";

import "./CurrencySwitcher.css";

class CurrencySwitcher extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
    };
  }

  change = (event) => {
    this.setState({ value: event.target.value });
    this.props.SelectCurrency(event.target.value);
  };

  render() {
    const [[firstArr]] = this.props.data.map(({ name, products }) =>
      products.map((product) =>
        product.prices.map((price) => {
          return price;
        })
      )
    );

    const currency_symbols = [
      { USD: "$" },
      { GBP: "£" },
      { AUD: "A$" },
      { JPY: "¥" },
      { RUB: "₽" },
    ];

    let MergedArray = currency_symbols.map((item, i) =>
      Object.assign({}, item, firstArr[i])
    );

    return (
      <form>
        <select
          className="currencySign"
          onChange={this.change}
          value={this.state.value}
        >
          {MergedArray.map((price) => (
            <option key={price.amount} value={price.currency}>
              {price[price.currency]} {price.currency}
            </option>
          ))}
          ;
        </select>
      </form>
    );
  }
}

export default CurrencySwitcher;
