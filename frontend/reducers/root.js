import { combineReducers } from 'redux';
import session from './session';
import errors from './errors';

export default combineReducers({
  session,
  errors,
});
