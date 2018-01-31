import {
  fetchSignup,
  fetchLogin,
  fetchLogout
} from '../utils/session_utils';

export const RECEIVE_LOGIN = 'RECEIVE_LOGIN';
export const RECEIVE_LOGOUT = 'RECEIVE_LOGOUT';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const RECEIVE_CLEAR_ERRORS = 'CLEAR_ERRORS';

const receiveLogin = user => ({
  type: RECEIVE_LOGIN,
  user,
});

const receiveLogout = () => ({
  type: RECEIVE_LOGOUT,
});

const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

const receiveClearErrors = () => ({
  type: RECEIVE_CLEAR_ERRORS,
});

export const requestSignup = formUser => dispatch => (
  fetchSignup(formUser)
    .then(user => dispatch(receiveLogin(user)),
    errors => dispatch(receiveErrors(errors.responseJSON)))
  );

export const requestLogin = formUser => dispatch => (
  fetchLogin(formUser)
    .then(user => dispatch(receiveLogin(user)),
    errors => dispatch(receiveErrors(errors.responseJSON)))
  );

export const requestLogout = () => dispatch => (
  fetchLogout()
    .then(() => dispatch(receiveLogout()),
    errors => dispatch(receiveErrors(errors.responseJSON)))
  );

export const requestClearErrors = () => dispatch => (
  dispatch(receiveClearErrors())
);
