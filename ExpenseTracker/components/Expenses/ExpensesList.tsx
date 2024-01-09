import { FlatList, Text, View } from 'react-native';
import { IExpense } from './ExpensesOutput';
import { FC } from 'react';
import ExpenseItem from './ExpenseItem';

type ExpensesListProps = {
    expenses: IExpense[];
};

const renderExpenseItem = ({ item }: { item: IExpense }) => {
    return <ExpenseItem expense={item} />;
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
