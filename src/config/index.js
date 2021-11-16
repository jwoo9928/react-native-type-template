import {
    Dimensions,
    Platform,
} from 'react-native';


const APP_VERSION = {
    android: '0.0.1',
    ios: '0.0.1'
}

const PLATFORM = Platform.select({
    android: 'android',
    ios: 'ios'
})

const WINDOW_HEIGHT = Dimensions.get('window').height;
const WINDOW_WIDTH = Dimensions.get('window').width;

export default {
    PLATFORM,
    WINDOW_HEIGHT,
    WINDOW_WIDTH,
    APP_VERSION
};
