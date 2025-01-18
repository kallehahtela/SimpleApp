import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import SearchBar from '@/components/SearchBar';

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.searchBarContainer}>
                <SearchBar />
            </View>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                
            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: 'black',
        zIndex: 2,
    },
    searchBarContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white', // Ensure the background matches
        zIndex: 2,
    },
    scrollContent: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16, // Optional: for padding inside scroll content
        zIndex: 1,
    },
});