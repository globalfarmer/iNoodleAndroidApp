import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity, Image, StyleSheet
} from 'react-native';

import icBack from '../Main/images/appIcon/back_white.png';
import icLogo from '../Main/images/appIcon/noodles.png';
import SignIn from './SignIn';

export default class Authentication extends Component {
    constructor(props) {
        super(props);
    }

    goBackToMain() {
        const { navigator } = this.props;
        navigator.pop();
    }
    render() {
        const {
            row1, iconStyle, titleStyle,
            container, controlStyle,
            signInStyle,
            activeStyle, inactiveStyle
        } = styles;
        
        return (
            <View style={container}>
                <View style={row1}>
                    <TouchableOpacity onPress={this.goBackToMain.bind(this)}>
                        <Image source={icBack} style={iconStyle} />
                    </TouchableOpacity>
                    <Text style={titleStyle}>Noodles</Text>
                    <Image source={icLogo} style={iconStyle} />
                </View>

                <SignIn goBackToMain={this.goBackToMain.bind(this)} />
                
                <View style={{justifyContent:'center'}}>
                    <Text>Welcome to Noodles</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green',
        padding: 20,
        justifyContent: 'space-between'
    },
    row1: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
    titleStyle: { color: '#FFF', fontFamily: 'Avenir', fontSize: 30 },
    iconStyle: { width: 30, height: 30 },
    controlStyle: {
        flexDirection: 'row',
        alignSelf: 'stretch'
    },
    signInStyle: {
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingVertical: 15,
        flex: 1,
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20,
        marginRight: 1
    },
});

