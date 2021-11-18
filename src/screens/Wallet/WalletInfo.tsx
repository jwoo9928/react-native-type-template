import Clipboard from '@react-native-clipboard/clipboard';
import { ethers } from 'ethers';
import React, { useEffect, useMemo, useState } from 'react';
import { Text, View, StyleSheet, FlatList, Pressable } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SimpleToast from 'react-native-simple-toast';
import { wallet } from '../../type';


interface walletProps  {
    wallet : wallet,
    page : number,
    setPage : Function
}

const WalletInfo = ({wallet,page, setPage} : walletProps) => {

    const network = ethers.providers.getNetwork('ropsten')
    const provider = ethers.getDefaultProvider("ropsten")

    const pollingINterval = 20 * 1000;

    const checkAddress = (address : string) => {
        if (!/^(0x)?[0-9a-f]{40}$/i.test(address)) {
            return false;
        }
        return true;
    };

    useEffect(()=> {
        let testAddress = "0x02F024e0882B310c6734703AB9066EdD3a10C6e0";
        provider.getBalance(wallet.address).then((balance) => {
            const etherString = ethers.utils.formatEther(balance);
        }).catch(e => {
            console.log(e)
        });
        console.log("check address : ",checkAddress(wallet.address))
    },[])

    return(
        <View style={styles.container}>
            <Text style={{fontSize:30,paddingVertical:30}}>{`0.00 ${wallet.coinType}`}</Text>
            <Text>{`₩ 0.00`}</Text>
            <TouchableOpacity
            onPress={()=>{
                Clipboard.setString(wallet.address);
                SimpleToast.show('복사되었습니다.')
            }}
            >
            <Text style={{paddingTop:20}}>{`${wallet.address}`}</Text>
            </TouchableOpacity>
            <View style={styles.buttonView}>
                <TouchableOpacity
                    onPress={() => setPage(page + 1)}
                    style={styles.button}
                >
                    <Text>{`받기`}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default WalletInfo;

const styles = StyleSheet.create({
    container : {
        alignItems:'center',
        justifyContent:"center"
    },
    buttonView : {
        flexDirection:"row",
        marginTop:40
    },
    button : {
        height:30,
        width:120,
        borderRadius:30,
        borderColor:'#3A86F6',
        borderWidth:1,
        justifyContent:"center",
        alignItems:"center"
    }
})