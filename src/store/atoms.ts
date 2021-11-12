//import { PersistStorage, recoilPersist } from 'recoil-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { atom, selector } from 'recoil';
import { persistentAtom } from 'recoil-persistence/react-native'

//recoil 셋팅
export const textState = persistentAtom<string>({
    key:'textState', // unique ID
    default: '', //default value
})

export const countState = persistentAtom<Number>({
    key:"countState",
    default : 0
})

//selector 셋팅
export const charCountState = selector({
    key: 'charCountState',
    get: ({ get }) => {
        //saveAppData();
        const text = get(textState);
        return text.length;
    },
})


export const countInputState = selector({
    key :'countInputState',
    get : ({get}) => {
        return `current count is ${get(countState)}`
    }
})

// const saveAppData = async () => {
//     try {
//       const newValue = {
//        textState: textState
//       }
//       const jsonValue = JSON.stringify(newValue);
//       await AsyncStorage.mergeItem('appInfo', jsonValue);
//     } catch (e) {
//       console.log('saveLocalData error:', e);
//     }
//   };