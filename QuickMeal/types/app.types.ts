import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
    QuickMeals: undefined;
    MealsOverview: { categoryId: string };
    MealDetail: { mealId: string };
};

export type RootDrawerParamList = {
    MealsCategories: undefined;
    HomeScreen: undefined;
    MealFavorites: undefined;
};

export type CategoriesScreenNavigationProps =
    NativeStackNavigationProp<RootStackParamList>;
