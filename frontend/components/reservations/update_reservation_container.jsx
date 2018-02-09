import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import UpdateReservation from './update_reservation';
import {
  requestUpdateReservation,
} from '../../actions/reservation_actions';

const mapStateToProps = (state, ownProps) => ({
  reservation: ownProps.reservation,
  closeUpdateModal: ownProps.closeUpdateModal,
});

const mapDispatchToProps = dispatch => ({
  requestUpdateReservation: reservation => dispatch(requestUpdateReservation(reservation)),
});

export default withRouter(connect (
  mapStateToProps,
  mapDispatchToProps
)(UpdateReservation));
