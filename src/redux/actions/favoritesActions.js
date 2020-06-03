import { ADD_TO_FAV } from './types';

export const addToFav = (item) => {
    return {
        type: ADD_TO_FAV,
        payload: item
    }
}
