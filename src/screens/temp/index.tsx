import React, { useState } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';

const Temp = ({ navigation }: any) => {
    return (
        <WebView
            source={{ uri: 'https://app.bifi.finance/lend' }}
            style={{ marginTop: 20 }}
            contentMode="mobile"
            textZoom={200}
            showsVerticalScrollIndicator={false}
        />
    );
};

export default Temp;