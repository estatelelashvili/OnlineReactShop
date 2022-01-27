import React, { Component } from "react";
import ProductCard from "./ProductCard";
import "./ProductsView.css";

export class CategoryView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.data,
      openedMessage: false,
      itemsToShow: 6,
      expanded: false,
      btnTXT: "show more...",
      arrowClassName: "arrow down",
    };
  }

  showMore() {
    this.state.itemsToShow === 6
      ? this.setState({
          itemsToShow: 8,
          expanded: true,
          btnTXT: "show less...",
          arrowClassName: "arrow up",
        })
      : this.setState({
          itemsToShow: 6,
          expanded: false,
          btnTXT: "show more...",
          arrowClassName: "arrow down",
        });
  }

  render() {
    const [firstArr, secondArr] = this.props.data.map(
      ({ name, products }) =>
        products.map((product) => {
          return product;
        })
    );

    let mergedX = firstArr.concat(secondArr);

    if (this.props.categoryName === "all") {
      return (
        <div className="cards_wrap">
          {mergedX.slice(0, this.state.itemsToShow).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              MyBag={this.props.MyBag}
              onAdd={this.props.onAdd}
              onRemove={this.props.onRemove}
              SelectSpec={this.props.SelectSpec}
              HandleProps={this.props.HandleProps}
              currencySymbol={this.props.currencySymbol}
              SelectedCurrency={this.props.SelectedCurrency}
            />
          ))}
          <div className="main" id="section1">
            <a href="#section2" onClick={() => this.showMore()}>
              {this.state.btnTXT}
            </a>
            <p>
              <i className={this.state.arrowClassName}></i>
            </p>
          </div>
          <div className="main" id="section2">
            <a href="#section1" onClick={() => this.showMore()}>
              {""}
            </a>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="cards_wrap">
            {mergedX
              .filter((product) => product.category === this.props.categoryName)
              .map((filteredProduct) => (
                <ProductCard
                  key={filteredProduct.id}
                  product={filteredProduct}
                  MyBag={this.state.MyBag}
                  onAdd={this.props.onAdd}
                  onRemove={this.props.onRemove}
                  HandleProps={this.props.HandleProps}
                  currencySymbol={this.props.currencySymbol}
                  SelectedCurrency={this.props.SelectedCurrency}
                />
              ))}
          </div>
        </div>
      );
    }
  }
}

export default CategoryView;
