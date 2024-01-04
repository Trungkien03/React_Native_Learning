import { FC, useState } from 'react';
import { Alert, StyleSheet, TextInput, View } from 'react-native';
import ButtonPrimary from '../components/ui/ButtonPrimary';
import { Colors } from '../constants/Colors';
import Title from '../components/ui/Title';

type StartGameScreenProps = {
    handleSetUserNumber: (value: number) => void;
};

const StartGameScreen: FC<StartGameScreenProps> = ({ handleSetUserNumber }) => {
    const [enteredNumber, setEnteredNumber] = useState('');

    const confirmInputNumber = () => {
        const chooseNumber = parseInt(enteredNumber);
        if (isNaN(chooseNumber) || chooseNumber <= 0) {
            Alert.alert('Invalid Number', 'Number must be between 1 and 99', [
                {
                    text: 'OK',
                    style: 'destructive',
                    onPress: () => setEnteredNumber('')
                }
            ]);
            return;
        }
        handleSetUserNumber(chooseNumber);
    };

    return (
        <View style={StartScreenStyles.inputContainer}>
            <Title>Guest My Number Game</Title>
            <TextInput
                style={StartScreenStyles.numberInput}
                maxLength={2}
                keyboardType="number-pad"
                autoCorrect={false}
                value={enteredNumber}
                onChangeText={(value) => setEnteredNumber(value)}
            />
            <View style={StartScreenStyles.buttonsContainer}>
                <View style={StartScreenStyles.buttonContainer}>
                    <ButtonPrimary onPress={() => setEnteredNumber('')}>
                        Reset
                    </ButtonPrimary>
                </View>
                <View style={StartScreenStyles.buttonContainer}>
                    <ButtonPrimary onPress={confirmInputNumber}>
                        Confirm
                    </ButtonPrimary>
                </View>
            </View>
        </View>
    );
};

const StartScreenStyles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        marginHorizontal: 20,
        padding: 16,
        borderRadius: 20,
        backgroundColor: Colors.brown_red,
        elevation: 20,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.5
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.Yellow,
        borderBottomWidth: 2,
        color: Colors.Yellow,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    }
});

export default StartGameScreen;
