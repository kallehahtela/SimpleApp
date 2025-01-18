import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { FC } from 'react'

interface Props {
    placeholder: string;
}

const InputField: FC<Props> = ({ placeholder }) => {
    return (
        <View style={styles.outerContainer}>
            <TextInput 
                style={styles.input}
                placeholderTextColor='white'
                placeholder={placeholder}
            />
        </View>
    );
};

export default InputField

const styles = StyleSheet.create({
    outerContainer: {
        marginHorizontal: 2,
        marginVertical: 5,
        width: '100%',
    },
    input: {
        color: 'white',
        padding: 10,
        borderBottomColor: 'white',
        borderBottomWidth: 1,
    }
});