
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

import { Labels } from '../../resource';


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
                  { (!(this.props.scoreboards) || this.props.scoreboards.length==0) ?
                      (<Text style={styles.item}>{Labels.scoreboard.noData}</Text>) :
                      (this.props.scoreboards.map( (sb, idx) => (
                        <Card key={idx}>
                            <CardItem cardBody onPress={() => { this.props.viewDetails(sb); Actions[scenenames.noodleDetails]()}}>
                                <Body style={{flex: 1}}>
                                    <Text style={{marginLeft: 10, marginTop: 5, marginRight: 5, marginBottom: 5, ...styles.cardHeader}}>
                                        {sb.course.name ? [sb.course.name, sb.course.code.toUpperCase()].join(' - ') : sb.course.code.toUpperCase()}
                                    </Text>
                                </Body>
                            </CardItem>
                            <CardItem>
                                <Right>
                                    <Text note style={styles.footer}>{this.getUploadTime(new Date(sb.uploadTime))}</Text>
                                </Right>
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
    viewDetails: sb => dispatch(viewDetails({boardSource: SCOREBOARD, data: sb}))
  };
}

const mapStateToProps = state => ({
    scoreboards: state.noodleboard.scoreboardData.scoreboard || []
});

export default connect(mapStateToProps, bindAction)(Scoreboard);
