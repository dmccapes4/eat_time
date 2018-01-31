import React from 'react';
import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { requestLogout } from '../../actions/session_actions';

const mapStateToProps = state => ({
  user: state.session.user,
});

const mapDispatchToProps = dispatch => ({
  requestLogout: () => dispatch(requestLogout()),
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
