
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions, ActionConst } from 'react-native-router-flux';
import { Container, Header, Title, Content, Text, Card, CardItem, Body, Right} from 'native-base';
import { Grid, Row } from 'react-native-easy-grid';

import { openDrawer } from '../../actions/drawer';
import { viewDetails } from '../../actions/noodle_details';
import styles from './styles';
import { SCOREBOARD } from '../../actions/noodleboard';
import scenenames from '../../scenenames';


class Scoreboard extends Component {

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
                  {this.props.scoreboards.map( (sb, idx) => (
                        <Card key={idx}>
                            <CardItem cardBody onPress={() => { this.props.viewDetails(sb.file.filename); Actions[scenenames.noodleDetails]()}}>
                                <Body style={{flex: 1}}>
                                    <Text style={{marginLeft: 10, marginTop: 5, marginRight: 5, marginBottom: 5,fontSize: 18}}>
                                        {sb.course.code}
                                    </Text>
                                </Body>
                            </CardItem>
                            <CardItem>
                                <Right>
                                    <Text note style={{fontSize: 16}}>{this.getUploadTime(new Date(sb.uploadTime))}</Text>
                                </Right>
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
    viewDetails: link => dispatch(viewDetails({boardSource: SCOREBOARD, data: link}))
  };
}

const mapStateToProps = state => ({
    scoreboards: state.noodleboard.scoreboardData.scoreboard || []
});

export default connect(mapStateToProps, bindAction)(Scoreboard);
