
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { WebView, View } from 'react-native';

import styles from './styles';
import { ANNOUNCE } from '../../actions/noodleboard';


class AnnounceDetails extends Component {
    render() {
        return (
            <View>
                <WebView
                    source={{uri: this.props.link}}
                    style={styles.webview}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    startInLoadingState={true}
                />
            </View>
        )
    }
}

const mapStateToProps = state => ({
  link: ["http://", state.noodleDetails.data].join("")
});

export default connect(mapStateToProps)(AnnounceDetails);
