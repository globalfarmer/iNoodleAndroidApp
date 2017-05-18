
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
};
