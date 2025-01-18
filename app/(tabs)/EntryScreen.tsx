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

const EntryScreen: React.FC = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.outerContainer}>
                
                <View style={styles.innerContainer}> 
                    <ButtonBox header='Login' onPress={() => navigation.navigate('Login')}/>
                    <ButtonBorder header='Register' onPress={() => navigation.navigate('Register')} />

                    <TouchableOpacity onPress={() => navigation.navigate('Tabs')}>
                        <Text style={styles.text}>
                            Continue as guest
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default EntryScreen

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: 'black',
        zIndex: 2,
    },
    outerContainer: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16, // Optional: for padding inside scroll content
        zIndex: 1,
        backgroundColor: 'black',
        marginHorizontal: 25,

    },
    innerContainer: {
        width: '100%',
        position: 'absolute',
        bottom: 20,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10, 
    },
    text: {
        marginTop: 20,
        color: 'lightblue',
        fontWeight: '700',
        fontSize: 15,
    }
});