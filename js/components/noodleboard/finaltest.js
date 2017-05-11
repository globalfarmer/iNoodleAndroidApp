
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
                  {this.props.finaltests.map( (ft, idx) => (
                        <Card key={idx}>
                            <CardItem cardBody onPress={() => { this.props.viewDetails(ft); Actions[scenenames.noodleDetails]()}}>
                                <Body style={{flex: 1}}>
                                    <Text style={{marginLeft: 10, marginTop: 5, marginRight: 5, marginBottom: 5,fontSize: 18}}>
                                        {ft.course.code}
                                    </Text>
                                    <Text style={{marginLeft: 10, marginTop: 5, marginRight: 5, marginBottom: 5,fontSize: 18}}>
                                        {ft.course.name}
                                    </Text>
                                    <Text style={{marginLeft: 10, marginTop: 5, marginRight: 5, marginBottom: 5,fontSize: 18}}>
                                        {this.getStartTime(new Date(ft.time))}
                                    </Text>
                                    <Text style={{marginLeft: 10, marginTop: 5, marginRight: 5, marginBottom: 5,fontSize: 18}}>
                                        {ft.room}
                                    </Text>
                                    <Text style={{marginLeft: 10, marginTop: 5, marginRight: 5, marginBottom: 5,fontSize: 18}}>
                                        {ft.area}
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
    viewDetails: finaltest => dispatch(viewDetails({boardSource: FINAL_TEST, data: finaltest}))
  };
}

const mapStateToProps = state => ({
    finaltests: state.noodleboard.data.finaltest
});

export default connect(mapStateToProps, bindAction)(FinalTest);
