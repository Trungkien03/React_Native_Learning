import { FC } from 'react';
import { FlatList } from 'react-native';
import ExpenseItem from './ExpenseItem';
import { IExpense } from '../../types/CommonTypes';

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
            keyExtractor={(item) => item.id}
            renderItem={renderExpenseItem}
        />
    );
};

export default ExpensesList;
