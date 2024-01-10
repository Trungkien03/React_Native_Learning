import { useContext } from 'react';
import { ExpensesContext } from '../store/ExpensesContext';
import ExpensesOutput from '../components/Expenses/ExpensesOutput';

const AllExpenses = () => {
    const { expenses } = useContext(ExpensesContext);
    return (
        <ExpensesOutput
            expenses={expenses || []}
            expensesPeriod="All Expenses"
        />
    );
};

export default AllExpenses;
