import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReservationList from './reservation_list';
import {
  requestReservations,
  requestDeleteReservation,
  requestUpdateReservation,
 } from '../../actions/reservation_actions';
 import { requestClearErrors } from '../../actions/session_actions';

const mapStateToProps = state => ({
  reservations: Object.keys(state.entities.reservations)
    .map(key => state.entities.reservations[key]),
  user: state.session.user,
});

const mapDispatchToProps = dispatch => ({
  requestClearErrors: () => dispatch(requestClearErrors()),
  requestReservations: () => dispatch(requestReservations()),
  requestDeleteReservation: id =>
    dispatch(requestDeleteReservation(id)),
  requestUpdateReservation: reservation =>
    dispatch(requestUpdateReservation(reservation)),
});

export default withRouter(connect (
  mapStateToProps,
  mapDispatchToProps
)(ReservationList));
