import React from "react";
import PropTypes from "prop-types";

export default class PlayerInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <form className="column" onSubmit={this.handleSubmit}>
        <label className="header" htmlFor="name">
          {this.props.label}
        </label>
        <input
          id="name"
          placeholder="github username"
          type="text"
          autoComplete="off"
          value={this.state.username}
          onChange={this.handleInputChange}
        />

        <button
          className="button"
          type="submit"
          disabled={!this.state.name}
        >
          Submit
        </button>
      </form>
    );
  }

  handleInputChange(event) {
    let value = event.target.value;
    this.setState(function() {
      return {name: value};
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.onSubmit(
      this.props.id,
      this.state.name
    );
  }
}
PlayerInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
};
