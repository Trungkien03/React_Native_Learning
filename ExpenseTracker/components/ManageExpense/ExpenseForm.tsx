import { StyleSheet, Text, View } from 'react-native';
import Input from './Input';

const ExpenseForm = () => {
    const amountChangeHandler = () => {};
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
                        onChangeText: amountChangeHandler
                    }}
                />
                <Input
                    style={styles.textInput}
                    label="Date"
                    textInputConfig={{
                        placeholder: 'YYYY-MM-DD',
                        maxLength: 10,
                        onChangeText: () => {}
                    }}
                />
            </View>

            <Input
                label="Description"
                textInputConfig={{
                    multiline: true
                }}
            />
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
    }
});

export default ExpenseForm;
