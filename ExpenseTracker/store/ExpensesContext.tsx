import React, { ReactNode, createContext, useReducer } from 'react';
import {
    ActionProps,
    ExpensesContextType,
    IContextExpenses,
    STATE_VALUE,
    initialState
} from '../types/CommonTypes';

export const ExpensesContext = createContext<IContextExpenses>({
    state: initialState,
    dispatch: () => {}
});

const expensesReducer = (
    state: ExpensesContextType,
    action: ActionProps
): ExpensesContextType => {
    switch (action.type) {
        case STATE_VALUE.ADD_EXPENSE:
            return {
                ...state,
                expenses: [...state.expenses, action.payload]
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
        case STATE_VALUE.SET:
            const inverted = action.payload.reverse();
            return { ...state, expenses: inverted };
        case STATE_VALUE.SET_LOADING:
            return { ...state, isLoading: action.payload };
        case STATE_VALUE.SET_ERROR:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

const ExpensesContextProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(expensesReducer, initialState);

    return (
        <ExpensesContext.Provider value={{ state, dispatch }}>
            {children}
        </ExpensesContext.Provider>
    );
};

export default ExpensesContextProvider;
