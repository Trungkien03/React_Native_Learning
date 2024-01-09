import { useContext } from 'react';
import ExpensesList from '../components/Expenses/ExpensesList';
import { ExpensesContext } from '../store/ExpensesContext';

const AllExpenses = () => {
    const { expenses } = useContext(ExpensesContext);
    return <ExpensesList expenses={expenses} />;
};

export default AllExpenses;
