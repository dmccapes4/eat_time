import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReservationList from './reservation_list';
import { requestReservations } from '../../actions/reservation_actions';

const mapStateToProps = state => ({
  reservations: Object.keys(state.entities.reservations)
    .map(key => state.entities.reservations[key]),
  user: state.session.user,
});

const mapDispatchToProps = dispatch => ({
  requestReservations: () => dispatch(requestReservations()),
});

export default withRouter(connect (
  mapStateToProps,
  mapDispatchToProps
)(ReservationList));
