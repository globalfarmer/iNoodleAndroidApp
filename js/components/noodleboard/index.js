
import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Actions, ActionConst } from 'react-native-router-flux';
import { Container, Header, Title, Content, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { Grid, Row } from 'react-native-easy-grid';

import { setIndex } from '../../actions/list';
import { openDrawer } from '../../actions/drawer';
import styles from './styles';

import Announce from './announce';
import Slot from './slot';
import FinalTest from './finaltest';
import Scoreboard from './scoreboard';

import { ANNOUNCE, SLOT } from '../../actions/noodleboard';

const containers= {
    SLOT: (<Slot/>),
    ANNOUNCE: (<Announce/>),
    FINAL_TEST: (<FinalTest/>),
    SCOREBOARD: (<Scoreboard/>)
}

class NoodleBoard extends Component {

  static propTypes = {
    name: React.PropTypes.string,
    setIndex: React.PropTypes.func,
    list: React.PropTypes.arrayOf(React.PropTypes.string),
    openDrawer: React.PropTypes.func,
  }

  newPage(index) {
    this.props.setIndex(index);
    Actions.blankPage();
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
  };
}

const mapStateToProps = state => ({
  name: state.noodleboard.currentContent,
  currentContent: state.noodleboard.currentContent
});

export default connect(mapStateToProps, bindAction)(NoodleBoard);
