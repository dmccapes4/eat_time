import React from 'react';
import { connect } from 'react-redux';
import Login from './login';
import { requestLogin } from '../../actions/session_actions';

const mapStateToProps = state => ({
  user: state.session.user
});

const mapDispatchToProps = dispatch => ({
  requestLogin: user => dispatch(requestLogin(user)),
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(Login);
