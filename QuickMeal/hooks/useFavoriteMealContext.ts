import { useContext } from 'react';
import { FavoritesContext } from '../store/context/FavoritesContext';

const useFavoriteMealContext = () => {
    const context = useContext(FavoritesContext);
    if (!context) {
        throw new Error(
            'useFavoriteMealContext must be used within a FavoritesContextProvider'
        );
    }
    return context;
};

export default useFavoriteMealContext;
