import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import ExpensesOverview from './components/Navigators/ExpensesOverview';
import ManageExpense from './screens/ManageExpense';
import { RootStackParamList, STATE_VALUE } from './types/CommonTypes';
import { GlobalStyles } from './constants/CommonConstant';
import ExpensesContextProvider, {
    ExpensesContext
} from './store/ExpensesContext';
import { useContext } from 'react';
import LoadingOverlay from './components/UI/LoadingOverlay';
import ErrorOverLay from './components/UI/ErrorOverLay';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
    const { state, dispatch } = useContext(ExpensesContext);
    const { error, isLoading } = state;
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
        <>
            <StatusBar style="auto" />
            <ExpensesContextProvider>
                <NavigationContainer>
                    <Stack.Navigator
                        screenOptions={{
                            headerStyle: {
                                backgroundColor: GlobalStyles.colors.primary500
                            },
                            headerTintColor: 'white'
                        }}
                    >
                        <Stack.Screen
                            name="ExpensesOverview"
                            component={ExpensesOverview}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="ManageExpenses"
                            component={ManageExpense}
                            options={{
                                title: 'Manage Expenses',
                                presentation: 'modal'
                            }}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </ExpensesContextProvider>
        </>
    );
}
