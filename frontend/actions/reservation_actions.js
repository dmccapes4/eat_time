import {
  fetchReservation,
  fetchReservations,
  fetchCreateReservation,
  fetchUpdateReservation,
  fetchDeleteReservation,
} from '../utils/reservation_util';

export const RECEIVE_RESERVATION = 'RECEIVE_RESERVATION';
export const RECEIVE_RESERVATIONS = 'RECEIVE_RESERVATIONS';
export const RECEIVE_CREATE_RESERVATION = 'RECEIVE_CREATE_RESERVATION';
export const RECEIVE_UPDATE_RESERVATION = 'RECEIVE_UPDATE_RESERVATION';
export const RECEIVE_DELETE_RESERVATION = 'RECEIVE_DELETE_RESERVATION';

const receiveReservation = reservation => ({
  type: RECEIVE_RESERVATION,
  reservation,
});

const receiveReservations = reservations => ({
  type: RECEIVE_RESERVATIONS,
  reservations,
});

const receiveDeleteReservation = reservationId => ({
  type: RECEIVE_DELETE_RESERVATION,
  reservationId,
});

export const requestReservation = id => dispatch => (
  fetchReservation(id)
    .then((reservation) => dispatch(receiveReservation(reservation)))
);

export const requestReservations = () => dispatch => (
  fetchReservations()
    .then((reservations) => dispatch(receiveReservations(reservations)))
);

export const requestCreateReservation = reservation => dispatch => (
  fetchCreateReservation(reservation)
    .then((serverReservation) =>
      dispatch(receiveReservation(serverReservation)))
);

export const requestUpdateReservation = reservation => dispatch => (
  fetchUpdateReservation(reservation)
    .then((serverReservation) =>
      dispatch(receiveReservation(serverReservation)))
);

export const requestDeleteReservation = id => dispatch => (
  fetchDeleteReservation(id)
    .then(() => dispatch(receiveDeleteReservation(id)))
);
