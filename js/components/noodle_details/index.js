
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

  getTitle() {
      switch (this.props.currentContent) {
          case ANNOUNCE:
              return this.props.data.name;
          case SLOT:
              return this.props.data.course.name;
          case FINAL_TEST:
              return this.props.data.course.name;
          case SCOREBOARD:
              return this.props.data.course.name;
      }
      return 'NONE';
  }

  render() {
    return (
        <Container style={styles.container}>
          <Header>
            <Left style={{flex: 0.12}}>
              <Button transparent onPress={() => Actions.pop()}>
                <Icon name="arrow-back" />
              </Button>
            </Left>

            <Body style={{flex: 0.88}}>
              <Title style={styles.title}>{this.getTitle()}</Title>
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
  currentContent: state.noodleboard.currentContent,
  data: state.noodleDetails.data
});

export default connect(mapStateToProps)(NoodleDetails);
