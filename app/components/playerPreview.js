import React from "react";
import PropTypes from "prop-types";

export default function PlayerPreview(props) {
  return (
    <div>
      <div className="column">
        <img
          className="avatar"
          src={props.avatar}
          alt={"Avatar for " + props.name}
        />
        <h2 className="username">
          @{props.name}
        </h2>
      </div>
      {props.children}
    </div>
  );
}
PlayerPreview.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
