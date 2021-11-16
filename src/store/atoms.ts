//import { PersistStorage, recoilPersist } from 'recoil-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { atom, DefaultValue, selector } from 'recoil';
import { persistentAtom } from 'recoil-persistence/react-native'
import { wallet } from '../type';

interface localForageEffectProps {
    setSelf : Function,
    onSet : Function,
}

const localForageEffect = (key: string) => ({ setSelf, onSet }: localForageEffectProps) => {
    const loadPersisted = async () => {
        const savedValue = await AsyncStorage.getItem(key);

        if (savedValue != null) {
            setSelf(JSON.parse(savedValue));
        }
    };
    loadPersisted();

    onSet((newValue: any) => {
        if (newValue instanceof DefaultValue) {
            AsyncStorage.removeItem(key);
        } else {
            AsyncStorage.setItem(key, JSON.stringify(newValue));
        }
    });
};

//recoil 셋팅
export const textState = atom<string>({
    key: 'textState', // unique ID
    default: '', //default value
    effects_UNSTABLE: [
        localForageEffect('test state')
    ]

})

export const countState = atom<number>({
    key: "countState",
    default: 0,
    effects_UNSTABLE: [
        localForageEffect('count state')
    ]

})

export const walletState = atom<Set<any>>({
    key:'walletState',
    default : new Set<any>(),
    effects_UNSTABLE: [
        localForageEffect('wallets state')
    ]
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
    key: 'countInputState',
    get: ({ get }) => {
        return `current count is ${get(countState)}`
    }
})