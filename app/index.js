import React from "react";
import ReactDOM from "react-dom";
require("./index.css");

class App extends React.Component {
  render() {
    return (
      <div>
        Changes appear
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));