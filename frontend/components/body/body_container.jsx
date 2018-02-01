import React from 'react';
import { connect } from 'react-redux';
import Body from './body';
import { requestLogout } from '../../actions/session_actions';

export default connect (
  null,
  null
)(Body);
