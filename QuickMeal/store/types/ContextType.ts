import { ReactNode } from 'react';

export type FavoritesContextProps = {
    children: ReactNode;
};

export enum ActionTypes {
    ADD_FAVORITE = 'ADD_FAVORITE',
    REMOVE_FAVORITE = 'REMOVE_FAVORITE'
}

export type AddFavoriteAction = {
    type: ActionTypes.ADD_FAVORITE;
    payload: string;
};

export type RemoveFavoriteAction = {
    type: ActionTypes.REMOVE_FAVORITE;
    payload: string;
};

export type Action = AddFavoriteAction | RemoveFavoriteAction;

export type State = {
    ids: string[];
};
