import { ADD_TO_FAV } from '../actions/types';

const INITIAL_STATE = {
    favorites: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_TO_FAV:
            return {
                ...state,
                favorites: [action.payload, ...state.favorites]
            }
        default:
            return state;
    }
};
