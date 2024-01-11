import { Dispatch } from 'react';
import { DUMMY_EXPENSES } from '../data/Expenses';

export type RootStackParamList = {
    ExpensesOverview: undefined;
    ManageExpenses?: { expenseId: string };
};

export type RootBottomTabsList = {
    RecentExpenses: undefined;
    AllExpenses: undefined;
};

export interface IExpense {
    id: string;
    description: string;
    amount: number;
    date: Date;
}

export interface ExpensesContextType {
    error: string;
    isLoading: boolean;
    expenses: IExpense[];
}

export interface IContextExpenses {
    state: ExpensesContextType;
    dispatch: Dispatch<ActionProps>;
}

export const initialState: ExpensesContextType = {
    error: '',
    isLoading: false,
    expenses: []
};

export enum STATE_VALUE {
    SET_ERROR = 'SET_ERROR',
    SET_LOADING = 'SET_LOADING',
    SET = 'SET_EXPENSE',
    ADD_EXPENSE = 'ADD_EXPENSE',
    UPDATE_EXPENSE = 'UPDATE_EXPENSE',
    DELETE_EXPENSE = 'DELETE_EXPENSE'
}

export type AddExpenseType = {
    type: STATE_VALUE.ADD_EXPENSE;
    payload: IExpense;
};

export type UpdateExpenseType = {
    type: STATE_VALUE.UPDATE_EXPENSE;
    payload: { id: string; expense: IExpense };
};

export type DeleteExpenseType = {
    type: STATE_VALUE.DELETE_EXPENSE;
    payload: { id: string };
};

export type SetExpenseType = {
    type: STATE_VALUE.SET;
    payload: IExpense[];
};

export type SetIsLoading = {
    type: STATE_VALUE.SET_LOADING;
    payload: boolean;
};

export type SetError = {
    type: STATE_VALUE.SET_ERROR;
    payload: string;
};

export type ActionProps =
    | AddExpenseType
    | UpdateExpenseType
    | DeleteExpenseType
    | SetExpenseType
    | SetIsLoading
    | SetError;
