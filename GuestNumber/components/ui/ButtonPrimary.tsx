import { FC, ReactNode } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Colors } from '../../constants/Colors';

type ButtonPrimaryProps = {
    children: ReactNode;
    onPress: () => void;
};

const ButtonPrimary: FC<ButtonPrimaryProps> = ({ children, onPress }) => {
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
                onPress={onPress}
                android_ripple={{ color: Colors.buttonColor }}
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
        paddingVertical: 12,
        paddingHorizontal: 24,
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
