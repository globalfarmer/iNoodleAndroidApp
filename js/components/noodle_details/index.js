
import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Actions, ActionConst } from 'react-native-router-flux';
import { Container, Header, Title, Content, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { Grid, Row } from 'react-native-easy-grid';

import { openDrawer } from '../../actions/drawer';
import styles from './styles';

import AnnounceDetails from './announce_details';
import SlotDetails from './slot_details';
import FinalTestDetails from './final_test_details';
import ScoreboardDetails from './scoreboard_details';

import {
    ANNOUNCE,
    SLOT,
    FINAL_TEST,
    SCOREBOARD
} from '../../actions/noodleboard';

const containers= {
    SLOT: (<SlotDetails/>),
    ANNOUNCE: (<AnnounceDetails/>),
    FINAL_TEST: (<FinalTestDetails/>),
    SCOREBOARD: (<ScoreboardDetails/>)
}

class NoodleDetails extends Component {

  static propTypes = {
    name: React.PropTypes.string,
    openDrawer: React.PropTypes.func,
  }

  render() {
    return (
        <Container style={styles.container}>
          <Header>
            <Left>
              <Button transparent onPress={() => Actions.pop()}>
                <Icon name="arrow-back" />
              </Button>
            </Left>

            <Body>
              <Title>{this.props.name+'_DETAILS'}</Title>
            </Body>

          </Header>

          <Content padder>
            {containers[this.props.currentContent]}
          </Content>
        </Container>
    );
  }
}


const mapStateToProps = state => ({
  name: state.noodleboard.currentContent,
  currentContent: state.noodleboard.currentContent
});

export default connect(mapStateToProps)(NoodleDetails);
