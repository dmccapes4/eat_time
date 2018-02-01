import { combineReducers } from 'redux';
import restaurants from './restaurants_reducer';
import errors from './errors';

export default combineReducers({
  restaurants,
});
