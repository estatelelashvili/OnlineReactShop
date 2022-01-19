import React, { Fragment, Component } from "react";
import "./Header.css";

class CategoryButtons extends Component {
  render() {
    return this.props.data.categories.map(({ name, products }) => (
      <Fragment key={name}>
        <ol>
          <li>
            <a
              href={`#/${name}`}
              key={name}
              onClick={(e) => this.props.handlePickCategory(name)}
            >
              {name}
            </a>
          </li>
        </ol>
      </Fragment>
    ));
  }
}
export default CategoryButtons;
