import React from 'react';
import ReactDOM from 'react-dom';
import StarRating from 'star-rating-react';

class RestaurantDetail extends React.Component {
  constructor(props) {
    super(props);
    this.reservationTimes = [];
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    this.time = e.innerText;
  }

  handleSubmit(e) {
    e.preventDefault();
    let reservation = {};
    reservation['user_id'] = this.props.user.id;
    if (this.props.restaurant) {
      reservation['restaurant_id'] = this.props.restaurant.id;
    } else {
      reservation['restaurant_id'] = this.props.defaultRestaurant.id;
    }
    reservation['time'] = this.time;
    reservation['date'] = document.getElementById('date').value;
    let numPeople = parseInt(document.getElementById('num_people').value);
    reservation['num_people'] = numPeople;
    reservation['completed'] = false;
    this.props.requestCreateReservation(reservation)
      .then(this.props.history.push("/profile"));
  }

  componentDidMount() {
    this.time = document.getElementById('time').value;
    this.time = `${this.time}:00`;
    document.getElementById('date').addEventListener('change',
      () => {
        this.forceUpdate();
    });
    document.getElementById('time').addEventListener('change',
      () => {
        this.forceUpdate();
    });
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


    let date = document.getElementById('date');
    if (date) {
      date = date.value;
      date = date.split('-');
      date[2] = `${parseInt(date[2])}`;
      date.join('-');
      date = new Date(date);
      date = date.toString().split(' ');
    }

    let time = document.getElementById('time');
    if (time) time = time.value;

    let reservationTimes = [
      time - 1 === 0 ? '12:00' : `${time - 1}:00`,
      time - 1 === 0 ? '12:30' : `${time - 1}:30`,
      `${time}:00`,
      `${time}:30`,
      `${parseInt(time) + 1}:00`,
    ];

    let numPeople = document.getElementById('num_people');
    if (numPeople) numPeople = numPeople.value;

    return (
      <section className="restaurant-detail">
        <section className="restaurant-detail-top">
          <figure className="restaurant-detail-img">
            <img src={showRestaurant.image_url} />
          </figure>

          <section className="restaurant-reservation-info">
            <ul className="restaurant-detail-info">
              <li>
                <h3>{showRestaurant.name}</h3>
              </li>
              <li>{showRestaurant.cuisine}</li>
            </ul>
            <section className="star-rating-cover">
            </section>
              <section className="restaurant-detail-rating">
                <StarRating
                  value={showRestaurant.rating} />
                <p>{`from ${showRestaurant.num_reviews} reviews`}</p>
              </section>
            <ul className="available-reservations">
              {
                reservationTimes.map(reservationTime => (
                  <button
                    className="reservation-btn"
                    key={reservationTime}
                    onClick={(e) => {
                      this.time = e.target.innerText;
                      this.setState({ reserved: false });
                      this.forceUpdate();
                    }}>
                    {`${reservationTime}`}
                  </button>
                ))
              }
            </ul>
          </section>
        </section>
        <section className="restaurant-detail-bottom">
          <section className="restaurant-detail-reservation-description">
            {
              date ?
              <p>{`Reservation for ${numPeople} people at ${showRestaurant.name}
                on ${date.slice(0, 3).join(' ')}, ${date.slice(3, 4)} at
                ${this.time} PM`}</p>
              :
              <p></p>
            }
          </section>
          <section className="restaurant-detail-reservation-btn-holder">
            <button
              className="reservation-btn"
              onClick={this.handleSubmit}>
              Make Your Reservation!
            </button>
          </section>
        </section>
        <section className="restaurant-reviews">
          <section className="star-rating-cover2">
          </section>
          <ul className="restaurant-reviews-list">
            {
              showRestaurant.reviews
              ?
              showRestaurant.reviews.map(review => {
                return (
                  <li
                    className="restaurant-review-item"
                    key={review.id}>
                    <p>{review.title}</p>
                    <p>{`by ${review.username}`}</p>
                    <StarRating
                      value={review.rating} />
                    <p>{review.body}</p>
                  </li>
                );
              })
              :
              null
            }
          </ul>
        </section>
      </section>
    );
  }
}

export default RestaurantDetail;
