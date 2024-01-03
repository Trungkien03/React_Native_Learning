import React from 'react';
import { Button, StyleSheet, TextInput, View, Image } from 'react-native';

type GoalInputProps = {
    goalInputHandler: (value: string) => void;
    addGoalHandler: () => void;
    enterText: string;
    isModalVisible: boolean;
    setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const GoalInput = ({
    goalInputHandler,
    addGoalHandler,
    enterText,
    isModalVisible,
    setIsModalVisible
}: GoalInputProps) => {
    return (
        <View style={GoalInputStyle.inputContainer}>
            <Image
                source={{
                    uri: 'https://static.thenounproject.com/png/2191332-200.png'
                }}
                style={GoalInputStyle.image}
            />
            <TextInput
                onChangeText={goalInputHandler}
                style={GoalInputStyle.textInput}
                placeholder="Your course goal..."
                placeholderTextColor={'white'}
                value={enterText}
            />
            <View style={GoalInputStyle.buttonLayout}>
                <View style={GoalInputStyle.buttonContainer}>
                    <Button onPress={addGoalHandler} title="ADD GOAL" />
                </View>
                <View style={GoalInputStyle.buttonContainer}>
                    <Button
                        title="CANCEL"
                        onPress={() => setIsModalVisible(!isModalVisible)}
                        color={'red'}
                    />
                </View>
            </View>
        </View>
    );
};

const GoalInputStyle = StyleSheet.create({
    inputContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        paddingTop: 50,
        borderBottomWidth: 2,
        backgroundColor: '#5e0acc'
    },
    image: {
        width: 200, // Set a specific width for the image
        height: 200, // Set a specific height for the image
        resizeMode: 'contain', // Adjust the resizeMode as needed
        tintColor: 'white'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        color: 'white',
        width: '90%',
        marginRight: 8,
        padding: 8
    },
    buttonLayout: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%'
    },
    buttonContainer: {
        flex: 1,
        padding: 10
    }
});

export default GoalInput;
