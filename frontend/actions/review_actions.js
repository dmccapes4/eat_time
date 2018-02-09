import {
  fetchReview,
  fetchReviews,
  fetchCreateReview,
  fetchUpdateReview,
  fetchDeleteReview,
} from '../utils/review_utils';

import { receiveErrors } from './session_actions';

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const RECEIVE_CREATE_REVIEW = 'RECEIVE_CREATE_REVIEW';
export const RECEIVE_UPDATE_REVIEW = 'RECEIVE_UPDATE_REVIEW';
export const RECEIVE_DELETE_REVIEW = 'RECEIVE_DELETE_REVIEW';

const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review,
});

const receiveReviews = reviews => ({
  type: RECEIVE_REVIEWS,
  reviews,
});

const receiveDeleteReview = reviewId => ({
  type: RECEIVE_DELETE_REVIEW,
  reviewId,
});

export const requestReview = id => dispatch => (
  fetchReview(id)
    .then((review) => dispatch(receiveReview(review)))
);

export const requestReviews = () => dispatch => (
  fetchReviews()
    .then((reviews) => dispatch(receiveReviews(reviews)))
);

export const requestCreateReview = review => dispatch => (
  fetchCreateReview(review)
    .then((serverReview) =>
      dispatch(receiveReview(serverReview)),
    errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const requestUpdateReview = review => dispatch => (
  fetchUpdateReview(review)
    .then((serverReview) =>
      dispatch(receiveReview(serverReview)),
    errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const requestDeleteReview = id => dispatch => {
  return fetchDeleteReview(id)
    .then(() => dispatch(receiveDeleteReview(id)));
};
