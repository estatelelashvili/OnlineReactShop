import React, { Fragment, Component } from "react";

class CustomButtonAll extends Component {
  render() {
    return (
      <Fragment>
        <ol>
          <li>
            <a
              href="#/All"
              onClick={(e) => this.props.handlePickCategory("all")}
            >
              all
            </a>
          </li>
        </ol>
      </Fragment>
    );
  }
}

export default CustomButtonAll;
