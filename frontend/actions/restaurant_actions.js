import {
  fetchRestaurants,
  fetchRestaurant,
} from '../utils/restaurant_utils';

export const RECEIVE_RESTAURANTS = 'RECEIVE_RESTAURANTS';
export const RECEIVE_RESTAURANT = 'RECEIVE_RESTAURANT';

const receiveRestaurants = restaurants => ({
  type: RECEIVE_RESTAURANTS,
  restaurants,
});

const receiveRestaurant = restaurant => ({
  type: RECEIVE_RESTAURANT,
  restaurant,
});

export const requestRestaurants = () => dispatch => (
  fetchRestaurants()
    .then(restaurants => dispatch(receiveRestaurants(restaurants)))
);

export const requestRestaurant = id => dispatch => (
  fetchRestaurants(id)
    .then(restaurants => dispatch(receiveRestaurants(restaurants)))
);
