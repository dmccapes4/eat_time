import React from 'react';
import RestaurantIndex from './restaurant_index';
import { requestRestaurants } from '../../actions/restaurant_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
  restaurants: Object.keys(state.entities.restaurants)
    .map(key => state.entities.restaurants[key])
});

const mapDispatchToProps = dispatch => ({
  requestRestaurants: () => dispatch(requestRestaurants()),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantIndex));
