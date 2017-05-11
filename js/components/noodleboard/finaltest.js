
import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Actions, ActionConst } from 'react-native-router-flux';
import { Container, Header, Title, Content, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { Grid, Row } from 'react-native-easy-grid';

import { openDrawer } from '../../actions/drawer';
import { viewDetails } from '../../actions/noodle_details';
import styles from './styles';
import { FINAL_TEST } from '../../actions/noodleboard';
import scenenames from '../../scenenames';


class FinalTest extends Component {

  static propTypes = {
    name: React.PropTypes.string,
    setIndex: React.PropTypes.func,
    list: React.PropTypes.arrayOf(React.PropTypes.string),
    openDrawer: React.PropTypes.func,
  }

  newPage(index) {
    this.props.setIndex(index);
    Actions.blankPage();
  }

  render() {
        return (
          <Container style={styles.container}>
            <Content>
                <Button transparent onPress={() => { this.props.viewDetails(this.props.detailsData); Actions[scenenames.noodleDetails]();}}>
                  <Text>{this.props.name}</Text>
                </Button>
            </Content>
          </Container>
        );
     }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
    viewDetails: detailsData => dispatch(viewDetails(detailsData))
  };
}

const mapStateToProps = state => ({
  name: state.noodleboard.currentContent,
  detailsData: {
      boardSource: state.noodleboard.currentContent,
      data: {}
  }
});

export default connect(mapStateToProps, bindAction)(FinalTest);
