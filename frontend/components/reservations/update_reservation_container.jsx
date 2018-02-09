import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import UpdateReservation2 from './update_reservation2';
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
)(UpdateReservation2));
