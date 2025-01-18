import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'

interface Props {
    header: string;
    onPress?(): void;
}

const ButtonBox: FC<Props> = ({ header, onPress }) => {
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

export default ButtonBox

const styles = StyleSheet.create({
    outerContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        width: '100%',
        borderColor: 'white',
        borderWidth: 1,
        padding: 15,
        borderRadius: 7,
        backgroundColor: 'white'
    },
    buttonText: {
        color: 'black',
        fontWeight: '600',
        textAlign: 'center',
        fontSize: 14,
    },
});