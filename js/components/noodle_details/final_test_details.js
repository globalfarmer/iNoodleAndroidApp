
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Content, Text, Card, CardItem, Body } from 'native-base';
import { Grid, Row } from 'react-native-easy-grid';

import styles from './styles';
import { FINAL_TEST } from '../../actions/noodleboard';
import { Labels } from '../../resource';


class FinalTestDetails extends Component {
    getStartTime = (uploadTime) => {
        return `${uploadTime.toLocaleTimeString()}, ${uploadTime.getDate()}-${uploadTime.getMonth()+1}-${uploadTime.getFullYear()}`;
    }

    render() {
        return (
            <Container style={styles.container}>
                <Content style={{margin: 10}}>
                  <Card>
                      <CardItem cardBody>
                          <Body style={{flex: 1}}>
                              <Text style={{...styles.cardHeader, marginLeft: 10, marginTop: 5, marginRight: 5, marginBottom: 5}}>
                                  {this.props.ft.course.name} - {this.props.ft.course.code.toUpperCase()}
                              </Text>
                              <Text style={{...styles.item, marginLeft: 10, marginTop: 5, marginRight: 5, marginBottom: 5}}>
                                  + {this.getStartTime(new Date(this.props.ft.time))}
                              </Text>
                              <Text style={{...styles.item, marginLeft: 10, marginTop: 5, marginRight: 5, marginBottom: 5}}>
                                  + So bao danh {this.props.ft.seat}
                              </Text>
                              <Text style={{...styles.item, marginLeft: 10, marginTop: 5, marginRight: 5, marginBottom: 5}}>
                                  + Ca thi {this.props.ft.sessionNo}
                              </Text>
                              <Text style={{...styles.item, marginLeft: 10, marginTop: 5, marginRight: 5, marginBottom: 5}}>
                                  + {this.props.ft.room}
                              </Text>
                              <Text style={{...styles.item, marginLeft: 10, marginTop: 5, marginRight: 5, marginBottom: 5}}>
                                  + {this.props.ft.area}
                              </Text>
                              <Text style={{...styles.item, marginLeft: 10, marginTop: 5, marginRight: 5, marginBottom: 5}}>
                                  + {Labels.person.term[this.props.ft.term]}
                              </Text>
                              <Text style={{...styles.item, marginLeft: 10, marginTop: 5, marginRight: 5, marginBottom: 5}}>
                                  + {this.props.ft.type}
                              </Text>
                          </Body>
                      </CardItem>
                  </Card>
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
  ft: state.noodleDetails.data
});

export default connect(mapStateToProps)(FinalTestDetails);
