import React, { Component } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';
import requireInfo from '../../api/requireInfo.js';
import global from '../global.js';

import saveCode from '../../api/saveCode.js';
import saveTerm from '../../api/saveTerm.js';

export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            code: '',
            term: ''
        };
    }

    onSignIn() {
        const { code, term } = this.state;
        //console.log(code);
        requireInfo(code, term)
        .then(res => {
            global.code(res.code);
            global.term(res.term);
            this.props.goBackToMain();
            
            saveCode(res.code);
            saveTerm(res.term);
            
        })
        .catch(err => console.log(err));
    }

    render() {
        const { inputStyle, bigButton, buttonText } = styles;
        const { code, term } = this.state;
        return (
            <View>
                <TextInput
                    style={inputStyle}
                    placeholder="Enter your code"
                    value={code}
                    onChangeText={text => this.setState({ code: text })}
                />
                <TextInput
                    style={inputStyle}
                    placeholder="Enter your term"
                    value={term}
                    onChangeText={text => this.setState({ term: text })}
                />
                <TouchableOpacity style={bigButton} onPress={this.onSignIn.bind(this)}>
                    <Text style={buttonText}>SIGN IN NOW</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputStyle: {
        height: 50,
        backgroundColor: '#fff',
        marginBottom: 10,
        borderRadius: 20,
        paddingLeft: 30
    },
    bigButton: {
        height: 50,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontFamily: 'Avenir',
        color: '#fff',
        fontWeight: '400'
    }
});
