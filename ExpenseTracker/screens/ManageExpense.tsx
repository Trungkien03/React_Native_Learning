import { NavigationProp, RouteProp } from '@react-navigation/native';
import { FC, useContext, useLayoutEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import ExpenseForm from '../components/ManageExpense/ExpenseForm';
import IconButton from '../components/UI/IconButton';
import { GlobalStyles } from '../constants/CommonConstant';
import { ExpensesContext } from '../store/ExpensesContext';
import { IExpense, RootStackParamList } from '../types/CommonTypes';

interface ManageExpenseProps {
    route: RouteProp<RootStackParamList>;
    navigation: NavigationProp<RootStackParamList>;
}

const ManageExpense: FC<ManageExpenseProps> = ({ route, navigation }) => {
    const { deleteExpense, addExpense, updateExpense } =
        useContext(ExpensesContext);
    const editedExpenseId = route.params?.expenseId;
    const isEditing = !!editedExpenseId;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        });
    }, [isEditing, navigation]);

    const deleteExpenseHandler = () => {
        deleteExpense(editedExpenseId || '');
        navigation.goBack();
    };

    const cancelHandler = () => {
        navigation.goBack();
    };

    const confirmHandler = () => {
        if (isEditing) {
            updateExpense('e6', {
                description: 'Some bananas',
                amount: 5.99,
                date: new Date('2024-01-05')
            } as IExpense);
        } else {
            addExpense({
                id: 'e100',
                description: 'Some bananas',
                amount: 5.99,
                date: new Date('2024-01-08')
            });
        }
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <ExpenseForm
                onCancel={cancelHandler}
                onSubmit={confirmHandler}
                submitButtonLabel={isEditing ? 'Update' : 'Add'}
            />

            {isEditing && (
                <View style={styles.deleteContainer}>
                    <IconButton
                        icon="trash"
                        color={GlobalStyles.colors.error500}
                        size={24}
                        onPress={deleteExpenseHandler}
                    />
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary800
    },
    deleteContainer: {
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: GlobalStyles.colors.primary200,
        alignItems: 'center'
    }
});

export default ManageExpense;
