
const React = require('react-native');
import ReactNative, {
  StyleSheet,
  Text,
  View
} from 'react-native';


const { Dimensions } = ReactNative;

const deviceHeight = Dimensions.get('window').height;

export default {
  container: {
    backgroundColor: '#FBFAFA',
    height: deviceHeight - 100
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
  item: {
      fontSize: 15,
      fontFamily: 'Arial',
  },
  title: {
      fontSize: 18,
      fontFamily: 'Arial',
  },
  cardHeader: {
      fontSize: 17,
      fontFamily: 'Arial',
  },
  footer: {
      fontSize: 16,
      fontFamily: 'Arial',
  }
};
