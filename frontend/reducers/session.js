import {
  RECEIVE_LOGIN,
  RECEIVE_LOGOUT,
} from '../actions/session_actions';

const _nullSession = {
  user: null,
};

export default (state = _nullSession, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LOGIN:
      return Object.assign ({}, { user: action.user });
    case RECEIVE_LOGOUT:
      return _nullSession;
    default:
      return state;
  }
};
