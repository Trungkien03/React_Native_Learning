import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import StackNavigator from './components/Navigation/StackNavigator';

export default function App() {
    return (
        <>
            <StatusBar style="light" />
            <NavigationContainer>
                <StackNavigator />
            </NavigationContainer>
        </>
    );
}

const styles = StyleSheet.create({});
