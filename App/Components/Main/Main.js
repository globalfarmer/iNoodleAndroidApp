import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StatusBar } from 'react-native';
import Drawer from 'react-native-drawer';
import Menu from './menu.js'
import MainView from './MainView.js'
StatusBar.setHidden(true);

export default class Main extends Component {
	gotoAuthentication(){
		const { navigator } = this.props;
		navigator.push({name: 'AUTHENTICATION'});
	}

	gotoChangeInfo(){
		const { navigator } = this.props;
		navigator.push({name: 'PROFILE'});
	}

	closeControlPanel = () => {
    	this.drawer.close()
  	};
  	openControlPanel = () => {
    	this.drawer.open()
  	};
  render() {
  	const { navigator } = this.props;
    return (
    	<Drawer
        	ref={(ref) => { this.drawer = ref; }}
        	content={<Menu navigator={navigator}/>}
        	openDrawerOffset={0.4}
        	tapToClose
        >
        <MainView open={this.openControlPanel.bind(this)} />
      	</Drawer>
    );
  }
}
