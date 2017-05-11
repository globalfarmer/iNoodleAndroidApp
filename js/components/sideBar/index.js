
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Content, Text, ListItem } from 'native-base';
import { Actions } from 'react-native-router-flux';

import { closeDrawer } from '../../actions/drawer';
import { setIndex } from '../../actions/list';
import {
    changeContentScene,
    ANNOUNCE,
    SLOT,
    FINAL_TEST,
    SCOREBOARD
} from '../../actions/noodleboard';

import styles from './style';

class SideBar extends Component {

  static propTypes = {
    // setIndex: React.PropTypes.func,
    closeDrawer: React.PropTypes.func,
    navigateTo: React.PropTypes.func,
  }

  navigateTo(route) {
    this.props.navigateTo(route, 'home');
  }

  render() {
    return (
      <Content style={styles.sidebar} >
        <ListItem button onPress={() => {
            this.props.changeContentScene(ANNOUNCE);
            this.props.closeDrawer();
        }} >
          <Text>Announce</Text>
        </ListItem>
        <ListItem button onPress={() => {
            this.props.changeContentScene(SLOT);
            this.props.closeDrawer();
        }} >
          <Text>Slot</Text>
        </ListItem>
        <ListItem button onPress={() => {
            this.props.changeContentScene(FINAL_TEST);
            this.props.closeDrawer();
        }} >
          <Text>Final Test</Text>
        </ListItem>
        <ListItem button onPress={() => {
            this.props.changeContentScene(SCOREBOARD);
            this.props.closeDrawer();
        }} >
          <Text>Scoreboard</Text>
        </ListItem>
      </Content>
    );
  }
}

function bindAction(dispatch) {
  return {
    closeDrawer: () => dispatch(closeDrawer()),
    changeContentScene: contentType => dispatch(changeContentScene(contentType)),
  };
}

export default connect(null, bindAction)(SideBar);
