import { Button, StyleSheet, TextInput, View } from 'react-native';

type GoalInputProps = {
    goalInputHandler: (value: string) => void;
    addGoalHandler: () => void;
    enterText: string;
};

const GoalInput = ({
    goalInputHandler,
    addGoalHandler,
    enterText
}: GoalInputProps) => {
    return (
        <View style={GoalInputStyle.inputContainer}>
            <TextInput
                onChangeText={goalInputHandler}
                style={GoalInputStyle.TextInput}
                placeholder="Your course goal..."
                value={enterText}
            />
            <Button onPress={addGoalHandler} title="ADD Goal" />
        </View>
    );
};

const GoalInputStyle = StyleSheet.create({
    inputContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        padding: 15,
        borderBottomWidth: 2
    },
    TextInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '75%',
        marginRight: 8,
        padding: 8
    }
});

export default GoalInput;
