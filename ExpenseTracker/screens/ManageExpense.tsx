import { NavigationProp, RouteProp } from '@react-navigation/native';
import { FC, useContext, useLayoutEffect } from 'react';
import {
    Keyboard,
    StyleSheet,
    TouchableWithoutFeedback,
    View
} from 'react-native';
import ExpenseForm from '../components/ManageExpense/ExpenseForm';
import IconButton from '../components/UI/IconButton';
import {
    deleteExpese,
    storeExpense,
    updateExpenseService
} from '../components/utils/Http';
import { GlobalStyles } from '../constants/CommonConstant';
import { ExpensesContext } from '../store/ExpensesContext';
import {
    IExpense,
    RootStackParamList,
    STATE_VALUE
} from '../types/CommonTypes';

interface ManageExpenseProps {
    route: RouteProp<RootStackParamList>;
    navigation: NavigationProp<RootStackParamList>;
}

const ManageExpense: FC<ManageExpenseProps> = ({ route, navigation }) => {
    const { state, dispatch } = useContext(ExpensesContext);
    const { expenses } = state;
    const editedExpenseId = route.params?.expenseId;
    const fountItem = expenses.find((item) => item.id === editedExpenseId);
    const isEditing = !!editedExpenseId;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        });
    }, [isEditing, navigation]);

    const deleteExpenseHandler = async () => {
        dispatch({ type: STATE_VALUE.SET_LOADING, payload: true });
        try {
            await deleteExpese(editedExpenseId || '');
            dispatch({
                type: STATE_VALUE.DELETE_EXPENSE,
                payload: { id: editedExpenseId || '' }
            });
        } catch (error) {
            dispatch({
                type: STATE_VALUE.SET_ERROR,
                payload: 'Could not delete expense'
            });
        }

        dispatch({ type: STATE_VALUE.SET_LOADING, payload: false });
        navigation.goBack();
    };

    const cancelHandler = () => {
        navigation.goBack();
    };

    const confirmHandler = async (expenseData: IExpense) => {
        dispatch({ type: STATE_VALUE.SET_LOADING, payload: true });
        if (isEditing) {
            try {
                await updateExpenseService(editedExpenseId, expenseData);
            } catch (error) {
                dispatch({
                    type: STATE_VALUE.SET_ERROR,
                    payload: 'Could not update expense'
                });
            }
            dispatch({
                type: STATE_VALUE.UPDATE_EXPENSE,
                payload: { id: editedExpenseId, expense: expenseData }
            });
        } else {
            try {
                const id = await storeExpense(expenseData);
                dispatch({
                    type: STATE_VALUE.ADD_EXPENSE,
                    payload: { ...expenseData, id }
                });
            } catch (error) {
                dispatch({
                    type: STATE_VALUE.SET_ERROR,
                    payload: 'Could not delete expense'
                });
            }
        }
        dispatch({ type: STATE_VALUE.SET_LOADING, payload: false });
        navigation.goBack();
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.container}>
                <ExpenseForm
                    fountItem={fountItem}
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
        </TouchableWithoutFeedback>
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
