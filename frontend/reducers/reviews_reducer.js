import {
  RECEIVE_REVIEW,
  RECEIVE_REVIEWS,
  RECEIVE_UPDATE_REVIEW,
  RECEIVE_DELETE_REVIEW,
} from '../actions/review_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  const reviews = {};
  switch (action.type) {
    case RECEIVE_REVIEW:
      return Object.assign(
        {},
        state,
        { [action.review.id]: action.review }
      );
    case RECEIVE_REVIEWS:
      action.reviews.forEach((review) => {
        reviews[review.id] = review;
      });
      return reviews;
    case RECEIVE_DELETE_REVIEW:
      let newState = Object.assign({}, state);
      delete newState[action.reviewId];
      return newState;
    default:
      return state;
  }
};
