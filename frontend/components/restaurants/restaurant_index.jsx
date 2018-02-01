import React from 'react';
import RestaurantIndexItem from './restaurant_index_item';

class RestaurantIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestRestaurants();
  }

  render() {
    const { restaurants } = this.props;
    return (
      <section className="restaurant-list">
        <ul>
          {
            restaurants.map(restaurant => (
              <RestaurantIndexItem
              key={`${restaurant.id}`}
              restaurant={restaurant}/>
              )
            )
          }
        </ul>
      </section>
    );
  }
}

export default RestaurantIndex;
