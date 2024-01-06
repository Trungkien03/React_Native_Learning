import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/app.types';
import DrawerNavigator from './DrawerNavigator';
import MealsOverviewScreen from '../../screens/MealsOverviewScreen';
import MealDetailScreen from '../../screens/MealDetailScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="QuickMeals" // Updated name to be unique
            screenOptions={{
                headerBackTitle: 'Back',
                headerStyle: { backgroundColor: '#553737' },
                headerTintColor: 'white',
                contentStyle: { backgroundColor: '#434343' }
            }}
        >
            <Stack.Screen
                name="QuickMeals" // Updated name to be unique
                component={DrawerNavigator}
                options={{
                    title: 'Quick Meals',
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="MealsOverview"
                component={MealsOverviewScreen}
            />
            <Stack.Screen name="MealDetail" component={MealDetailScreen} />
        </Stack.Navigator>
    );
};

export default StackNavigator;
