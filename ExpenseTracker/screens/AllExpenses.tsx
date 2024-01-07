import ExpensesList from '../components/Expenses/ExpensesList';
import { DUMMY_EXPENSES } from '../components/Expenses/ExpensesOutput';

const AllExpenses = () => {
    return <ExpensesList expenses={DUMMY_EXPENSES} />;
};

export default AllExpenses;
