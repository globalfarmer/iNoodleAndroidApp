
import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Actions, ActionConst } from 'react-native-router-flux';
import { Container, Header, Title, Content, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { Grid, Row } from 'react-native-easy-grid';

import { openDrawer } from '../../actions/drawer';
import styles from './styles';

import AnnounceDetails from './announce_details';
// import Slot from './slot_details';
// import FinalTest from './final_test_details';
// import Scoreboard from './scoreboard_details';

import { ANNOUNCE, SLOT } from '../../actions/noodleboard';

// const containers= {
//     SLOT: (<Slot/>),
//     ANNOUNCE: (<Announce/>),
// }

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
              <Title>{(this.props.name || 'ANNOUNCE')+'_DETAILS'}</Title>
            </Body>

          </Header>

          <Content padder>
            <Text>{this.props.currentContent + "_DETAILS"}</Text>
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
