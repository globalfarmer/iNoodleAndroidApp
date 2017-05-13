import { AsyncStorage } from 'react-native';

const saveTerm = async (term) => {
    try {
        await AsyncStorage.setItem('@term', term);
    } catch (e) {
        return e;
    }
};

export default saveTerm;
