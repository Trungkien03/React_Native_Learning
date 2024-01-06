import { useNavigation } from '@react-navigation/native';
import { FC } from 'react';
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import { CategoriesScreenNavigationProps } from '../types/app.types';

type CategoryGridTitleProps = {
    title: string;
    color: string;
    id: string;
};

const CategoryGridTitle: FC<CategoryGridTitleProps> = ({
    color,
    title,
    id
}) => {
    const navigation = useNavigation<CategoriesScreenNavigationProps>();

    const handlerOnPress = () => {
        navigation.navigate('MealsOverview', { categoryId: id });
    };
    return (
        <View style={[styles.gridItem, { backgroundColor: color }]}>
            <Pressable
                android_ripple={{ color: '#ccc' }}
                style={({ pressed }) => [
                    styles.button,
                    pressed ? styles.buttonPressed : null
                ]}
                onPress={handlerOnPress}
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
