import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import ExpensesOverview from './components/Navigators/ExpensesOverview';
import ManageExpense from './screens/ManageExpense';
import { RootStackParamList } from './types/CommonTypes';
import { GlobalStyles } from './constants/CommonConstant';
import ExpensesContextProvider from './store/ExpensesContext';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
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
