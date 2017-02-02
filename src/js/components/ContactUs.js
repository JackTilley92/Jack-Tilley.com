import React from "react";

import Title from "./Header/Title";

export default class ContactUs extends React.Component {
  handleChange(e) {
    const title = e.target.value;
    this.props.changeTitle(title);
  }

  render() {
    return (
      <div>
        <h1>Contact Us</h1>
      </div>
    );
  }
}
