import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { Component } from "react";
import Main from "./components/Main";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Main />
      </ApolloProvider>
    );
  }
}

export default App;
