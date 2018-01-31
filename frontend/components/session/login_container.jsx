import React from 'react';
import { connect } from 'react-redux';
import Login from './login';
import {
  requestLogin,
  requestClearErrors
} from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
  user: state.session.user,
  closeLoginModal: ownProps.closeLoginModal,
  errors: state.errors,
});

const mapDispatchToProps = dispatch => ({
  requestLogin: user => dispatch(requestLogin(user)),
  requestClearErrors: () => dispatch(requestClearErrors()),
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(Login);
