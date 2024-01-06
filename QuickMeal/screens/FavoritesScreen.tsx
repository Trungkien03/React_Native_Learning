import { useSelector } from 'react-redux';
import MealList from '../components/mealList/MealList';
import { MEALS } from '../data/dummy-data';
import { RootState } from '../store/redux/Store';

const FavoritesScreen = () => {
    const favoriteMealIds = useSelector(
        (state: RootState) => state.favoriteMeals.ids
    );
    const favoriteMeals = MEALS.filter((meal) =>
        favoriteMealIds.includes(meal.id)
    );
    return <MealList displayMeals={favoriteMeals} />;
};

export default FavoritesScreen;
