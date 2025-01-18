import { View, Text, SafeAreaView, StyleSheet, ScrollView, FlatList, Image } from 'react-native';
import React from 'react';
import SearchBar from '@/components/SearchBar';
import { posts } from '@/constants/DummyData';


const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.searchBarContainer}>
                <SearchBar />
            </View>
            
            <FlatList
                showsVerticalScrollIndicator={false}
                data={posts}
                keyExtractor={( item ) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.postContainer}>
                        <Image source={{ uri: item.imageUrl }} style={styles.image} />
                        <Text style={styles.posterName}>{item.posterName}</Text>
                        <Text style={styles.posterPosition}>{item.posterPosition}</Text>
                        <Text style={styles.caption}>{item.caption}</Text>
                        <Text style={styles.story}>{item.story}</Text>
                        <Text style={styles.timestamp}>{new Date(item.timestamp).toLocaleString()}</Text>
                    </View>
                )}
            />
        </SafeAreaView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: 'black',
        zIndex: 10,
    },
    searchBarContainer: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'black', // Ensure the background matches
        zIndex: 10,
    },
    scrollContent: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16, // Optional: for padding inside scroll content
        zIndex: 1,
    },
    postContainer: {
        marginVertical: 10,
        marginHorizontal: 15,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 5,
    },
    posterName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
    },
    posterPosition: {
        fontSize: 14,
        color: '#666',
    },
    caption: {
        fontSize: 14,
        marginTop: 5,
        fontWeight: '500',
    },
    story: {
        fontSize: 14,
        marginTop: 5,
    },
    timestamp: {
        fontSize: 12,
        color: '#aaa',
        marginTop: 10,
    },
});