import React from 'react';
import RestaurantIndexItem from './restaurant_index_item';
import RestaurantDetailContainer from './restaurant_detail_container';
import { Route, HashRouter } from 'react-router-dom';

class RestaurantIndex extends React.Component {
  constructor(props) {
    super(props);
    let city;
    let cuisine;
    let name;
  }

  componentDidMount() {
    this.props.requestRestaurants();
  }

  render() {
    const { restaurants } = this.props;
    return (
      <section className="restaurant-container">
        <ul className="restaurant-list">
          {
            restaurants.map(restaurant => {
              if (restaurant.id) {
                return <RestaurantIndexItem
                key={`${restaurant.id}`}
                restaurant={restaurant}/>;
              }
            })
          }
        </ul>
        <RestaurantDetailContainer defaultRestaurant={restaurants[0]} />
      </section>
    );
  }
}

export default RestaurantIndex;
