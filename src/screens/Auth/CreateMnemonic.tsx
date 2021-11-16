import React, { useState } from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import Toast from 'react-native-simple-toast';
import * as bip39 from 'bip39'
import * as bip32 from 'bip32';
import { payments, networks, Network } from 'bitcoinjs-lib';
import { useRecoilState } from 'recoil';
import { walletState } from '../../store/atoms';
import {wallet} from '../../type'
type p2wpkhParams = {
    pubkey: Buffer;
    network?: Network;
};


const CreateMnemonic = ({ navigation }: any) => {
    const [copiedText, setCopiedText] = useState('');
    const [wallets,addWallets] = useRecoilState(walletState);

    const copyToClipboard = () => {
        Clipboard.setString(copiedText);
        Toast.show("클립보드에 복사되었습니다.");
    };

    const generateMnemonic = () => {
        const seed = bip39.generateMnemonic();
        setCopiedText(seed);
    }

    const createWallet = async () => {
        const seed = bip39.mnemonicToSeedSync(copiedText);
        // 마스터 키 생성
        const root = bip32.fromSeed(seed);
        // 이더리움 차일드 개인키 생성
        const xPrivKey = root.derivePath("m/44'/60'/0'/0/0");
        const params: p2wpkhParams = {
            pubkey: xPrivKey.publicKey,
        };
        params.network = networks.testnet;
        const address = payments.p2wpkh(params).address?.toString();
        const wallet : wallet = {
            name : "이더리움",
            coinType : 'eth',
            symbol:"eth",
            address : address
        }
        wallets.add(wallet);
        addWallets(wallets)
        

    }

    return (
        <View>
            <View style={{ alignItems: 'center' }}>
                <Text
                    style={[{ height: 70, width: 200, borderWidth: 1 }, styles.temp]}
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
                    onPress={createWallet}
                    style={styles.temp}
                >
                    <Text>지갑 생성</Text>
                </TouchableOpacity>
                <FlatList
                data={Array.from(wallets)}
                keyExtractor={item => item.name}
                renderItem={({ item }) => {
                    return <Text>
                        {item.address}
                    </Text>
                }}
            >
            </FlatList>
            </View>
        </View>
    );
};

export default CreateMnemonic;

const styles = StyleSheet.create({
    temp: {
        marginVertical: 20
    }
})