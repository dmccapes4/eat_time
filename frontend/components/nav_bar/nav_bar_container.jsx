import React from 'react';
import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { requestLogout, requestClearErrors } from '../../actions/session_actions';

const mapStateToProps = state => ({
  user: state.session.user,
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  requestLogout: () => dispatch(requestLogout()),
  requestClearErrors: () => dispatch(requestClearErrors()),
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
