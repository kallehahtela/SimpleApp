import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BottomNavigator } from './BottomNavigator';
import HomeScreen from '@/app/(tabs)/HomeScreen';
import AddScreen from '@/app/(tabs)/AddScreen';
import NotificationScreen from '@/app/(tabs)/NotificationScreen';
import AccountScreen from '@/app/(tabs)/AccountScreen';
import LoginScreen from '@/app/(tabs)/LoginScreen';
import RegisterScreen from '@/app/(tabs)/RegisterScreen';
import EntryScreen from '@/app/(tabs)/EntryScreen';

type RootStackParamList = {
    Tabs: undefined; // this will be the TabNavigator
    Home: undefined;
    Add: undefined;
    Notification: undefined;
    Account: undefined;
    Login: undefined;
    Register: undefined;
    Entry: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const StackNavigator: React.FC = () => {
    return (
        <Stack.Navigator initialRouteName="Tabs">
            <Stack.Screen name="Entry" component={EntryScreen} options={{headerShown: false}} />
            <Stack.Screen name="Tabs" component={BottomNavigator} options={{headerShown: false}} />
            <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Add" component={AddScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Notification" component={NotificationScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Account" component={AccountScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown: false}}/>
        </Stack.Navigator>
    );
};