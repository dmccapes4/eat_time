import { fetchSearchRestaurants } from '../utils/search_utils';
import { receiveRestaurants } from './restaurant_actions';

export const requestSearchRestaurants = searchTerms => dispatch => (
  fetchSearchRestaurants(searchTerms)
    .then(restaurants => dispatch(receiveRestaurants(restaurants)))
);
