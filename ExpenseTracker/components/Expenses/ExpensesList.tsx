import { FlatList, Text, View } from 'react-native';
import { IExpense } from './ExpensesOutput';
import { FC } from 'react';

type ExpensesListProps = {
    expenses: IExpense[];
};

const renderExpenseItem = ({ item }: { item: IExpense }) => {
    return (
        <View>
            <Text>{item.description}</Text>
            <Text>{item.amount}</Text>
        </View>
    );
};

const ExpensesList: FC<ExpensesListProps> = ({ expenses }) => {
    return (
        <FlatList
            data={expenses}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderExpenseItem}
        />
    );
};

export default ExpensesList;
