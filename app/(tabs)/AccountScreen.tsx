import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Button} from 'react-native'
import React, { FC } from 'react'
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import ButtonBox from '@/ui/ButtonBox';
import ButtonBorder from '@/ui/ButtonBorder';

type RootStackParamList = {
    Tabs: undefined;
    Login: undefined;
    Register: undefined;
    Home: undefined;
};

const AccountScreen: React.FC = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.outerContainer}>
                <ButtonBox header='Login' onPress={() => navigation.navigate('Login')}/>
            </View>
        </SafeAreaView>
    );
};

export default AccountScreen

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: 'black',
        zIndex: 2,
    },
    outerContainer: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16, // Optional: for padding inside scroll content
        zIndex: 1,
        backgroundColor: 'black',
    },
    text: {
        color: 'white',
    }
});