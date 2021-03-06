import React from "react";
import PropTypes from "prop-types";

import PlayerProfile from "./playerProfile";

export default function Player(props) {
  return (
    <div>
      <h1 className="header">{props.label}</h1>
      <h3 style={{textAlign: "center"}}>Score: {props.score}</h3>
      <PlayerProfile info={props.profile} />
    </div>
  );
}
Player.propTypes = {
  label: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  profile: PropTypes.object.isRequired
};
