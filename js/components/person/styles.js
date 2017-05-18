
const React = require('react-native');

const { StyleSheet, Dimensions } = React;

const deviceHeight = Dimensions.get('window').height;

export default {
  container: {
      flex: 1,
    backgroundColor: '#FBFAFA',
  },
  wrongCode: {
      borderColor: '#ff0000'
  },
  validCode: {
      borderColor: '#999999'
  },
  shadow: {
    flex: 1,
    width: null,
    height: null,
  },
  bg: {
    flex: 1,
    marginTop: 0,
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 30,
    bottom: 0,
  },
  input: {
    marginBottom: 10,
    flex: 1,
  },
  btn: {
    marginTop: 10,
    alignSelf: 'center',
    },
    item: {
        fontSize: 15,
        fontFamily: 'Arial',
    },
    title: {
        fontSize: 18,
        fontFamily: 'Arial',
    }
};
