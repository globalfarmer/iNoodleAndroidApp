
import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Container, Content, Text, Button, Card, CardItem, Body} from 'native-base';
import { Grid, Row } from 'react-native-easy-grid';

import styles from './styles';
import { SLOT } from '../../actions/noodleboard';

class SlotDetails extends Component {

    static propTypes = {
        name: React.PropTypes.string,
        openDrawer: React.PropTypes.func,
    }

    render() {
        return (
            <Container style={styles.container}>
                <Content style={{margin: 10}}>
                  <Card>
                      <CardItem cardBody>
                          <Body style={{flex: 1}}>
                              <Text style={{...styles.cardHeader, marginLeft: 10, marginTop: 5, marginRight: 5, marginBottom: 5}}>
                                  {this.props.slot.course.name} - {this.props.slot.course.code.toUpperCase()}
                              </Text>
                              <Text style={{...styles.item, marginLeft: 10, marginTop: 5, marginRight: 5, marginBottom: 5}}>
                                  + Nhóm: {this.props.slot.course.group}
                              </Text>
                              <Text style={{...styles.item, marginLeft: 10, marginTop: 5, marginRight: 5, marginBottom: 5}}>
                                  + Tín chỉ: {this.props.slot.course.tc}
                              </Text>
                              <Text style={{...styles.item, marginLeft: 10, marginTop: 5, marginRight: 5, marginBottom: 5}}>
                                  + Ghi chú: {this.props.slot.note}
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
    slot: state.noodleDetails.data
});

export default connect(mapStateToProps)(SlotDetails);
