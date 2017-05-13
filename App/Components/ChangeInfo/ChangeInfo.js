import React, { Component } from 'react';
import { Text, View, StatusBar, TouchableOpacity } from 'react-native';

StatusBar.setHidden(true);

export default class ChangeInfo extends Component {
  goBackToMain(){
    const { navigator } = this.props;
    navigator.pop();
  }

  render() {
    return (
      <View style={{flex:1, backgroundColor: 'green'}}>
        <Text>ChangeInfo</Text>
        <TouchableOpacity onPress={this.goBackToMain.bind(this)}>
          <Text>Go back to Main</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
