import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Review from './review';
import {
  requestCreateReview,
  requestDeleteReview,
} from '../../actions/review_actions';

const mapStateToProps = (state, ownProps) => ({
  closeReviewModal: ownProps.closeReviewModal,
});

const mapDispatchToProps = dispatch => ({
  requestCreateReview: review => dispatch(requestCreateReview(review)),
  requestDeleteReview: review => dispatch(requestDeleteReview(review)),
});

export default withRouter(connect (
  mapStateToProps,
  mapDispatchToProps
)(Review));
