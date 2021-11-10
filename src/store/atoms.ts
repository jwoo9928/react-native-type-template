import AsyncStorage from '@react-native-async-storage/async-storage';
import { atom, selector, selectorFamily } from 'recoil';

//const { persistAtom } = recoilPersist({})

export const textState = atom<string>({
    key:'textState', // unique ID
    default: '' //default value
})

export const charCountState = selector({
    key: 'charCountState',
    get: ({ get }) => {
        const text = get(textState);
        return text.length;
    },
})