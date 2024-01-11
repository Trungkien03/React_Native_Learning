import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GlobalStyles } from '../../constants/CommonConstant';
import Button from './Button';

interface ErrorOverLayProps {
    message: string;
    onConfirm: () => void;
}

const ErrorOverLay: FC<ErrorOverLayProps> = ({ message, onConfirm }) => {
    return (
        <View style={styles.container}>
            <Text style={[styles.title, styles.text]}>An error occurred!</Text>
            <Text style={styles.message}>{message}</Text>
            <Button onPress={onConfirm}>Okay</Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary700
    },
    text: {
        color: 'white',
        alignItems: 'center',
        marginBottom: 8
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    message: {
        color: 'red',
        fontSize: 16,
        fontWeight: 'bold',
        padding: 24
    }
});

export default ErrorOverLay;
