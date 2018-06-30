import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import PlayerInput from "./playerInput";
import PlayerPreview from "./playerPreview";

export default class Battle extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
        player1Name: "",
        player2Name: "",
        player1Img: null,
        player2Img: null
      };

      this.handleReset = this.handleReset.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    let match = this.props.match;

    let player1Name = this.state.player1Name;
    let player2Name = this.state.player2Name;
    let player1Img = this.state.player1Img;
    let player2Img = this.state.player2Img;

    return (
      <div>
        <div className="row">
          {
            !player1Name &&
              <PlayerInput
                id="player1"
                label="Player 1"
                onSubmit={this.handleSubmit}
              />
          }
          {
            player1Img &&
              <PlayerPreview
                avatar={player1Img}
                name={player1Name}
                onReset={this.handleReset}
                id="player1"
              />
          }

          {
            !player2Name &&
              <PlayerInput
                id="player2"
                label="Player 2"
                onSubmit={this.handleSubmit}
              />
          }
          {
            player2Img &&
              <PlayerPreview
                avatar={player2Img}
                name={player2Name}
                onReset={this.handleReset}
                id={"player2"}
              />
          }
        </div>

        {
          player1Img && player2Img &&
            <Link
              className="button"
              to={
                {
                  pathname: match.url + "/results",
                  search: `?player1Name=${player1Name}&player2Name=${player2Name}`
                }
              }
            >
              Battle
            </Link>
        }
      </div>
    );
  }

  handleReset(id) {
    this.setState(function() {
      let newState = {};
      newState[id + "Name"] = "";
      newState[id + "Img"] = null;
      return newState;
    });
  }

  handleSubmit(id, name) {
    this.setState(function () {
      let newState = {};
      newState[id + "Name"] = name;
      newState[id + "Img"] = "https://github.com/"
        + name
        + ".png?size=200";
      return newState;
    });
  }
}
