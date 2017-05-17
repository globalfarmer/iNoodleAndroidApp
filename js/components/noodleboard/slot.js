
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

class Slot extends Component {

  static propTypes = {
    name: React.PropTypes.string,
    openDrawer: React.PropTypes.func,
  }

  render() {
    return (
      <Container style={styles.container}>
          <Content style={{margin: 10}}>
              {this.props.slots.map( (slot, idx) => (
                    <Card key={idx}>
                        <CardItem cardBody onPress={() => { this.props.viewDetails(slot); Actions[scenenames.noodleDetails]()}}>
                            <Body style={{flex: 1}}>
                                <Text style={{marginLeft: 10, marginTop: 5, marginRight: 5, marginBottom: 5,fontSize: 18}}>
                                    {slot.course.code}
                                </Text>
                                <Text style={{marginLeft: 10, marginTop: 5, marginRight: 5, marginBottom: 5,fontSize: 18}}>
                                    {slot.course.name}
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>
              ))}
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
