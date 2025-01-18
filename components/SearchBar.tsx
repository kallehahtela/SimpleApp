import { View, Text, StyleSheet, Platform, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { AntDesign, Ionicons } from '@expo/vector-icons';

const SearchBar = () => {
return (
    <TouchableOpacity style={styles.outerContainer}>
        <View style={styles.innerContainer}>
            <AntDesign name='search1' size={24} color='white' />
            <TextInput 
                style={styles.input}
                placeholder='Explore here...' 
                placeholderTextColor='white' 
            />
            
        </View>
    </TouchableOpacity>
    );
};

export default SearchBar

const styles = StyleSheet.create({
    outerContainer: {
        position: 'absolute',
        top: Platform.OS === 'ios' ? 0 : 10,
        marginHorizontal: 20,
        padding: 10,
        width: '80%',
        height: 60,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 20,
    },
    innerContainer: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 5,
    },
    input: {
        color: 'white',
        fontSize: 16,
        marginLeft: 70,
    }
});