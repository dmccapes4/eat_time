import React from 'react';
import { connect } from 'react-redux';
import SearchForm from './search_form';
import { requestLogout } from '../../actions/session_actions';

export default connect (
  null,
  null
)(SearchForm);
