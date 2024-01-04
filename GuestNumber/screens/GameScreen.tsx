import { FC, useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import NumberContainer from '../components/game/NumberContainer';
import ButtonPrimary from '../components/ui/ButtonPrimary';
import Title from '../components/ui/Title';
import { Colors } from '../constants/Colors';
import { generateRandomBetween } from '../utils/handleLogicNumber';
import { AntDesign } from '@expo/vector-icons';

type GameScreenProps = {
    userNumber: number;
    onHandleGameOver: () => void;
};

const GameScreen: FC<GameScreenProps> = ({ userNumber, onHandleGameOver }) => {
    let minBoundary = 1;
    let maxBoundary = 100;
    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    useEffect(() => {
        if (currentGuess === userNumber) {
            onHandleGameOver();
        }
    }, [currentGuess, userNumber, onHandleGameOver]);

    const handleNextGuest = (direction: string) => {
        if (
            (direction === 'lower' && currentGuess < userNumber) ||
            (direction === 'greater' && currentGuess > userNumber)
        ) {
            Alert.alert("Don't lie!", 'You know that this is wrong', [
                { style: 'default', text: 'cancel' }
            ]);
            return;
        }
        if (direction === 'lower') {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }

        const newRndNumber = generateRandomBetween(
            minBoundary,
            maxBoundary,
            currentGuess
        );
        setCurrentGuess(newRndNumber);
    };

    return (
        <View style={GameScreenStyles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View style={GameScreenStyles.higherLowerField}>
                <Text style={GameScreenStyles.higherLowerText}>
                    Higher or Lower
                </Text>
                <View style={GameScreenStyles.buttonsField}>
                    <View style={GameScreenStyles.buttonField}>
                        <ButtonPrimary
                            onPress={handleNextGuest.bind(this, 'greater')}
                        >
                            <AntDesign
                                name="pluscircle"
                                size={24}
                                color={Colors.Yellow}
                            />
                        </ButtonPrimary>
                    </View>
                    <View style={GameScreenStyles.buttonField}>
                        <ButtonPrimary
                            onPress={handleNextGuest.bind(this, 'lower')}
                        >
                            <AntDesign
                                name="minuscircle"
                                size={24}
                                color={Colors.Yellow}
                            />
                        </ButtonPrimary>
                    </View>
                </View>
            </View>
            <View>
                <Text>LOG ROUNDS</Text>
            </View>
        </View>
    );
};

const GameScreenStyles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 22
    },
    higherLowerField: {
        alignItems: 'center',
        marginTop: 20,
        padding: 20,
        borderColor: Colors.Yellow,
        borderRadius: 20,
        shadowOffset: { height: 20, width: 20 },
        backgroundColor: Colors.brown_red
    },
    higherLowerText: {
        fontSize: 20,
        padding: 10,
        color: Colors.Yellow
    },
    buttonsField: {
        flexDirection: 'row'
    },
    buttonField: {
        flex: 1
    }
});

export default GameScreen;
