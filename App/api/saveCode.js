import { AsyncStorage } from 'react-native';

const saveCode = async (code) => {
    try {
        await AsyncStorage.setItem('@code', code);
    } catch (e) {
        return e;
    }
};

export default saveCode;
