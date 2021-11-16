import {
    Dimensions,
    Platform,
  } from 'react-native';
  
  import {HOST, PORT, BASE_PATH, SERVERTYPE} from '@env';
  
  const config = {
    api: {
      host: HOST,
      port: PORT,
      path: BASE_PATH,
    },
  };
  
  const APP_VERSION = {
      android : '0.0.1',
      ios : '0.0.1'
  }
  
  const PLATFORM = Platform.select({
    android: 'android',
    ios: 'ios'
  })
  
  const WINDOW_HEIGHT = Dimensions.get('window').height;
  const WINDOW_WIDTH  = Dimensions.get('window').width;
  
  export default {
    API_PATH,
    PLATFORM,
    WINDOW_HEIGHT,
    WINDOW_WIDTH,
    SERVERTYPE,
    APP_VERSION
  };
  