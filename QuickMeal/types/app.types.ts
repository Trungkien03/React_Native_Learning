import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
    MealsCategories: undefined;
    MealsOverview: { categoryId: string };
    MealDetail: { mealId: string };
};

export type CategoriesScreenNavigationProps =
    NativeStackNavigationProp<RootStackParamList>;
