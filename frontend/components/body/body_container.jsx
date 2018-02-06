import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Body from './body';
import { requestLogout } from '../../actions/session_actions';

const mapStateToProps = state => ({
  user: state.session.user,
});

export default withRouter(connect (
  mapStateToProps,
  null
)(Body));
