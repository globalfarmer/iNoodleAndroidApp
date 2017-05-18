
import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Actions, ActionConst } from 'react-native-router-flux';
import { Container, Header, Title, Content, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { Grid, Row } from 'react-native-easy-grid';

import { openDrawer } from '../../actions/drawer';
import { onGetData, getAnnounce, getSlot, getFinalTest, getScoreboard } from '../../actions/noodleboard';

import styles from './styles';

import Announce from './announce';
import Slot from './slot';
import FinalTest from './finaltest';
import Scoreboard from './scoreboard';
import Game from './game';

import { ANNOUNCE, SLOT, FINAL_TEST, SCOREBOARD, GAME } from '../../actions/noodleboard';

import { Labels } from '../../resource';

const containers= {
    SLOT: (<Slot/>),
    ANNOUNCE: (<Announce/>),
    FINAL_TEST: (<FinalTest/>),
    SCOREBOARD: (<Scoreboard/>),
    GAME: (<Game/>)
}

class NoodleBoard extends Component {

  static propTypes = {
    name: React.PropTypes.string,
    setIndex: React.PropTypes.func,
    list: React.PropTypes.arrayOf(React.PropTypes.string),
    openDrawer: React.PropTypes.func,
  }

  constructor(props) {
      super(props);
      getAnnounce((data) => { this.props.onGetData({announceData: data})});
      getSlot(
          this.props.student.code,
          this.props.student.term,
          (data) => {this.props.onGetData({slotData: data})}
      );
      getFinalTest(
          this.props.student.code,
          this.props.student.term,
          (data) => {this.props.onGetData({finaltestData: data})}
      )
      getScoreboard(
          this.props.student.code,
          this.props.student.term,
          (data) => {this.props.onGetData({scoreboardData: data})}
      )
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left style={{flex: 0.15}}>
              <Button transparent onPress={this.props.openDrawer}>
                <Icon active name="menu" style={{fontSize: 30}}/>
              </Button>
          </Left>

          <Body style={{flex: 0.7}}>
            <Title style={styles.title}>{this.props.title}</Title>
          </Body>

          <Right style={{flex: 0.15}}>
              <Button transparent onPress={() => Actions.person({ type: ActionConst.RESET })}>
                <Icon active name="person" style={{fontSize: 25}}/>
              </Button>
          </Right>
        </Header>
        <Content>
            { containers[this.props.currentContent] }
        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
    onGetData: data => dispatch(onGetData(data))
  };
}

const mapStateToProps = state => ({
  title: Labels.noodleboard.title[state.noodleboard.currentContent],
  student: state.user,
  currentContent: state.noodleboard.currentContent
});

export default connect(mapStateToProps, bindAction)(NoodleBoard);
