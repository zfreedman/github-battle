import React from "react";
import ReactDOM from "react-dom";
require("./index.css");

import Badge from "./badge";

class App extends React.Component {
  render() {
    return (
      <div>
        <Badge
          img="https://avatars0.githubusercontent.com/u/2933430?v=36s=460"
          name="Tyler Mcginnis"
          username="tylermcginnis"
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
