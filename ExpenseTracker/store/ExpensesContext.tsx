import React, { ReactNode, createContext, useReducer } from 'react';
import {
    ExpensesContextType,
    ActionProps,
    STATE_VALUE,
    initialState,
    IExpense
} from '../types/CommonTypes';
import { DUMMY_EXPENSES } from '../data/Expenses';

export const ExpensesContext = createContext(initialState);

const expensesReducer = (
    state: ExpensesContextType,
    action: ActionProps
): ExpensesContextType => {
    switch (action.type) {
        case STATE_VALUE.ADD_EXPENSE:
            const id = new Date().toString() + Math.random().toString();
            const newExpense: IExpense = { ...action.payload, id };
            return {
                ...state,
                expenses: [newExpense, ...state.expenses]
            };
        case STATE_VALUE.UPDATE_EXPENSE:
            const updatedExpenses = state.expenses.map((expense) =>
                expense.id === action.payload.id
                    ? action.payload.expense
                    : expense
            );
            return {
                ...state,
                expenses: updatedExpenses
            };
        case STATE_VALUE.DELETE_EXPENSE:
            const filteredExpenses = state.expenses.filter(
                (expense) => expense.id !== action.payload.id
            );
            return {
                ...state,
                expenses: filteredExpenses
            };
        default:
            return state;
    }
};

const ExpensesContextProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(expensesReducer, {
        expenses: DUMMY_EXPENSES
    } as ExpensesContextType);

    const AddExpense = (expense: IExpense) =>
        dispatch({ type: STATE_VALUE.ADD_EXPENSE, payload: expense });

    const updateExpense = (id: string, expense: IExpense) =>
        dispatch({
            type: STATE_VALUE.UPDATE_EXPENSE,
            payload: { id, expense }
        });

    const deleteExpense = (id: string) =>
        dispatch({ type: STATE_VALUE.DELETE_EXPENSE, payload: { id } });

    const value = {
        expenses: state.expenses,
        addExpense: AddExpense,
        updateExpense: updateExpense,
        deleteExpense: deleteExpense
    };

    return (
        <ExpensesContext.Provider value={value}>
            {children}
        </ExpensesContext.Provider>
    );
};

export default ExpensesContextProvider;
