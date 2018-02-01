import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
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
export default withRouter(connect (
  mapStateToProps,
  mapDispatchToProps
)(Signup));
