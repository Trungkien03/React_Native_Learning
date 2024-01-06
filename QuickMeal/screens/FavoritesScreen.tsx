import MealList from '../components/mealList/MealList';
import { MEALS } from '../data/dummy-data';
import useFavoriteMealContext from '../hooks/useFavoriteMealContext';

const FavoritesScreen = () => {
    const { state } = useFavoriteMealContext();
    const favoriteMeals = MEALS.filter((meal) => state.ids.includes(meal.id));
    return <MealList displayMeals={favoriteMeals} />;
};

export default FavoritesScreen;
