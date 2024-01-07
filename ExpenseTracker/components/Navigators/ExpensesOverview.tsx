import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootBottomTabsList } from '../../types/CommonTypes';
import { GlobalStyles } from '../../constants/CommonConstant';
import RecentExpense from '../../screens/RecentExpense';
import AllExpenses from '../../screens/AllExpenses';
import { Ionicons } from '@expo/vector-icons';

const BottomTabs = createBottomTabNavigator<RootBottomTabsList>();

const ExpensesOverview = () => {
    return (
        <BottomTabs.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: GlobalStyles.colors.primary500
                },
                headerTintColor: 'white',
                tabBarStyle: {
                    backgroundColor: GlobalStyles.colors.primary500
                },
                tabBarActiveTintColor: GlobalStyles.colors.accent500
            }}
        >
            <BottomTabs.Screen
                name="RecentExpenses"
                component={RecentExpense}
                options={{
                    title: 'Recent Expenses',
                    tabBarLabel: 'Recent',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="hourglass" size={size} color={color} />
                    )
                }}
            />
            <BottomTabs.Screen
                name="AllExpenses"
                component={AllExpenses}
                options={{
                    title: 'All Expenses',
                    tabBarLabel: 'All Expenses',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="calendar" size={size} color={color} />
                    )
                }}
            />
        </BottomTabs.Navigator>
    );
};

export default ExpensesOverview;
