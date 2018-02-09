import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Review from './review';
import {
  requestCreateReview,
  requestDeleteReview,
  requestUpdateReview,
  requestReview,
} from '../../actions/review_actions';
import { requestClearErrors } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
  closeReviewModal: ownProps.closeReviewModal,
  errors: state.errors,
});

const mapDispatchToProps = dispatch => ({
  requestClearErrors: () => dispatch(requestClearErrors()),
  requestCreateReview: review => dispatch(requestCreateReview(review)),
  requestDeleteReview: id => dispatch(requestDeleteReview(id)),
  requestUpdateReview: review => dispatch(requestUpdateReview(review)),
  requestReview: id => dispatch(requestReview(id)),
});

export default withRouter(connect (
  mapStateToProps,
  mapDispatchToProps
)(Review));
