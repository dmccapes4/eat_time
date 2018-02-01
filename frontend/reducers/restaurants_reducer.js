import {
  RECEIVE_RESTAURANT,
  RECEIVE_RESTAURANTS,
} from '../actions/restaurant_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  const restaurants = {};
  switch (action.type) {
    case RECEIVE_RESTAURANTS:
      action.restaurants.forEach((restaurant) => {
        restaurants[restaurant.id] = restaurant;
      });
      return restaurants;
    case RECEIVE_RESTAURANT:
      return Object.assign({}, state, { [action.restaurant.id]: action.restaurant });
    default:
      return state;
  }
};
