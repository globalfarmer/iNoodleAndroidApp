
import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Actions, ActionConst } from 'react-native-router-flux';
import { Container, Content, Text, Body, Card, CardItem } from 'native-base';
import { Grid, Row } from 'react-native-easy-grid';

import { openDrawer } from '../../actions/drawer';
import { viewDetails } from '../../actions/noodle_details';
import styles from './styles';
import { SLOT } from '../../actions/noodleboard';
import scenenames from '../../scenenames';

import { Labels } from '../../resource';

class Slot extends Component {

  static propTypes = {
    name: React.PropTypes.string,
    openDrawer: React.PropTypes.func,
  }

  render() {
    return (
      <Container style={styles.container}>
          <Content style={{margin: 10}}>
              { (!this.props.slots || this.props.slots.length == 0) ?
                  (<Text style={styles.item}>{Labels.slot.noData}</Text>) :
                  (this.props.slots.map( (slot, idx) => (
                    <Card key={idx}>
                        <CardItem cardBody onPress={() => { this.props.viewDetails(slot); Actions[scenenames.noodleDetails]()}}>
                            <Body style={{flex: 1}}>
                                <Text style={{...styles.cardHeader, marginLeft: 10, marginTop: 5, marginRight: 5, marginBottom: 5}}>
                                    {slot.course.name} - {slot.course.code.toUpperCase()}
                                </Text>

                            </Body>
                        </CardItem>
                    </Card>
              )))}
          </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
    viewDetails: slot => dispatch(viewDetails({boardSource: SLOT, data: slot}))
  };
}

const mapStateToProps = state => ({
    slots: state.noodleboard.slotData.slot || []
});

export default connect(mapStateToProps, bindAction)(Slot);
