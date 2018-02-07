import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NavBar from './nav_bar';
import {
  requestLogin,
  requestLogout,
  requestClearErrors
} from '../../actions/session_actions';

const mapStateToProps = state => ({
  user: state.session.user,
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  requestLogin: user => dispatch(requestLogin(user)),
  requestLogout: () => dispatch(requestLogout()),
  requestClearErrors: () => dispatch(requestClearErrors()),
});

export default withRouter(connect (
  mapStateToProps,
  mapDispatchToProps
)(NavBar));
