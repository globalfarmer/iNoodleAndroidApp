import { AsyncStorage } from 'react-native';

const getCode = async () => {
    try {
        const value = await AsyncStorage.getItem('@code');
        if (value !== null) {
            return value;
        }
        return '';
    } catch (error) {
    // Error retrieving data
        return '';
    }
};

export default getCode;
