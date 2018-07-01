import React from "react";
import PropTypes from "prop-types";

let styles = {
  content: {
    textAlign: "center",
    fontSize: "35px"
  }
};

export default class Loading extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: props.text
    };
  }
  render() {
    return (
      <p style={styles.content}>
        {this.state.text}
      </p>
    );
  }

  componentDidMount() {
    let stopper = this.props.text + "...";
    this.interval = window.setInterval(function () {
      let text = this.state.text;
      this.setState(function() {
        return {
          text: text === stopper ? this.props.text : text + "."
        };
      }.bind(this));
    }.bind(this), this.props.speed);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
}
Loading.defaultProps = {
  speed: 300,
  text: "Loading"
};
Loading.propTypes = {
  speed: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired
};
