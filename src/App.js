import { Component } from "react";
import Main from "./components/Main";
import data from "./data";

class App extends Component {
  render() {
    return (

        <Main data={data}/>

    );
  }
}

export default App;
