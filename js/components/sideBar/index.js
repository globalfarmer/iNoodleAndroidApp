
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Content, Text, ListItem, View } from 'native-base';
import { Actions } from 'react-native-router-flux';

import { closeDrawer } from '../../actions/drawer';
import {
    changeContentScene,
    ANNOUNCE,
    SLOT,
    FINAL_TEST,
    SCOREBOARD,
    GAME
} from '../../actions/noodleboard';
import { Labels } from '../../resource';

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
      <Content style={{...styles.sidebar, backgroundColor: '#fefffc'}} >
            <View style={{height: 100, flex: 1, borderColor: "#55635f", borderBottomWidth: 2}}>
                <Text style={{position: 'absolute', bottom: 5, right: 15,flex: 1, fontSize: 30, fontWeight: 'bold'}}>iNoodle</Text>
            </View>
        <ListItem button onPress={() => {
            this.props.changeContentScene(ANNOUNCE);
            this.props.closeDrawer();
        }} >
          <Text style={styles.item}>{Labels.noodleboard.title[ANNOUNCE]}</Text>
        </ListItem>
        <ListItem button onPress={() => {
            this.props.changeContentScene(SLOT);
            this.props.closeDrawer();
        }} >
          <Text style={styles.item}>{Labels.noodleboard.title[SLOT]}</Text>
        </ListItem>
        <ListItem button onPress={() => {
            this.props.changeContentScene(FINAL_TEST);
            this.props.closeDrawer();
        }} >
          <Text style={styles.item}>{Labels.noodleboard.title[FINAL_TEST]}</Text>
        </ListItem>
        <ListItem button onPress={() => {
            this.props.changeContentScene(SCOREBOARD);
            this.props.closeDrawer();
        }} >
          <Text style={styles.item}>{Labels.noodleboard.title[SCOREBOARD]}</Text>
        </ListItem>
        <ListItem button onPress={() => {
            this.props.changeContentScene(GAME);
            this.props.closeDrawer();
        }} >
          <Text style={styles.item}>{Labels.noodleboard.title[GAME]}</Text>
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
