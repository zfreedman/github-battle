import React from "react";
import {Link} from "react-router-dom";

export default class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <h1>GitHub Battle: Battle your friends...and stuff.</h1>
        <Link className="button" to="/battle">
          Battle
        </Link>
      </div>
    );
  }
}
