import React, { Component, Fragment } from "react";
import { gql } from "@apollo/client";
import { Query } from "react-apollo";
import ProductItem from "./ProductItem";
import "./index.css";

const GET_PRODUCTS = gql`
  query GetData {
    categories {
      name
      products {
        id
        name
        inStock
        gallery
        description
        category
        attributes {
          id
          name
          type
          items {
            displayValue
            value
            id
          }
        }
        prices {
          currency
          amount
        }
        brand
      }
    }
  }
`;

class ProductList extends Component {
  render() {
    return (
      <Fragment>
        <div className="header">Products</div>

        <Query query={GET_PRODUCTS}>
          {({ loading, error, data }) => {
            if (loading) return <h4>Loading...</h4>;
            if (error) console.log(error);

            return (
              <Fragment className="cards_wrap">
                {data.categories.map(({ name, products }) => (
                  <Fragment>
                    <p>
                      <a
                        style={{ color: "white", fontSize: "20px" }}
                        href=""
                        onClick=""
                      >
                        {name}
                      </a>
                    </p>
                    {products.map((product) => (
                      <ProductItem key={product.id} product={product} />
                    ))}
                  </Fragment>
                ))}
              </Fragment>
            );
          }}
        </Query>
      </Fragment>
    );
  }
}

export default ProductList;
