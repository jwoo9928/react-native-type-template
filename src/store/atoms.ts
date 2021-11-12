//import { PersistStorage, recoilPersist } from 'recoil-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { atom, selector } from 'recoil';

// const { persistAtom } = recoilPersist({
//     key: 'recoil-persist',
//     storage: AsyncStorage as PersistStorage
// })

//recoil 셋팅
export const textState = atom<string>({
    key:'textState', // unique ID
    default: '', //default value
    //effects_UNSTABLE: [persistAtom],
})

export const countState = atom<Number>({
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