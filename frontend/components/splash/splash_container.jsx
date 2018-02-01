import React from 'react';
import { connect } from 'react-redux';
import Splash from './splash';
import { withRouter } from 'react-router-dom';
import {
  requestLogin,
  requestClearErrors
 } from '../../actions/session_actions';

const mapStateToProps = state => ({
  state
});

const mapDispatchToProps = dispatch => ({
  requestLogin: user => dispatch(requestLogin(user)),
  requestClearErrors: () => dispatch(requestClearErrors()),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash));
