import React, { Component } from "react";
import Switch from "react-switch";

export default class SwitchComponent extends Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
  }

  render() {
    return (
        <Switch onChange={this.handleChange} checked={this.state.checked}/>
    );
  }
}