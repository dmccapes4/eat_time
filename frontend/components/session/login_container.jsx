import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
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

export default withRouter(connect (
  mapStateToProps,
  mapDispatchToProps
)(Login));
