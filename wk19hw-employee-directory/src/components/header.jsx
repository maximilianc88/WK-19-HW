import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="header-title" id="head-title">
          {" "}
          <h2>Employee Directory</h2>
        </div>
      </header>
    );
  }
}

export default Header;