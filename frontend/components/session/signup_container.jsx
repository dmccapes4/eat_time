import React from 'react';
import { connect } from 'react-redux';
import Signup from './signup';
import { requestSignup } from '../../actions/session_actions';

const mapStateToProps = state => ({
  user: state.session.user
});

const mapDispatchToProps = dispatch => ({
  requestSignup: user => dispatch(requestSignup(user)),
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(Signup);
