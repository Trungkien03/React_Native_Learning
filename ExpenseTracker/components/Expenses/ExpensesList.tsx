import { FC } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { IExpense } from '../../types/CommonTypes';
import ExpenseItem from './ExpenseItem';

type ExpensesListProps = {
    expenses: IExpense[];
};

const renderExpenseItem = ({ item }: { item: IExpense }) => {
    return <ExpenseItem expense={item} />;
};

const ExpensesList: FC<ExpensesListProps> = ({ expenses }) => {
    if (expenses.length === 0) {
        return (
            <View style={styles.noExpenseContainer}>
                <Text style={styles.noExpenseText}>
                    No Expenses registered within 7 days
                </Text>
            </View>
        );
    }

    return (
        <FlatList
            data={expenses}
            keyExtractor={(item) => item.id}
            renderItem={renderExpenseItem}
        />
    );
};

const styles = StyleSheet.create({
    noExpenseContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    noExpenseText: {
        color: 'white',
        fontWeight: 'bold'
    }
});

export default ExpensesList;
