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
    expenses: IExpense[];
    addExpense: (expense: IExpense) => void;
    deleteExpense: (id: string) => void;
    updateExpense: (id: string, expense: IExpense) => void;
}

export const initialState: ExpensesContextType = {
    expenses: DUMMY_EXPENSES,
    addExpense: () => {},
    deleteExpense: () => {},
    updateExpense: () => {}
};

export enum STATE_VALUE {
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

export type ActionProps =
    | AddExpenseType
    | UpdateExpenseType
    | DeleteExpenseType;
