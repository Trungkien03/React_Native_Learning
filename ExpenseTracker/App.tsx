import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import ExpensesOverview from './components/Navigators/ExpensesOverview';
import ManageExpense from './screens/ManageExpense';
import { RootStackParamList } from './types/CommonTypes';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
    return (
        <>
            <StatusBar style="auto" />
            <NavigationContainer>
                <Stack.Navigator initialRouteName="ExpensesOverview">
                    <Stack.Screen
                        name="ExpensesOverview"
                        component={ExpensesOverview}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="ManageExpenses"
                        component={ManageExpense}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}
