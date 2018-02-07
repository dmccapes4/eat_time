import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NewReview from './new_review';
import {
  requestCreateReview,
} from '../../actions/review_actions';

const mapStateToProps = (state, ownProps) => ({
  closeReviewModal: ownProps.closeReviewModal,
});

const mapDispatchToProps = dispatch => ({
  requestCreateReview: reservation => dispatch(requestCreateReview(reservation)),
});

export default withRouter(connect (
  mapStateToProps,
  mapDispatchToProps
)(NewReview));
