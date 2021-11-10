import React, { useState } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

const Temp = ({navigation} :any) => {
    return (
        <SafeAreaView>
            <TouchableOpacity onPress={()=>navigation.navigate("Test")}>
            <View>
                <Text>move to test page</Text>
            </View>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default Temp;
