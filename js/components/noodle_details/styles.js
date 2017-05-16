
const React = require('react-native');

const { StyleSheet, Dimensions } = React;

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default {
  container: {
    backgroundColor: '#FBFAFA',
  },
  downloadContainer: {
      backgroundColor: '#FBFAFA',
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
  },
  row: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 15,
    alignItems: 'center',
  },
  mt: {
    marginTop: 18,
  },
  webview: {
      width: deviceWidth,
      height: deviceHeight
  },
  pdf: {
      width: deviceWidth,
      height: deviceHeight
  }
};
