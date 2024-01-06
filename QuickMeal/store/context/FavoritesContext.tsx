import { Dispatch, FC, createContext, useReducer } from 'react';
import {
    Action,
    ActionTypes,
    FavoritesContextProps,
    State
} from '../types/ContextType';

const initialState: State = {
    ids: []
};

export const FavoritesContext = createContext<{
    state: State;
    dispatch: Dispatch<Action>;
}>({
    state: initialState,
    dispatch: () => {}
});

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case ActionTypes.ADD_FAVORITE:
            return { ...state, ids: [...state.ids, action.payload] };
        case ActionTypes.REMOVE_FAVORITE:
            return {
                ...state,
                ids: state.ids.filter((id) => id !== action.payload)
            };
        default:
            return state;
    }
};

const FavoritesContextProvider: FC<FavoritesContextProps> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const contextValue = { state, dispatch };

    return (
        <FavoritesContext.Provider value={contextValue}>
            {children}
        </FavoritesContext.Provider>
    );
};

export default FavoritesContextProvider;
