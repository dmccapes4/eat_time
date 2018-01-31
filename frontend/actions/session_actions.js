import {
  fetchSignup,
  fetchLogin,
  fetchLogout
} from '../utils/session_utils';

export const RECEIVE_LOGIN = 'RECEIVE_LOGIN';
export const RECEIVE_LOGOUT = 'RECEIVE_LOGOUT';

const receiveLogin = user => ({
  type: RECEIVE_LOGIN,
  user,
});

const receiveLogout = () => ({
  type: RECEIVE_LOGOUT,
});

export const requestSignup = formUser => dispatch => (
  fetchSignup(formUser)
    .then(user => dispatch(receiveLogin(user)))
  );

export const requestLogin = formUser => dispatch => (
  fetchLogin(formUser)
    .then(user => dispatch(receiveLogin(user)))
  );

export const requestLogout = () => dispatch => (
  fetchLogout()
    .then(() => dispatch(receiveLogout()))
  );
