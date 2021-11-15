import React, { useEffect, useMemo, useState } from 'react';
import { Text, View, StyleSheet, FlatList, Pressable } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRecoilState, useRecoilValue } from 'recoil';
import { charCountState, textState } from '../../store/atoms';
import ReactNativeBiometrics from 'react-native-biometrics'
import Clipboard from '@react-native-clipboard/clipboard';
import Toast from 'react-native-simple-toast';

const Home = ({ navigation }: any) => {
    const [text, setText] = useRecoilState(textState); //전역 상태관리
    const { biometryType }: any = ReactNativeBiometrics.isSensorAvailable();
    const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const [copiedText, setCopiedText] = useState('');

    const copyToClipboard = () => {
        Clipboard.setString('hello world');
        Toast.show("클립보드에 복사되었습니다.")
    };

    const fetchCopiedText = async () => {
        const text = await Clipboard.getString();
        setCopiedText(text);
    };

    useEffect(()=> {
        fetchCopiedText();
    },[copiedText])


    const TestView = () => {
        return (
            <FlatList
                data={testArray}
                keyExtractor={item => item.toString()}
                renderItem={({ item }) => {
                    return <Text>
                        {item}
                    </Text>
                }}
            >
            </FlatList>
        )
    }

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
            <View>
                <TouchableOpacity
                    onPress={copyToClipboard}
                >
                    <Text>클립보드 복사</Text>
                </TouchableOpacity>
                </View>
            <TestView/>
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