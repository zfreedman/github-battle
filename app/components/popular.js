"use strict";
import React from "react";

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
    let languages = [
      "All",
      "JavaScript",
      "Ruby",
      "Java",
      "CSS",
      "Python",
    ];
    return (
      <div>
        <ul className="languages">
          {languages.map(l => {
            return (
              <li
                className={
                  l === this.state.selectedLanguage ?
                  "languageSelected" : ""
                }
                key={l}
                onClick={this.updateLanguage.bind(null, l)}>
                {l}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
