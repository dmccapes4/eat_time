import React from 'react';
import ReservationListItem from './reservation_list_item';


class ReservationList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestReservations();
    this.props.requestReviews();
  }

  render () {
    const { reservations } = this.props;
    const { reviews } = this.props;
    return (
      <section className="reservation-list-container">
        <section className="reservation-list-left"></section>
        <ul className="reservation-list">
          {
            this.props.match.path === "/profile/past" ?
            reservations.map(reservation => {
              let thisReview;
              reviews.forEach(review => {
                if (review.reservation_id === reservation.id) {
                  thisReview = review;
                }
              });
              if (reservation.completed &&
                  reservation.user_id === this.props.user.id) {
                return <ReservationListItem
                  key={`${reservation.id}`}
                  reservation={reservation}
                  review={thisReview}
                  requestDeleteReview={this.props.requestDeleteReview}
                  requestClearErrors={this.props.requestClearErrors}
                  requestDeleteReservation={this.props.requestDeleteReservation}
                  requestUpdateReservation={this.props.requestUpdateReservation}/>;
              }
            }) : reservations.map(reservation => {
              if (!reservation.completed &&
                  reservation.user_id === this.props.user.id) {
                return <ReservationListItem
                  key={`${reservation.id}`}
                  reservation={reservation}
                  requestClearErrors={this.props.requestClearErrors}
                  requestDeleteReservation={this.props.requestDeleteReservation}
                  requestUpdateReservation={this.props.requestUpdateReservation}/>;
              }
            })
          }
        </ul>
        <section className="reservation-list-right"></section>
      </section>
    );
  }
}

export default ReservationList;
