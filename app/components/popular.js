"use strict";
import React from "react";
import PropTypes from "prop-types";

export default class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: "All"
    };

    this.updateLanguage = this.updateLanguage.bind(this);
  }

  updateLanguage(selectedLanguage) {
    this.setState(() => ({selectedLanguage}));
  }

  render() {
    return (
      <div>
        <SelectLanguage
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage}
        />
      </div>
    );
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
