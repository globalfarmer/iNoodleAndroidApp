
import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Actions, ActionConst } from 'react-native-router-flux';
import { Container, Header, Title, Content, Text, Button, Icon, Right, Body, Card, CardItem } from 'native-base';
import { Grid, Row } from 'react-native-easy-grid';

import { openDrawer } from '../../actions/drawer';
import { viewDetails } from '../../actions/noodle_details';
import styles from './styles';
import { ANNOUNCE } from '../../actions/noodleboard';
import scenenames from '../../scenenames';
import { Labels } from '../../resource';


class Announce extends Component {

  static propTypes = {
    name: React.PropTypes.string,
    openDrawer: React.PropTypes.func,
  }
  getUploadTime = (uploadTime) => {
      return `${uploadTime.toLocaleTimeString()}, ${uploadTime.getDate()}-${uploadTime.getMonth()+1}-${uploadTime.getFullYear()}`;
  }

  render() {
      return (
          <Container style={styles.container}>
              <Content style={{margin: 10}}>
                  { (!this.props.announces || this.props.announces.length == 0) ?
                      (<Text style={styles.item}>{Labels.announce.noData}</Text>) :
                    (
                        this.props.announces.map( (announce, idx) => (
                            <Card key={idx}>
                                <CardItem cardBody onPress={() => { this.props.viewDetails(announce); Actions[scenenames.noodleDetails]()}}>
                                    <Body style={{flex: 1}}>
                                        <Text style={{...styles.item, marginLeft: 10, marginTop: 5, marginRight: 5, marginBottom: 5,fontSize: 18}}>
                                            {announce.name}
                                        </Text>
                                    </Body>
                                </CardItem>
                                <CardItem>
                                    <Right>
                                        <Text note style={styles.footer}>{this.getUploadTime(new Date(announce.uploadtime))}</Text>
                                    </Right>
                                </CardItem>
                            </Card>
                         ))
                     )
                  }
              </Content>
          </Container>
        )
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
    viewDetails: (data) => dispatch(viewDetails({boardSource: ANNOUNCE, data: data}))
  }
}

const mapStateToProps = state => ({
  announces: state.noodleboard.announceData.announce || []
});

export default connect(mapStateToProps, bindAction)(Announce);
