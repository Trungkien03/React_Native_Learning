import { FC, ReactNode } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

type ButtonPrimaryProps = {
    children: ReactNode;
};

const ButtonPrimary: FC<ButtonPrimaryProps> = ({ children }) => {
    const handlePress = () => {
        console.log('pressed');
    };

    return (
        <View style={ButtonPrimaryStyles.buttonOuterContainer}>
            <Pressable
                style={({ pressed }) =>
                    pressed
                        ? [
                              ButtonPrimaryStyles.buttonInnerContainer,
                              ButtonPrimaryStyles.pressed
                          ]
                        : ButtonPrimaryStyles.buttonInnerContainer
                }
                onPress={handlePress}
                android_ripple={{ color: '#410422' }}
            >
                <Text style={ButtonPrimaryStyles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    );
};

const ButtonPrimaryStyles = StyleSheet.create({
    buttonOuterContainer: {
        margin: 4,
        overflow: 'hidden'
    },
    buttonInnerContainer: {
        backgroundColor: '#72063c',
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
        borderRadius: 28
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    },
    pressed: {
        opacity: 0.75
    }
});

export default ButtonPrimary;
