import { combineReducers } from 'redux';
import restaurants from './restaurentReducer';

const rootReducer = combineReducers({
  restaurants
});

export default rootReducer;
