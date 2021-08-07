import { combineReducers, createStore } from "redux";
import gameOanTuTiReducer from './gameOanTuTiReducer';
const rootReducer = combineReducers({
    gameOanTuTiReducer
});

export const store = createStore(rootReducer);
