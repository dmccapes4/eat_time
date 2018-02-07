import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import RestaurantDetail from './restaurant_detail';
import { requestRestaurant } from '../../actions/restaurant_actions';
import { requestCreateReservation } from '../../actions/reservation_actions';

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  let restaurant = state.entities.restaurants[ownProps.match.params.restaurantId];
  if (!restaurant) restaurant = ownProps.defaultRestaurant;
  return {
    restaurant,
    user: state.session.user,
   };
};

const mapDispatchToProps = dispatch => ({
  requestRestaurant: id => dispatch(requestRestaurant(id)),
  requestCreateReservation: reservation =>
    dispatch(requestCreateReservation(reservation)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantDetail));
