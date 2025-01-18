import React, { useState} from 'react'
import { View, Text, StyleSheet, StatusBar, SafeAreaView } from 'react-native'
import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
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