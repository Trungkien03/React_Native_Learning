import { useContext, useLayoutEffect } from 'react';
import ExpensesOutput from '../components/Expenses/ExpensesOutput';
import { fetchExpenses } from '../components/utils/Http';
import { ExpensesContext } from '../store/ExpensesContext';
import { getDateMinusDay } from '../components/utils/Date';

const RecentExpense = () => {
    const { expenses, setExpenses } = useContext(ExpensesContext);

    useLayoutEffect(() => {
        const fetchData = async () => {
            const expenses = await fetchExpenses();
            setExpenses(expenses);
        };
        fetchData();
    }, []);

    const recentExpenses = expenses.filter((expense) => {
        const today = new Date();
        const date7DaysAgo = getDateMinusDay(today, 7);

        return expense.date > date7DaysAgo;
    });

    return (
        <ExpensesOutput
            expenses={expenses || []}
            expensesPeriod="Last 7 Days"
        />
    );
};

export default RecentExpense;
