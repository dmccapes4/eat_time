import React from 'react';
import { connect } from 'react-redux';
import Main from './main';
import { requestLogout } from '../../actions/session_actions';

export default connect (
  null,
  null
)(Main);
