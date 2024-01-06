import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './slice/FavoritesSlice';

export const store = configureStore({
    reducer: {
        favoriteMeals: favoritesReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
