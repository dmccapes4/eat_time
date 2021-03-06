import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors';
import entities from './entities';

export default combineReducers({
  session,
  errors,
  entities,
});
