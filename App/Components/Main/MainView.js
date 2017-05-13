import React, { Component } from 'react';
import { Text, View, StatusBar, TouchableOpacity, Image, StyleSheet } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

import TopBar from './TopBar.js';
import Announce from './Announce/Announce.js';
import Slot from './Slot/Slot.js';
import ScoreBoard from './ScoreBoard/ScoreBoard.js';
import FinalTest from './FinalTest/FinalTest.js';

import AnnounceIcon from './images/appIcon/home.png';
import AnnounceIcons from './images/appIcon/home0.png';
import SlotIcon from './images/appIcon/contact.png';
import SlotIcons from './images/appIcon/contact0.png';
import FinalTestIcon from './images/appIcon/exam.png';
import FinalTestIcons from './images/appIcon/exam0.png';
import ScoreBoardIcon from './images/appIcon/scoreboard.png';
import ScoreBoardIcons from './images/appIcon/scoreboard0.png';

StatusBar.setHidden(true);

export default class MainView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'announce'
    };
  }
  goBackToMain(){
    const { navigator } = this.props;
    navigator.pop();
  }

  openMenu(){
    const { open } = this.props;
    open();
  }
  render() {
    const { iconStyle } = styles;
    return (
      <View style={{flex:1, backgroundColor: 'white'}}>
        <TopBar onOpen={this.openMenu.bind(this)} />
        <TabNavigator>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'announce'}
            title="Announce"
            renderIcon={() => <Image style={iconStyle} source={AnnounceIcons} />}
            renderSelectedIcon={() => <Image style={iconStyle} source={AnnounceIcon} />}
            //badgeText="1"
            onPress={() => this.setState({ selectedTab: 'announce' })}>
            <Announce />
          </TabNavigator.Item>

          <TabNavigator.Item
            selected={this.state.selectedTab === 'slot'}
            title="Slot"
            renderIcon={() => <Image style={iconStyle} source={SlotIcons} />}
            renderSelectedIcon={() => <Image style={iconStyle} source={SlotIcon} />}
            //renderBadge={() => <CustomBadgeView />}
            onPress={() => this.setState({ selectedTab: 'slot' })}>
            <Slot />
          </TabNavigator.Item>

          <TabNavigator.Item
            selected={this.state.selectedTab === 'finaltest'}
            title="Finaltest"
            renderIcon={() => <Image style={iconStyle} source={FinalTestIcons} />}
            renderSelectedIcon={() => <Image style={iconStyle} source={FinalTestIcon} />}
            //badgeText="1"
            onPress={() => this.setState({ selectedTab: 'finaltest' })}>
            <FinalTest />
          </TabNavigator.Item>

          <TabNavigator.Item
            selected={this.state.selectedTab === 'scoreboard'}
            title="ScoreBoard"
            renderIcon={() => <Image style={iconStyle} source={ScoreBoardIcons} />}
            renderSelectedIcon={() => <Image style={iconStyle} source={ScoreBoardIcon} />}
            //badgeText="1"
            onPress={() => this.setState({ selectedTab: 'scoreboard' })}>
            <ScoreBoard />
          </TabNavigator.Item>
        </TabNavigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  iconStyle: {
    width: 24, height: 24
  }
});