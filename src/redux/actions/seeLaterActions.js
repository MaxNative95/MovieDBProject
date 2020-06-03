import { ADD_TO_LATER } from './types';

export const addToLater = (item) => {
    return {
        type: ADD_TO_LATER,
        payload: item
    }
}
