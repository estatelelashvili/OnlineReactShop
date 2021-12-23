import "./index.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { Component } from "react";

import ProductList from "./ProductList";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="wrapper">
          <ProductList />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
