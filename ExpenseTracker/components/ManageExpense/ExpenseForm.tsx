import { FC, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { IExpense } from '../../types/CommonTypes';
import Button from '../UI/Button';
import { getFormattedDate } from '../utils/Date';
import Input from './Input';

interface ExpenseFormProps {
    fountItem?: IExpense;
    onCancel: () => void;
    onSubmit: (item: IExpense) => void;
    submitButtonLabel: string;
}

const ExpenseForm: FC<ExpenseFormProps> = ({
    onCancel,
    onSubmit,
    submitButtonLabel,
    fountItem
}) => {
    const [inputValues, setInputValues] = useState({
        amount: String(fountItem?.amount || ''),
        date: getFormattedDate(
            fountItem ? fountItem.date : new Date(Date.now())
        ),
        description: fountItem?.description
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

    const submitHandler = () => {
        const expenseData: IExpense = {
            id: new Date().getDate.toString(),
            amount: +inputValues.amount,
            date: new Date(inputValues.date),
            description: inputValues.description || ''
        };

        onSubmit(expenseData);
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
                <Button onPress={submitHandler} style={styles.button}>
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
