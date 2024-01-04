import { StyleSheet, TextInput, View } from 'react-native';
import ButtonPrimary from '../components/button/ButtonPrimary';

const StartGameScreen = () => {
    return (
        <View style={StartScreenStyles.inputContainer}>
            <TextInput
                style={StartScreenStyles.numberInput}
                maxLength={2}
                keyboardType="number-pad"
                autoCorrect={false}
            />
            <View style={StartScreenStyles.buttonsContainer}>
                <View style={StartScreenStyles.buttonContainer}>
                    <ButtonPrimary>Reset</ButtonPrimary>
                </View>
                <View style={StartScreenStyles.buttonContainer}>
                    <ButtonPrimary>Confirm</ButtonPrimary>
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
        backgroundColor: '#3f0723',
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
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
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
