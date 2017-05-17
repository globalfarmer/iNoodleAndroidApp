
import React, { Component } from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import { Label, Container, Content, Item, Input, Button, Icon} from 'native-base';
import {View, Text, Picker, Card, CardItem, Thumbnail, Left, Right, Body, Title, Header } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { Grid, Row } from 'react-native-easy-grid';

import { setInfo } from '../../actions/user';
import styles from './styles';
import scenenames from '../../scenenames';
import { Values, Labels } from '../../resource';



const background = require('../../../images/shadow.png');

class Person extends Component {

  static propTypes = {
    setUser: React.PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = {
        valid: !(this.props.student.code.length != 8 || isNaN(this.props.student.code)),
        inputStyle: {},
        code: this.props.student.code,
        selectedOne: this.props.student.term || Values.person.term['2016-2017-1'],
        isGettingInfo: false,
    };
  }

  setInfo(info) {
    this.props.setInfo(info);
  }

    onValueChange (value: string) {
        this.setState({
            selectedOne : value,
        });
        this.props.setInfo({term: value});
    }

    validate(code) {
        if( code.length != 8 || isNaN(code) ) {
            this.setState({ inputStyle: styles.wrongCode });
            this.setState({valid: false});
            return false;
        }
        else {
            this.setState({ inputStyle: styles.validCode });
            this.setState({valid: true});
            return false;
        }
        return false;
    }

    onChangeText(code: string) {
        this.setState({code})
        this.validate(code);
    }

    onDone() {
        if( !this.state.isGettingInfo && this.state.valid ) {
            this.setState({isGettingInfo: true})
            var url = ['http://188.166.222.158:8080/student/', this.state.code].join('');
            if( this.props.student.code != this.state.code) {
                fetch( url, {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json, text/plain, */*',
                        'Content-Type': 'application/json'
                    }
                })
                .then(res=>res.json())
                .then(res => {
                    // console.log('res ------------------');
                    // console.log(url);
                    // console.log(res)
                    if( res && res.code ) {
                        this.props.setInfo(res);
                        Actions[scenenames.noodleBoard]();
                    }
                    else {
                        this.setState({ inputStyle: styles.wrongCode });
                    }
                    this.setState({isGettingInfo: false})
                })
                .catch((error) => {
                    this.setState({isGettingInfo: false})
                    console.error(error);
                });
            }
            else {
                Actions[scenenames.noodleBoard]();
                this.setState({isGettingInfo: false})
            }
        }
        else {
            this.setState({ inputStyle: styles.wrongCode });
        }

    }


  render() {
    return (
      <Container style={styles.container}>
          <Header>
             <Body>
                <Title>{Labels.person.title}</Title>
             </Body>
          </Header>
          <Content style={{flex: 1}}>
              <View style={styles.bg}>
                    <Card style={{flex: 1}}>
                        <CardItem>
                            <Grid>
                                <Row style={{flex: 1, margin: 5}}>
                                    <Item style={{flex: 1, margin: 5}}>
                                        <Label>{Labels.person.info.fullname}</Label>
                                        <Text>{this.props.student.fullname}</Text>
                                    </Item>
                                </Row>
                                <Row style={{flex: 1, margin: 5}}>
                                    <Item style={{flex: 1, margin: 5}}>
                                        <Label>{Labels.person.info.school}</Label>
                                        <Text>đại học Công Nghệ Hà Nội - VNU</Text>
                                    </Item>
                                </Row>
                                <Row style={{flex: 1, margin: 5}}>
                                    <Item style={{flex: 1, margin: 5}}>
                                        <Label>{Labels.person.info.birthday}</Label>
                                        <Text>{this.props.student.birthday}</Text>
                                    </Item>
                                </Row>
                                <Row style={{flex: 1, margin: 5}}>
                                    <Item style={{flex: 1, margin: 5}}>
                                        <Label>{Labels.person.info.klass}</Label>
                                        <Text>{this.props.student.klass}</Text>
                                    </Item>
                                </Row>
                            </Grid>
                        </CardItem>

                        <CardItem style={{flex: 1}}>
                                <Grid style={{flex: 1}}>
                                    <Row style={{flex: 1}}>
                                        <Item style={{...styles.input, ...this.state.inputStyle}}>
                                          <Icon active name="person" />
                                          <Input placeholder='Student Code' value={this.state.code} onChangeText={this.onChangeText.bind(this)} />
                                        </Item>
                                    </Row>
                                    <Row style={{flex: 1}}>
                                        <Item style={{flex: 1, marginBottom: 20}}>
                                            <Icon name="alarm"/>
                                              <Picker
                                                     supportedOrientations={['portrait','landscape']}
                                                     selectedValue={this.state.selectedOne}
                                                     onValueChange={this.onValueChange.bind(this)}
                                                     style={{flex:0.35}}>
                                                     <Picker.Item label={Labels.person.term['2016-2017-1']} value={Values.person.term['2016-2017-1']} />
                                                     <Picker.Item label={Labels.person.term['2016-2017-2']} value={Values.person.term['2016-2017-2']} />
                                                </Picker>
                                        </Item>
                                    </Row>
                                    <Row style={{flex: 1}}>
                                        <Item style={{flex: 1, flexDirection: 'row', margin: 5, justifyContent:'center', borderWidth: 0}}>
                                            <Button full style={styles.btn} onPress={ this.onDone.bind(this) } >
                                              <Text>Done</Text>
                                            </Button>
                                        </Item>
                                    </Row>
                                </Grid>
                        </CardItem>
                   </Card>
                </View>
          </Content>
      </Container>
    );
  }
}

function bindActions(dispatch) {
  return {
    setInfo: info => dispatch(setInfo(info))
  };
}

function mapStateToProps(state) {
    return {
        student: state.user,
    }
}


export default connect(mapStateToProps, bindActions)(Person);
