import { NavigationProp, RouteProp } from '@react-navigation/native';
import { useEffect } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import MealItem from '../components/MealItem';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import Meal from '../models/meal';
import { RootStackParamList } from '../types/app.types';

type MealsOverviewScreenProps = {
    route: RouteProp<RootStackParamList, 'MealsOverview'>;
    navigation: NavigationProp<RootStackParamList, 'MealsOverview'>;
};

const MealsOverviewScreen: React.FC<MealsOverviewScreenProps> = ({
    route,
    navigation
}) => {
    const { categoryId } = route.params;

    const displayMeals = MEALS.filter(
        (item) => item.categoryIds.indexOf(categoryId) >= 0
    );

    useEffect(() => {
        const categoryTitle = CATEGORIES.find((item) => item.id === categoryId);

        navigation.setOptions({
            title: categoryTitle?.title || 'Meals Overview' // Set a default title if categoryTitle is not found
        });
    }, [categoryId]);

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

export default MealsOverviewScreen;
