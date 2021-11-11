import React, { useState } from 'react';
import { Text, View, StyleSheet, FlatList, Pressable } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRecoilState, useRecoilValue } from 'recoil';
import { charCountState, textState } from '../../store/atoms';
import ReactNativeBiometrics from 'react-native-biometrics'

const Home = ({ navigation }: any) => {
    const [text, setText] = useRecoilState(textState); //전역 상태관리
    // const [text,setText] = useState(''); ..????    //로컬 상태 관리
    const { biometryType } : any = ReactNativeBiometrics.isSensorAvailable();

    const length = useRecoilValue(charCountState);
    return (
        <SafeAreaView>
            <Text>1</Text>
            <TouchableOpacity
                onPress={() => setText(text + 1)}
                style={{marginHorizontal:10}}
            >
                <Text>버튼</Text>
                <Text>{text}</Text>
                <Text>{length}</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("BiFi")}
                    style={styles.touchable}
                >
                    <Text>BiFi</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Send")}
                    style={styles.touchable}
                >
                    <Text>Send</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Token")}
                    style={styles.touchable}
                >
                    <Text>Token</Text>
                </TouchableOpacity>
                <Pressable
                    style={({pressed})=> [
                        {backgroundColor: pressed ? "blue": "red",marginRight:20}
                    ]}
                >
                    <Text>pressable</Text>
                </Pressable>
                <Pressable
                    style={({pressed})=> [
                        {width: pressed ? 100 : 80, backgroundColor:"red",}
                    ]}
                >
                    <Text>pressable</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
};

export default Home;

const styles = StyleSheet.create({
    touchable : {
        width:50,
        backgroundColor:"blue",
        marginHorizontal:10
    },
})