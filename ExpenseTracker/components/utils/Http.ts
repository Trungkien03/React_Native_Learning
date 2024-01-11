import axios from 'axios';
import { IExpense } from '../../types/CommonTypes';

const BACKEND_BASEURL =
    'https://react-native-course-4171b-default-rtdb.asia-southeast1.firebasedatabase.app';

export const storeExpense = async (expenseData: IExpense) => {
    const response = await axios.post(
        BACKEND_BASEURL + '/expenses.json',
        expenseData
    );
    const id = response.data.name;

    return id;
};

export const fetchExpenses = async () => {
    const response = await axios.get(BACKEND_BASEURL + '/expenses.json');
    const expenses = [];
    for (const key in response.data) {
        const expenseObj: IExpense = {
            id: response.data[key].id,
            amount: response.data[key].amount,
            date: new Date(response.data[key].date),
            description: response.data[key].description
        };
        expenses.push(expenseObj);
    }
    return expenses;
};

export const updateExpenseService = async (
    id: string,
    expenseData: IExpense
) => {
    return axios.put(BACKEND_BASEURL + `/expenses/${id}.json`, expenseData);
};

export const deleteExpese = async (id: string) => {
    return axios.delete(BACKEND_BASEURL + `/expenses/${id}.json`);
};