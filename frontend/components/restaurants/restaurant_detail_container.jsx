import { connect } from 'react-redux';
import RestaurantDetail from './restaurant_detail';
import { requestRestaurant } from '../../actions/restaurant_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  const restaurant = state.entities.restaurants[ownProps.match.params.restaurantId];
  return { restaurant };
};

const mapDispatchToProps = dispatch => ({
  requestRestaurant: id => dispatch(requestRestaurant(id))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantDetail));
