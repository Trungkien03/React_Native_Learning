import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FavoritesState {
    ids: string[]; // Assuming your ids are strings, you can change the type accordingly
}

const initialState: FavoritesState = {
    ids: []
};

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addFavorite: (state, action: PayloadAction<{ id: string }>) => {
            state.ids.push(action.payload.id);
        },
        removeFavorite: (state, action: PayloadAction<{ id: string }>) => {
            state.ids.splice(state.ids.indexOf(action.payload.id), 1);
        }
    }
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
