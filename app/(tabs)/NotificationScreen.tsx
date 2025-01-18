import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'

const NotificationScreen = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.outerContainer}>
                <Text style={styles.text}>
                    Notification Page
                </Text>
            </View>
        </SafeAreaView>
    );
};

export default NotificationScreen

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