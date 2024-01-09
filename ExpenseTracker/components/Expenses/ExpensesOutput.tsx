import { FC, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { GlobalStyles } from '../../constants/CommonConstant';
import { ExpensesContext } from '../../store/ExpensesContext';
import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';

type ExpensesOutputProps = {
    expensesPeriod: string;
};

const ExpensesOutput: FC<ExpensesOutputProps> = ({ expensesPeriod }) => {
    const { expenses } = useContext(ExpensesContext);
    return (
        <View style={styles.container}>
            <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
            <ExpensesList expenses={expenses} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 24,
        paddingBottom: 0,
        backgroundColor: GlobalStyles.colors.primary700
    }
});

export default ExpensesOutput;
