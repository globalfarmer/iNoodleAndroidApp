
import React, { Component } from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import { Label, Container, Content, Item, Input, Button, Icon} from 'native-base';
import {View, Text, Picker, Card, CardItem, Thumbnail, Left, Right, Body, Title, Header } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { Grid, Row } from 'react-native-easy-grid';

import { setUser } from '../../actions/user';
import styles from './styles';
import scenenames from '../../scenenames';

const background = require('../../../images/shadow.png');

class Person extends Component {

  static propTypes = {
    setUser: React.PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = {
        name: '',
        selectedItem: undefined,
        defaultOne: 'HK II 2016-2017',
        results: {
            items: []
        }
    };
  }

  setUser(name) {
    this.props.setUser(name);
  }

    onValueChange (value: string) {
        this.setState({
            selectedOne : value
        });
    }


  render() {
    return (
      <Container style={styles.container}>
          <Header>
             <Body>
                <Title>Student Info</Title>
             </Body>
          </Header>
          <Content>
              <View style={styles.bg}>
                    <Card>
                        <CardItem>
                            <Grid>
                                <Row style={{flex: 1, margin: 5}}>
                                    <Item>
                                        <Text>Do Viet Anh</Text>
                                    </Item>
                                </Row>
                                <Row style={{flex: 1, margin: 5}}>
                                    <Item>
                                        <Label>Truong</Label>
                                        <Text>Dai hoc cong nghe</Text>
                                    </Item>
                                </Row>
                                <Row style={{flex: 1, margin: 5}}>
                                    <Item>
                                        <Label>Ngay Sinh</Label>
                                        <Text>1/1/1996</Text>
                                    </Item>
                                </Row>
                                <Row style={{flex: 1, margin: 5}}>
                                    <Item>
                                        <Label>Lop</Label>
                                        <Text>K58CA</Text>
                                    </Item>
                                </Row>
                            </Grid>
                        </CardItem>

                        <CardItem>
                            <Body>
                                <Item style={styles.input}>
                                  <Icon active name="person" />
                                  <Input placeholder='Student Code' onChangeText={name => this.setState({ name })} type='numberic'/>
                                </Item>
                                <Item>
                                    <Icon name="alarm"/>
                                    <Label>HK:</Label>
                                    <Picker
                                           supportedOrientations={['portrait','landscape']}
                                           selectedValue={this.state.selectedOne}
                                           onValueChange={this.onValueChange.bind(this)}
                                           style={{flex: 0.15}}>
                                           <Picker.Item label="1" value="hk1" />
                                           <Picker.Item label="2" value="hk2" />
                                      </Picker>
                                     <Label>Năm học:</Label>
                                      <Picker
                                             supportedOrientations={['portrait','landscape']}
                                             selectedValue={this.state.selectedOne}
                                             onValueChange={this.onValueChange.bind(this)}
                                             style={{flex:0.35}}>
                                             <Picker.Item label="2015-2016" value="2015-2016" />
                                             <Picker.Item label="2016-2017" value="2016-2017" />
                                        </Picker>
                                </Item>
                                <Item style={{flex: 1, flexDirection: 'row'}}>
                                    <Button full style={styles.btn} onPress={() => Actions[scenenames.noodleBoard]()} >
                                      <Text>Done</Text>
                                    </Button>
                                </Item>
                            </Body>
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
    setUser: name => dispatch(setUser(name))
  };
}


export default connect(null, bindActions)(Person);
