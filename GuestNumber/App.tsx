import React, { useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import GameScreen from './screens/GameScreen';
import { Colors } from './constants/Colors';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
    const [userNumber, setUserNumber] = useState<number>();
    const [isGameOver, setIsGameOver] = useState(true);

    const handleSetUserNumber = (enterNumber: number) => {
        setUserNumber(enterNumber);
        setIsGameOver(false);
    };

    const handleIsOverGameHandler = () => {
        setIsGameOver(false);
        setUserNumber(undefined);
    };

    let screen = <StartGameScreen handleSetUserNumber={handleSetUserNumber} />;
    if (userNumber) {
        screen = (
            <GameScreen
                userNumber={userNumber}
                onHandleGameOver={() => setIsGameOver(true)}
            />
        );
    }
    if (isGameOver && userNumber) {
        screen = <GameOverScreen startNewGame={handleIsOverGameHandler} />;
    }

    return (
        <LinearGradient
            colors={[Colors.brown_red, Colors.Yellow]}
            style={styles.rootScreen}
        >
            <ImageBackground
                source={{
                    uri: 'https://raw.githubusercontent.com/academind/react-native-practical-guide-code/04-deep-dive-real-app/extra-files/images/background.png'
                }}
                resizeMode="cover"
                style={styles.rootScreen}
                imageStyle={styles.backgroundImage}
            >
                <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
            </ImageBackground>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1
    },
    backgroundImage: {
        flex: 1,
        opacity: 0.2
    }
});
