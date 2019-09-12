import React, { Component } from 'react';

// CSS
import './index.css';

export default class Button extends Component {
  render() {
    return (
      <button className={'btn ' + this.props.btnStyle}>
        <span>{this.props.btnText}</span>
      </button>
    );
  }
}
