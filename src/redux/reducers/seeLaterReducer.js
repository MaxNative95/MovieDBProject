import { ADD_TO_LATER } from '../actions/types';

const INITIAL_STATE = {
    seeLater: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_TO_LATER:
            return {
                ...state,
                seeLater: [action.payload, ...state.seeLater]
            }
        default:
            return state;
    }
};
