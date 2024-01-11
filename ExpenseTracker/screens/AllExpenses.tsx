import { useContext } from 'react';
import { ExpensesContext } from '../store/ExpensesContext';
import ExpensesOutput from '../components/Expenses/ExpensesOutput';

const AllExpenses = () => {
    const { state } = useContext(ExpensesContext);
    return (
        <ExpensesOutput
            expenses={state.expenses || []}
            expensesPeriod="All Expenses"
        />
    );
};

export default AllExpenses;
