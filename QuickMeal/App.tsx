import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import { RootStackParamList } from './types/app.types';
import MealDetailScreen from './screens/MealDetailScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
    return (
        <>
            <StatusBar style="light" />
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="MealsCategories"
                    screenOptions={{
                        headerBackTitle: 'Back', // Set the default text for the back button
                        headerStyle: { backgroundColor: '#553737' },
                        headerTintColor: 'white',
                        contentStyle: { backgroundColor: '#3f2f25' }
                    }}
                >
                    <Stack.Screen
                        name="MealsCategories" // Updated screen name
                        component={CategoriesScreen}
                        options={{
                            title: 'All Categories'
                        }}
                    />
                    <Stack.Screen
                        name="MealsOverview"
                        component={MealsOverviewScreen}
                    />
                    <Stack.Screen
                        name="MealDetail"
                        component={MealDetailScreen}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

const styles = StyleSheet.create({});
