
import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Actions, ActionConst } from 'react-native-router-flux';
import { Container, Content, Text, Button} from 'native-base';
import { Grid, Row } from 'react-native-easy-grid';

import { openDrawer } from '../../actions/drawer';
import styles from './styles';
import { SCOREBOARD } from '../../actions/noodleboard';


class ScoreboardDetails extends Component {

    static propTypes = {
        name: React.PropTypes.string,
        openDrawer: React.PropTypes.func,
    }

    render() {
        return (
            <Container style={styles.container}>
                <Content>
                    <Text>{this.props.name + "_DETAILS"}</Text>
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
  name: state.noodleDetails.boardSource,
  data: state.noodleDetails.data
});

export default connect(mapStateToProps)(ScoreboardDetails);
