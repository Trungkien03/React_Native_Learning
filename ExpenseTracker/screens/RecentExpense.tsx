import { useContext } from 'react';
import ExpensesOutput from '../components/Expenses/ExpensesOutput';
import { ExpensesContext } from '../store/ExpensesContext';
import { getDateMinusDay } from '../components/utils/Date';

const RecentExpense = () => {
    const { expenses } = useContext(ExpensesContext);
    const recentExpenses = expenses.filter((expense) => {
        const today = new Date();
        const date7DaysAgo = getDateMinusDay(today, 7);

        return expense.date > date7DaysAgo;
    });

    return (
        <ExpensesOutput
            expenses={recentExpenses || []}
            expensesPeriod="Last 7 Days"
        />
    );
};

export default RecentExpense;
