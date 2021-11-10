import React, { useState } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRecoilState, useRecoilValue } from 'recoil';
import { charCountState, textState } from '../../store/atoms';

const Home = ({ navigation }: any) => {
    const [text, setText] = useRecoilState(textState); //전역 상태관리
    // const [text,setText] = useState(''); ..????    //로컬 상태 관리

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
                    style={{marginHorizontal:10}}
                >
                    <Text>BiFi</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Send")}
                    style={{marginHorizontal:10}}
                >
                    <Text>Send</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Token")}
                    style={{marginHorizontal:10}}
                >
                    <Text>Token</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default Home;