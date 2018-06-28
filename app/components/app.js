"use strict";
import React from "react";

import Popular from "./popular";

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        Sup world
        <Popular />
      </div>
    );
  }
}

// alternate way to export component
// module.exports = App;
