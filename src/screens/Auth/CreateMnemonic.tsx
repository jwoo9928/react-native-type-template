import React, { useState } from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import Toast from 'react-native-simple-toast';
import * as bip39 from 'bip39'
import * as bip32 from 'bip32';
import { payments, networks, Network } from 'bitcoinjs-lib';
import { useRecoilState } from 'recoil';
import { countState, walletState } from '../../store/atoms';
import { wallet } from '../../type'
import ethUtil ,{pubToAddress,toChecksumAddress,addHexPrefix}from 'ethereumjs-util';
import config from '../../config';
type p2wpkhParams = {
    pubkey: Buffer;
    network?: Network;
};


const CreateMnemonic = ({ navigation }: any) => {
    const [copiedText, setCopiedText] = useState('');
    const [wallets, addWallets] = useRecoilState(walletState);
    const [count,setCount] = useRecoilState(countState);

    const copyToClipboard = () => {
        Clipboard.setString(copiedText);
        Toast.show("클립보드에 복사되었습니다.");
    };

    const generateMnemonic = () => {
        const seed = bip39.generateMnemonic();
        setCopiedText(seed);
    }

    const createWalletTest = () => {
        const seed = bip39.mnemonicToSeedSync(copiedText);
        // 마스터 키 생성
        const root = bip32.fromSeed(seed);
        // 이더리움 차일드 개인키 생성
        const xPrivKey = root.derivePath("m/44'/60'/0'/0/0");
        const privKey = xPrivKey?.privateKey?.toString('hex');
        // 이더리움 주소 생성
        let address = pubToAddress(xPrivKey.publicKey, true).toString('hex')
        // 이더리움 EIP-55 체크섬 주소로 변환
        address = toChecksumAddress(addHexPrefix(address))
        const wallet: wallet = {
            name: "이더리움",
            coinType: 'eth',
            symbol: "eth",
            address: address,
            balance:''
        }
        const data = {
            wallet : wallet,
            privKey : privKey
        }
        addWallets([
            ...wallets,
            data
        ])
    }

    return (
        <View style={{ alignItems: 'center' }}>
            <Text
                style={[styles.nmemonic]}
            >
                {copiedText}
            </Text>
            <TouchableOpacity
                onPress={generateMnemonic}
                style={styles.temp}
            >
                <Text>니모닉 생성</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={copyToClipboard}
                style={styles.temp}
            >
                <Text>클립보드 복사</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=>{
                    createWalletTest()
                    setCount(count+1);
                    navigation.goBack();
                }}
                style={styles.temp}
                disabled={copiedText==''}
            >
                <Text>{`지갑 생성${count}`}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default CreateMnemonic;

const styles = StyleSheet.create({
    temp: {
        marginVertical: 20,
        borderWidth:1,
        borderRadius:30,
        width:config.WINDOW_WIDTH-300,
        height:30,
        alignItems:'center',
        justifyContent:'center'
    },
    nmemonic : {
        height: 90, width: config.WINDOW_WIDTH-32, borderWidth: 1,
        borderColor:'gray',
        marginTop:60
    }
})