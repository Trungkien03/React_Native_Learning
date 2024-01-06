import { Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FC } from 'react';

type IconButtonProps = {
    iconName: keyof typeof Ionicons.glyphMap;
    color: string;
    onTap?: () => void;
};

const IconButton: FC<IconButtonProps> = ({ iconName, color, onTap }) => {
    return (
        <Pressable
            onPress={onTap}
            style={({ pressed }) => pressed && styles.pressed}
        >
            <Ionicons name={iconName} size={24} color={color} />
        </Pressable>
    );
};

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.7
    }
});

export default IconButton;
