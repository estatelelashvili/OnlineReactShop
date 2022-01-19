import React, { Component, Fragment } from "react";
import Header from "./Header/Header";
import { Query } from "react-apollo";
import ProductsView from "./Product/ProductsView";
import GET_PRODUCTS from "./ApolloQuery";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      MyBag: [],
      isClicked: false,
      categoryName: "all",
      SelectedCurrency: "USD",
      currencySymbol: "$",
      SPEC: "",
      // SPEC: [],
      shelter: [],
    };
  }

  SelectCurrency(arg) {
    this.setState({
      SelectedCurrency: arg,

      currencySymbol:
        arg === "USD"
          ? "$"
          : arg === "AUD"
          ? "A$"
          : arg === "RUB"
          ? "₽"
          : arg === "GBP"
          ? "£"
          : arg === "JPY"
          ? "¥"
          : null,
    });
  }
  // SelectCurrency(arg) {
  //   this.setState({ SelectedCurrency: arg });
  // }

  HandleProps = (val1, val2) => {
    let varry = val1.attributes.map((attribute) =>
      attribute.items.filter((item) => item.value === val2)
    );

    this.setState({ shelter: varry });
  };

  // SelectSpec = (spec) => {
  //   let allProducts = [...this.state.SPEC];
  //   allProducts.push(spec);
  //   this.setState({ SPEC: spec });
  // };
  SelectSpec = (spec) => {
    this.setState({ SPEC: spec });
  };

  handleAddItem = (item) => {
    let allProducts = [...this.state.MyBag];
    ///something
    // let puki = item.attributes.map((attribute) => attribute.name);
    // let puki = item.attributes.map((attribute) => attribute.type);
    // let puki = item.attributes.map((attribute) => {
    //   return attribute.type;
    // });
    // let puki = item.attributes.map((attribute) =>
    //   attribute.items.map((item) => item.value)
    // );
    // puki = [item.id];
    // let puki2 = item.attributes;
    // console.log(item.attributes, "this is Add Item");
    // console.log(puki, "Now puki ID");
    ////rowItem is working good
    // item.name = item.brand;
    // console.log(item.id, "Now  ID");
    // console.log(puki, "puki");
    // console.log(puki[0], "puki");
    // console.log(puki2, "puki2");

    allProducts.push(item);
    this.setState({ MyBag: allProducts });
  };
  // handleAddItem = (item) => {
  //   let allProducts = [...this.state.MyBag];
  //   console.log(item, "this is Add Item");
  //   allProducts.push(item);
  //   this.setState({ MyBag: allProducts });
  // };

  // handleAddItemMOD = (item, modiParam) => {
  //   let allProducts = [...this.state.MyBag];
  //   let MODIFIED = item;
  //   allProducts.push(item);
  //   this.setState({ MyBag: allProducts });
  // };

  handleRemoveItem = (item) => {
    let allProducts = [...this.state.MyBag];
    let index = allProducts.indexOf(item);
    if (index > -1) {
      allProducts.splice(index, 1);
    }

    this.setState({ MyBag: allProducts });
  };

  handlePickCategory(item) {
    this.setState({ categoryName: item });
  }

  render() {
    // console.log(this.state.SPEC, "Good noght?");
    // console.log(this.state.MyBag, "show MyBAG!");
    // console.log(this.state.shelter, "Good Shelter");

    // switch (this.state.SelectedCurrency) {
    //   case "USD":
    //     this.state.currencySymbol = "$";
    //     break;
    //   case "AUD":
    //     this.state.currencySymbol = "A$";
    //     break;
    //   case "RUB":
    //     this.state.currencySymbol = "₽";
    //     break;
    //   case "GBP":
    //     this.state.currencySymbol = "£";
    //     break;
    //   case "JPY":
    //     this.state.currencySymbol = "¥";
    //     break;

    //   default:
    //     this.state.currencySymbol = "$";
    // }

    return (
      <Fragment>
        <Query query={GET_PRODUCTS}>
          {({ loading, error, data }) => {
            if (loading) return <h4>Loading...</h4>;
            if (error) console.log(error);

            return (
              <Fragment>
                <Header
                  data={data}
                  MyBag={this.state.MyBag}
                  handlePickCategory={(e) => this.handlePickCategory(e)}
                  onAdd={this.handleAddItem}
                  onRemove={this.handleRemoveItem}
                  SelectCurrency={(e) => this.SelectCurrency(e)}
                  currencySymbol={this.state.currencySymbol}
                  SelectedCurrency={this.state.SelectedCurrency}
                  SPEC={this.state.SPEC}
                  HandleProps={this.HandleProps}
                  shelter={this.state.shelter}
                />
                <div className="categoryName">{this.state.categoryName}</div>
                <ProductsView
                  data={data}
                  categoryName={this.state.categoryName}
                  MyBag={this.state.MyBag}
                  onAdd={this.handleAddItem}
                  onRemove={this.handleRemoveItem}
                  SelectCurrency={(e) => this.SelectCurrency(e)}
                  currencySymbol={this.state.currencySymbol}
                  SelectedCurrency={this.state.SelectedCurrency}
                  SelectSpec={this.SelectSpec}
                  SPEC={this.state.SPEC}
                  HandleProps={this.HandleProps}
                />
              </Fragment>
            );
          }}
        </Query>
      </Fragment>
    );
  }
}

export default Main;
