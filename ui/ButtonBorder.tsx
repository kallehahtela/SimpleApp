import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'

interface Props {
    header: string;
    onPress?(): void;
};

const ButtonBorder: FC<Props> = ({ header, onPress }) => {
    return (
        <View style={styles.outerContainer}>
            <TouchableOpacity
                style={styles.button}
                onPress={onPress}
            >
                <Text style={styles.buttonText}>
                    {header}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default ButtonBorder

const styles = StyleSheet.create({
    outerContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    button: {
        width: '100%',
        borderColor: 'white',
        borderWidth: 1,
        padding: 15,
        borderRadius: 7,
        backgroundColor: 'black'
    },
    buttonText: {
        color: 'white',
        fontWeight: '600',
        textAlign: 'center',
        fontSize: 14,
    },
});