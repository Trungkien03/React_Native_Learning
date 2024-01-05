import { FC } from 'react';
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';

type CategoryGridTitleProps = {
    title: string;
    color: string;
};

const CategoryGridTitle: FC<CategoryGridTitleProps> = ({ color, title }) => {
    return (
        <View style={[styles.gridItem, { backgroundColor: color }]}>
            <Pressable
                android_ripple={{ color: '#ccc' }}
                style={({ pressed }) => [
                    styles.button,
                    pressed ? styles.buttonPressed : null
                ]}
            >
                <View style={styles.innerContainer}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    button: {
        flex: 1
    },
    buttonPressed: {
        opacity: 0.5
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    }
});

export default CategoryGridTitle;
