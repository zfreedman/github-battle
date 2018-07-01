import React from "react";
import PropTypes from "prop-types";

import PlayerPreview from "./playerPreview";

export default function PlayerProfile(props) {
  let info = props.info;
  return (
    <PlayerPreview avatar={info.avatar_url} name={info.login}>
      <ul className="space-list-items">
      {
        // unreqiuired elements
        [info.name, info.location, info.company].map(function(e) {
          return e && <li key={e}>{e}</li>;
        })

        // below are required elements
      }
      <li>Followers: {info.followers}</li>
      <li>Following: {info.following}</li>
      <li>Public repos: {info.public_repos}</li>
      {info.blog && <li><a href={info.blog}>{info.blog}</a></li>}
      </ul>
    </PlayerPreview>
  );
}
PlayerProfile.propTypes = {
  info: PropTypes.object.isRequired
};
