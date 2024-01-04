import { Image, StyleSheet, Text, View } from 'react-native';
import Title from '../components/ui/Title';
import { Colors } from '../constants/Colors';
import ButtonPrimary from '../components/ui/ButtonPrimary';
import { FC } from 'react';

type GameOverScreenProps = {
    startNewGame: () => void;
};

const GameOverScreen: FC<GameOverScreenProps> = ({ startNewGame }) => {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Title>Game Over</Title>
            </View>
            <View>
                <Image
                    source={{
                        uri: 'https://raw.githubusercontent.com/academind/react-native-practical-guide-code/04-deep-dive-real-app/extra-files/images/success.png'
                    }}
                    resizeMode="contain"
                    style={styles.imageContainer}
                />
            </View>
            <View>
                <Text style={styles.messageContainer}>
                    Your Phone needed X rounds to guess the number Y
                </Text>
            </View>

            <ButtonPrimary onPress={startNewGame}>Start New Game</ButtonPrimary>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleContainer: {
        marginBottom: 25
    },
    messageContainer: {
        alignItems: 'center',
        fontSize: 20,
        fontStyle: 'normal'
    },
    imageContainer: {
        borderRadius: 200,
        width: 300,
        height: 300,
        borderColor: Colors.brown_red,
        borderWidth: 2
    }
});

export default GameOverScreen;
