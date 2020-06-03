import { combineReducers } from 'redux';

import favoritesReducer from "./favoritesReducer";
import seeLaterReducer from './seeLaterReducer'
export default combineReducers({
    favoritesReducer,
    seeLaterReducer
});