
import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Actions, ActionConst } from 'react-native-router-flux';
import { Container, Header, Title, Content, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { Grid, Row } from 'react-native-easy-grid';

import { openDrawer } from '../../actions/drawer';
import { onGetData, getAnnounce } from '../../actions/noodleboard';

import styles from './styles';

import Announce from './announce';
import Slot from './slot';
import FinalTest from './finaltest';
import Scoreboard from './scoreboard';
import Game from './game';

import { ANNOUNCE, SLOT, FINAL_TEST, SCOREBOARD, GAME } from '../../actions/noodleboard';

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
      getAnnounce((data) => { this.props.onGetData({announceData: data}) });
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
              <Button transparent onPress={this.props.openDrawer}>
                <Icon active name="menu" />
              </Button>
          </Left>

          <Body>
            <Title>{(this.props.name) ? this.props.name : 'Home'}</Title>
          </Body>

          <Right>
              <Button transparent onPress={() => Actions.person({ type: ActionConst.RESET })}>
                <Icon active name="person" />
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
  name: state.noodleboard.currentContent,
  currentContent: state.noodleboard.currentContent
});

export default connect(mapStateToProps, bindAction)(NoodleBoard);
