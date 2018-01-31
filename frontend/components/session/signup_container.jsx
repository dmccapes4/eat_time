import React from 'react';
import { connect } from 'react-redux';
import Signup from './signup';
import {
  requestSignup,
  requestClearErrors
} from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
  user: state.session.user,
  closeSignupModal: ownProps.closeSignupModal,
  errors: state.errors,
});

const mapDispatchToProps = dispatch => ({
  requestSignup: user => dispatch(requestSignup(user)),
  requestClearErrors: () => dispatch(requestClearErrors()),
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(Signup);
