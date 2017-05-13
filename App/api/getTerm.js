import { AsyncStorage } from 'react-native';

const getTerm = async () => {
    try {
        const value = await AsyncStorage.getItem('@term');
        if (value !== null) {
            return value;
        }
        return '';
    } catch (error) {
    // Error retrieving data
        return '';
    }
};

export default getTerm;
