import React, { Component } from 'react';
import {
  AppRegistry,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';
import Authentication from './Authentication/Authentication.js';
import ChangeInfo from './ChangeInfo/ChangeInfo.js';
import Main from './Main/Main.js';

StatusBar.setHidden(true);

export default class Noodles extends Component {
  render() {
    return (
      // <View style={{flex:1, backgroundColor: 'green'}}>
      //   <Text>React Noodles Application</Text>
      // </View>
      <Navigator
        initialRoute={{ name: 'MAIN'}}
        renderScene={(route, navigator) => {
          switch (route.name){
            case 'MAIN': return <Main navigator={navigator} />;
            case 'AUTHENTICATION': return <Authentication navigator={navigator} />;
            case 'PROFILE': return <ChangeInfo navigator={navigator} />;
            default: return <Main navigator={navigator} />;
          }
        }}

        configureScene={route => {
          if (route.name === 'AUTHENTICATION') return Navigator.SceneConfigs.FloatFromRight;
          return Navigator.SceneConfigs.FloatFromLeft;
        }}
      />
    );
  }
}
AppRegistry.registerComponent('Noodles', () => Noodles);