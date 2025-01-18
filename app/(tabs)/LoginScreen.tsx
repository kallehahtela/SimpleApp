import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import InputField from '@/components/InputField';
import ButtonBox from '@/ui/ButtonBox';
import { AntDesign } from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

type RootStackParamList = {
    Tabs: undefined;
    Register: undefined;
    Home: undefined;
};

const LoginScreen: React.FC = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.outerContainer}>
                <View style={styles.innerContainer}>
                    <Text style={styles.headerText}>
                        Welcome back! Happy
                        to see you Again!
                    </Text>

                    <View style={styles.inputContainer}>

                        <InputField placeholder='Enter your email'/>
                        <InputField placeholder='Enter your password'/>

                        <View style={styles.forgotContainer}>
                            <Text style={styles.forgotPassword}>
                                Forgot Password?
                            </Text>
                        </View>

                        <View style={styles.buttonContainer}>
                            <ButtonBox header='Login' />
                        </View>

                        <Text style={styles.orText}>
                            Or Login with
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
                                Don't have an account?
                            </Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                                <Text style={styles.registerText}>
                                    Register Now!
                                </Text>
                            </TouchableOpacity>
                        </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default LoginScreen

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
    forgotContainer: {
       position: 'relative',
       top: 10,
       left: 140,
    },
    forgotPassword: {
        color: 'white',
        fontSize: 12,
        fontWeight: '800'
    },
    buttonContainer: {
        marginTop: 40,
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