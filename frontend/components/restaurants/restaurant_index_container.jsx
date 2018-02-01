import React from 'react';
import RestaurantIndex from './restaurant_index';
import { requestRestaurants } from '../../actions/restaurant_actions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  restaurants: Object.keys(state.entities.restaurants)
    .map(key => state.entities.restaurants[key])
});

const mapDispatchToProps = dispatch => ({
  requestRestaurants: () => dispatch(requestRestaurants()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantIndex);
