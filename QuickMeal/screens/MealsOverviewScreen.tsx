import { NavigationProp, RouteProp } from '@react-navigation/native';
import { useEffect } from 'react';

import { CATEGORIES, MEALS } from '../data/dummy-data';
import { RootStackParamList } from '../types/app.types';
import MealList from '../components/mealList/MealList';

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

    return <MealList displayMeals={displayMeals} />;
};

export default MealsOverviewScreen;
