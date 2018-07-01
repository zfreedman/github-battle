"use strict";
import React from "react";
import PropTypes from "prop-types";

import API from "../utils/api";
import Loading from "./loading";

export default class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: "All",
      repos: null
    };

    this.updateLanguage = this.updateLanguage.bind(this);
  }

  render() {
    return (
      <div>
        <SelectLanguage
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage}
        />
        {
          !this.state.repos
            ? <Loading />
            : <RepoGrid repos={this.state.repos} />
        }
      </div>
    );
  }

  componentDidMount() {
    this.updateLanguage(this.state.selectedLanguage);
  }

  updateLanguage(selectedLanguage) {
    this.setState(() => (
      {
        selectedLanguage,
        repos: null,
      }
    ));

    // make ajax request
    API.fetchPopularRepos(selectedLanguage)
      .then(function(repos) {
        this.setState(function() {
          return {repos};
        })
      }.bind(this));
  }
}

// stateless functional component
function SelectLanguage(props) {
  let languages = [
      "All",
      "JavaScript",
      "Ruby",
      "Java",
      "CSS",
      "Python",
    ];

  return (
    <ul className="languages">
    {languages.map(l => {
      return (
        <li
        className={
          l === props.selectedLanguage ?
          "languageSelected" : ""
        }
        key={l}
        onClick={props.onSelect.bind(null, l)}>
        {l}
        </li>
      );
    })}
    </ul>
  );
}
// yes this still applies propTypes to functional components
SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
}

function RepoGrid(props) {
  return (
    <ul className="popular-list">
      {
        props.repos.map((repo, index) => {
          return (
            <li key={repo.name} className="popular-item">
              <div className="popular-rank">#{index + 1}</div>
              <ul className="space-list-items">
                <li>
                  <img
                    className="avatar"
                    src={repo.owner.avatar_url}
                    alt={"Avatar for " + repo.owner.login}
                  />
                </li>
                <li><a href={repo.html_url}>{repo.name}</a></li>
                <li>@{repo.owner.login}</li>
                <li>{repo.stargazers_count} stars</li>
              </ul>
            </li>
          );
        })
      }
    </ul>
  );
}
RepoGrid.propTypes = {
  repos: PropTypes.array.isRequired,
}
