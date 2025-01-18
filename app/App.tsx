import React from 'react'
import { View, Text, StyleSheet, StatusBar, SafeAreaView } from 'react-native'
import { registerRootComponent } from 'expo';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

/* Screens */
import HomeScreen from './(tabs)/HomeScreen';
import AddScreen from './(tabs)/AddScreen';
import NotificationScreen from './(tabs)/NotificationScreen';
import AccountScreen from './(tabs)/AccountScreen';
import LoginScreen from './(tabs)/LoginScreen';
import { StackNavigator } from '@/navigation/StackNavigator';

const App = () => {
  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </>
  );
};

registerRootComponent(App);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 100,
  },
  text: {
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  }
});