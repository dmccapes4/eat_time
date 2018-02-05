import React from 'react';

class RestaurantDetail extends React.Component {
  componentDidMount() {
    this.props.requestRestaurant(this.props.match.params.restaurantId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.restaurantId !== nextProps.match.params.restaurantId) {
      this.props.requestRestaurant(nextProps.match.params.restaurantId);
    }
  }

  render() {
    const { restaurant } = this.props;
    let showRestaurant = restaurant;

    if (!showRestaurant) showRestaurant = this.props.defaultRestaurant;

    if (!showRestaurant) return null;

    console.log(this.props);

    return (
      <section className="restaurant-detail">
        <section className="restaurant-detail-top">
          <figure className="restaurant-detail-img">
            <img src={showRestaurant.image_url} />
          </figure>
          <ul className="restaurant-detail-info">
            <li>
              <h3>{showRestaurant.name}</h3>
            </li>
            <li>{showRestaurant.cuisine}</li>
          </ul>
          <section className="available-reservations">
            <ul>
              {

              }
            </ul>
          </section>
        </section>
        <section className="restaurant-detail-bottom">
          <section className="restaurant-detail-reservation-description">
            <p>This is where the info about the reservation will go</p>
          </section>
          <section className="restaurant-detail-reservation-button-holder">
            <button
              className="reservation-btn"
              >Make Your Reservation!</button>
          </section>
        </section>
      </section>
    );
  }
}

export default RestaurantDetail;
