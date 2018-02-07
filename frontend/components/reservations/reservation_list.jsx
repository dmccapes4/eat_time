import React from 'react';
import ReservationListItem from './reservation_list_item';


class ReservationList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestReservations();
  }

  render () {
    const { reservations } = this.props;
    return (
      <section className="reservation-list-container">
        <section className="reservation-list-left"></section>
        <ul className="reservation-list">
          {
            this.props.match.path === '/profile/past' ?
            reservations.map(reservation => {
              if (reservation.completed &&
                  reservation.user_id === this.props.user.id) {
                return <ReservationListItem
                  key={`${reservation.id}`}
                  reservation={reservation}/>;
              }
            }) : reservations.map(reservation => {
              if (!reservation.completed &&
                  reservation.user_id === this.props.user.id) {
                return <ReservationListItem
                  key={`${reservation.id}`}
                  reservation={reservation}/>;
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