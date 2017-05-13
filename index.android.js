import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from "./App/Components/App.js";

export default class Noodles extends Component {
  render() {
    return <App />;
  }
}



AppRegistry.registerComponent('Noodles', () => Noodles);
