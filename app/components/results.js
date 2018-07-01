import {Link} from "react-router-dom";
import queryString from "query-string";
import React from "react";

import API from "../utils/api";
import Loading from "./loading";
import Player from "./player";

export default class Results extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      winner: null,
      loser: null,
      error: null,
      loading: true
    };
  }

  render() {
    let error = this.state.error;
    let winner = this.state.winner;
    let loser = this.state.loser;
    let loading = this.state.loading;

    if (loading) {
      return <Loading />
    }

    if (error) {
      return (
        <div>
          <p>{error}</p>
          <Link to="/battle">Reset</Link>
        </div>
      );
    }

    return (
      <div className="row">
        <Player
          label="Winner"
          score={winner.score}
          profile={winner.profile}
        />
        <Player
          label="Loser"
          score={loser.score}
          profile={loser.profile}
        />
      </div>
    );
  }

  componentDidMount() {
    let players = queryString.parse(this.props.location.search);
    API.battle(Object.values(players))
      .then(function(arr) {
        // error
        if (!arr) {
          return this.setState(function() {
            return {
              error: "Looks like there was an error. Check that both users exist on GitHub.",
              loading: false
            };
          });
        }

        // no error
        this.setState(function() {
          return {
            error: null,
            winner: arr[0],
            loser: arr[1],
            loading: false
          };
        });
      }.bind(this));
  }
}
