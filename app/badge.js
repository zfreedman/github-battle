import React from "react";

export default class Badge extends React.Component {
  render() {
    return (
      <div>
        <img
          src={this.props.img}
          alt="Avatar"
        />
        <h1>Name: {this.props.name}</h1>
        <h3>Username: {this.props.username}</h3>
      </div>
    );
  }
}
