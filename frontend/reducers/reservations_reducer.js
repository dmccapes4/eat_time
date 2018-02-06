import {
  RECEIVE_RESERVATION,
  RECEIVE_RESERVATIONS,
  RECEIVE_UPDATE_RESERVATION,
  RECEIVE_DELETE_RESERVATION,
} from '../actions/restaurant_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  const restaurants = {};
  switch (action.type) {
    case RECEIVE_RESERVATION:
      return Object.assign(
        {},
        { [action.reservation.id]: action.reservation },
        state
      );
    case RECEIVE_RESERVATIONS:
      return action.reservations;
    case RECEIVE_DELETE_RESERVATION:
      let newState = Object.assign({}, state);
      delete newState[action.reservationId];
      return newState;
    default:
      return state;
  }
};
