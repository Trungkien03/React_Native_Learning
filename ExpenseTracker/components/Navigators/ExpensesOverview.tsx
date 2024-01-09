import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GlobalStyles } from '../../constants/CommonConstant';
import AllExpenses from '../../screens/AllExpenses';
import RecentExpense from '../../screens/RecentExpense';
import {
    RootBottomTabsList,
    RootStackParamList
} from '../../types/CommonTypes';
import IconButton from '../UI/IconButton';
import { NavigationProp } from '@react-navigation/native';

const BottomTabs = createBottomTabNavigator<RootBottomTabsList>();

interface ScreenOptionsProps {
    navigation: NavigationProp<RootStackParamList>;
}

const ExpensesOverview = () => {
    return (
        <BottomTabs.Navigator
            screenOptions={({ navigation }: ScreenOptionsProps) => ({
                headerStyle: {
                    backgroundColor: GlobalStyles.colors.primary500
                },
                headerTintColor: 'white',
                tabBarStyle: {
                    backgroundColor: GlobalStyles.colors.primary500
                },
                tabBarActiveTintColor: GlobalStyles.colors.accent500,
                headerRight: ({ tintColor }) => (
                    <IconButton
                        icon="add"
                        size={24}
                        color={tintColor || 'white'}
                        onPress={() => {
                            navigation.navigate('ManageExpenses');
                        }}
                    />
                )
            })}
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
