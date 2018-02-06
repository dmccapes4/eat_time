import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ProfileNavBar from './profile_nav_bar';

export default withRouter(connect (
  null,
  null
)(ProfileNavBar));
