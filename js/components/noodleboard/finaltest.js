
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions, ActionConst } from 'react-native-router-flux';
import { Container, Content, Text, Body, Card, CardItem} from 'native-base';
import { Grid, Row } from 'react-native-easy-grid';

import { openDrawer } from '../../actions/drawer';
import { viewDetails } from '../../actions/noodle_details';
import styles from './styles';
import { FINAL_TEST } from '../../actions/noodleboard';
import scenenames from '../../scenenames';

import { Labels } from '../../resource';

class FinalTest extends Component {

  static propTypes = {
    name: React.PropTypes.string,
    openDrawer: React.PropTypes.func,
  }

  getStartTime = (uploadTime) => {
      return `${uploadTime.toLocaleTimeString()}, ${uploadTime.getDate()}-${uploadTime.getMonth()+1}-${uploadTime.getFullYear()}`;
  }

  render() {
        return (
          <Container style={styles.container}>
              <Content style={{margin: 10}}>
                  {(!this.props.finaltests || this.props.finaltests.length == 0) ?
                      (<Text style={styles.item}>{Labels.finaltest.noData}</Text>):
                      (this.props.finaltests.map( (ft, idx) => (
                        <Card key={idx}>
                            <CardItem cardBody onPress={() => { this.props.viewDetails(ft); Actions[scenenames.noodleDetails]()}}>
                                <Body style={{flex: 1}}>
                                    <Text style={{marginLeft: 10, marginTop: 5, marginRight: 5, marginBottom: 5, ...styles.cardHeader}}>
                                        {ft.course.name} - {ft.course.code.toUpperCase()}
                                    </Text>
                                    <Text style={{marginLeft: 10, marginTop: 5, marginRight: 5, marginBottom: 5,...styles.item}}>
                                        + {this.getStartTime(new Date(ft.time))}
                                    </Text>
                                    <Text style={{marginLeft: 10, marginTop: 5, marginRight: 5, marginBottom: 5,...styles.item}}>
                                        + {ft.room}
                                    </Text>
                                    <Text style={{marginLeft: 10, marginTop: 5, marginRight: 5, marginBottom: 5,...styles.item}}>
                                        + {ft.area}
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
    viewDetails: finaltest => dispatch(viewDetails({boardSource: FINAL_TEST, data: finaltest}))
  };
}

const mapStateToProps = state => ({
    finaltests: (state.noodleboard.finaltestData.final || []).sort((e1, e2) => (new Date(e1.time)) - (new Date(e2.time))),
});

export default connect(mapStateToProps, bindAction)(FinalTest);
