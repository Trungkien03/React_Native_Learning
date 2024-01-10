import { StyleSheet, Text, View } from 'react-native';
import Input from './Input';
import { FC, useState } from 'react';
import Button from '../UI/Button';

interface ExpenseFormProps {
    onCancel: () => void;
    onSubmit: () => void;
    submitButtonLabel: string;
}

const ExpenseForm: FC<ExpenseFormProps> = ({
    onCancel,
    onSubmit,
    submitButtonLabel
}) => {
    const [inputValues, setInputValues] = useState({
        amount: '',
        date: '',
        description: ''
    });
    const amountChangeHandler = (
        inputIdentifier: keyof typeof inputValues,
        enteredValue: string
    ) => {
        setInputValues((currentInputValue) => {
            return {
                ...currentInputValue,
                [inputIdentifier]: enteredValue
            };
        });
    };
    return (
        <View style={styles.formContainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Your Expense</Text>
            </View>
            <View style={styles.inputRow}>
                <Input
                    style={styles.textInput}
                    label="Amount"
                    textInputConfig={{
                        keyboardType: 'decimal-pad',
                        onChangeText: amountChangeHandler.bind(this, 'amount'),
                        value: inputValues.amount
                    }}
                />
                <Input
                    style={styles.textInput}
                    label="Date"
                    textInputConfig={{
                        placeholder: 'YYYY-MM-DD',
                        maxLength: 10,
                        onChangeText: amountChangeHandler.bind(this, 'date'),
                        value: inputValues.date
                    }}
                />
            </View>

            <Input
                label="Description"
                textInputConfig={{
                    multiline: true,
                    onChangeText: amountChangeHandler.bind(this, 'description'),
                    value: inputValues.description
                }}
            />

            <View style={styles.buttons}>
                <Button mode="flat" onPress={onCancel} style={styles.button}>
                    Cancel
                </Button>
                <Button onPress={onSubmit} style={styles.button}>
                    {submitButtonLabel}
                </Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    formContainer: {
        marginTop: 80
    },
    titleContainer: {
        alignItems: 'center',
        padding: 24
    },
    title: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold'
    },
    inputRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textInput: {
        flex: 1
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        minWidth: 120,
        marginHorizontal: 8
    }
});

export default ExpenseForm;
