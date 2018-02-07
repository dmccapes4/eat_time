import {
  RECEIVE_RESERVATION,
  RECEIVE_RESERVATIONS,
  RECEIVE_UPDATE_RESERVATION,
  RECEIVE_DELETE_RESERVATION,
} from '../actions/reservation_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  const reservations = {};
  switch (action.type) {
    case RECEIVE_RESERVATION:
      return Object.assign(
        {},
        { [action.reservation.id]: action.reservation },
        state
      );
    case RECEIVE_RESERVATIONS:
      action.reservations.forEach((reservation) => {
        reservations[reservation.id] = reservation;
      });
      return reservations;
    case RECEIVE_DELETE_RESERVATION:
      let newState = Object.assign({}, state);
      delete newState[action.reservationId];
      return newState;
    default:
      return state;
  }
};
