import {
  RECEIVE_ERRORS,
  RECEIVE_CLEAR_ERRORS,
  RECEIVE_LOGIN
} from '../actions/session_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ERRORS:
      return action.errors;
    case RECEIVE_CLEAR_ERRORS:
      return [];
    case RECEIVE_LOGIN:
      return [];
    default:
      return state;
  }
};
