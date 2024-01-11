import { useContext, useLayoutEffect, useState } from 'react';
import ExpensesOutput from '../components/Expenses/ExpensesOutput';
import LoadingOverlay from '../components/UI/LoadingOverlay';
import { getDateMinusDay } from '../components/utils/Date';
import { fetchExpenses } from '../components/utils/Http';
import { ExpensesContext } from '../store/ExpensesContext';
import { STATE_VALUE } from '../types/CommonTypes';
import ErrorOverLay from '../components/UI/ErrorOverLay';

const RecentExpense = () => {
    const { state, dispatch } = useContext(ExpensesContext);
    const { expenses, isLoading, error } = state;

    useLayoutEffect(() => {
        const fetchData = async () => {
            dispatch({ type: STATE_VALUE.SET_LOADING, payload: true });
            try {
                const expenses = await fetchExpenses();
                dispatch({ type: STATE_VALUE.SET, payload: expenses });
            } catch (error) {
                dispatch({
                    type: STATE_VALUE.SET_ERROR,
                    payload: 'Could not fetch expenses'
                });
            }
            dispatch({ type: STATE_VALUE.SET_LOADING, payload: false });
        };
        fetchData();
    }, []);

    const recentExpenses = expenses.filter((expense) => {
        const today = new Date();
        const date7DaysAgo = getDateMinusDay(today, 7);

        return expense.date > date7DaysAgo;
    });

    const errorHandler = () => {
        dispatch({ type: STATE_VALUE.SET_ERROR, payload: '' });
    };

    if (isLoading) {
        return <LoadingOverlay />;
    }

    if (error && !isLoading) {
        return <ErrorOverLay message={error} onConfirm={errorHandler} />;
    }
    return (
        <ExpensesOutput
            expenses={recentExpenses || []}
            expensesPeriod="Last 7 Days"
        />
    );
};

export default RecentExpense;
