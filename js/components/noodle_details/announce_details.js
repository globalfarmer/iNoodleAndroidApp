
import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Actions, ActionConst } from 'react-native-router-flux';
import { Container, Header, Title, Content, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { Grid, Row } from 'react-native-easy-grid';

import { openDrawer } from '../../actions/drawer';
import styles from './styles';
import { ANNOUNCE } from '../../actions/noodleboard';


class AnnounceDetails extends Component {

  static propTypes = {
    name: React.PropTypes.string,
    openDrawer: React.PropTypes.func,
  }

  newPage(index) {
    this.props.setIndex(index);
    Actions.blankPage();
  }

  render() {
      if( this.props.data ) {
        return (
          <Container style={styles.container}>
            <Content>
              <Text>{this.props.data}</Text>
            </Content>
          </Container>
        );
      }
      return (<Container/>);
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
  };
}

const mapStateToProps = state => ({
  name: state.user.name,
  data: state.noodleboard.currentContent === ANNOUNCE ? state.noodleboard.currentContent : undefined
});

export default connect(mapStateToProps, bindAction)(AnnounceDetails);
