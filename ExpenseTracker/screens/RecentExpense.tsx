import ExpensesOutput, {
    DUMMY_EXPENSES
} from '../components/Expenses/ExpensesOutput';

const RecentExpense = () => {
    return (
        <ExpensesOutput
            expensesPeriod="Last 7 Days"
            expenses={DUMMY_EXPENSES}
        />
    );
};

export default RecentExpense;
