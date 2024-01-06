import { FlatList, StyleSheet, View } from 'react-native';
import Meal from '../../models/meal';
import MealItem from './MealItem';
import { FC } from 'react';

type MealListProps = {
    displayMeals: Meal[];
};

const MealList: FC<MealListProps> = ({ displayMeals }) => {
    const renderMealItem = ({ item }: { item: Meal }) => {
        return <MealItem itemData={item} />;
    };
    return (
        <View style={styles.container}>
            <FlatList
                data={displayMeals}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
});

export default MealList;
