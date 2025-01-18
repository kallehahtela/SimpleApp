import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { SafeAreaView } from 'react-native-safe-area-context';
import InputField from '@/components/InputField';
import ButtonBox from '@/ui/ButtonBox';
import { AntDesign } from '@expo/vector-icons';

type RootStackParamList = {
    Tabs: undefined;
    Login: undefined;
    Home: undefined;
};

const RegisterScreen: React.FC = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return (
        <SafeAreaView style={styles.safeArea}>
        <View style={styles.outerContainer}>
            <View style={styles.innerContainer}>
                <Text style={styles.headerText}>
                    Create an account
                </Text>

                <View style={styles.inputContainer}>

                    <InputField placeholder='Enter your name'/>
                    <InputField placeholder='Enter your email'/>
                    <InputField placeholder='Enter your password'/>
                    <InputField placeholder='Confirm your password'/>

                    <View style={styles.buttonContainer}>
                        <ButtonBox header='Sign Up' onPress={() => navigation.navigate('Tabs')}/>
                    </View>

                    <Text style={styles.orText}>
                        Or Register with
                    </Text>

                    <View style={styles.mediaIconContainer}>
                        <TouchableOpacity style={styles.iconContainer}>
                            <AntDesign name='linkedin-square' size={32} color='white' />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.iconContainer}>
                            <AntDesign name='google' size={32} color='white' />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.iconContainer}>
                            <AntDesign name='apple1' size={32} color='white' />
                        </TouchableOpacity>
                    </View>

                    
                </View>
                <View style={styles.bottomContainer}>
                        <Text style={styles.needAccountText}>
                            Already have an account?
                        </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Text style={styles.registerText}>
                                Login
                            </Text>
                        </TouchableOpacity>
                    </View>
            </View>
        </View>
    </SafeAreaView>
    );
};

export default RegisterScreen

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
        padding: 16, // Optional: for padding inside scroll content
        zIndex: 1,
        backgroundColor: 'black',
    },
    innerContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginHorizontal: 50,
        marginVertical: 10, 
    },
    headerText: {
        color: 'white',
        fontSize: 25,
    },
    inputContainer: {
        marginTop: 20,
        width: '100%',
    },
    buttonContainer: {
        marginTop: 20,
    },
    orText: {
        marginTop: 20,
        color: 'white',
        textAlign: 'center',
    },
    mediaIconContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginTop: 15,
    },
    iconContainer: {
        backgroundColor: 'transparent',
        borderRadius: 5,
        height: 60,
        width: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        bottom: -230,
    },
    needAccountText: {
        color: 'white',
    },
    registerText: {
        marginLeft: 10,
        color: 'lightblue',
        fontWeight: '600'
    }
});