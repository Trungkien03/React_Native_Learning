import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import StackNavigator from './components/Navigation/StackNavigator';
import FavoritesContextProvider from './store/context/FavoritesContext';

export default function App() {
    return (
        <>
            <StatusBar style="light" />
            <FavoritesContextProvider>
                <NavigationContainer>
                    <StackNavigator />
                </NavigationContainer>
            </FavoritesContextProvider>
        </>
    );
}

const styles = StyleSheet.create({});
