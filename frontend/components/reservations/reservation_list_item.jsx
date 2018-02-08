import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import UpdateReservationContainer from './update_reservation_container';
import ReviewContainer from '../reviews/review_container';


class ReservationListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openUpdate: false,
      openReview: false,
    };
    this.openUpdateModal = this.openUpdateModal.bind(this);
    this.closeUpdateModal = this.closeUpdateModal.bind(this);
    this.openReviewModal = this.openReviewModal.bind(this);
    this.closeReviewModal = this.closeReviewModal.bind(this);
  }

  openUpdateModal() {
    this.setState({ openUpdate: true });
  }

  closeUpdateModal() {
    this.setState({ openUpdate: false });
  }

  openReviewModal() {
    this.setState({ openReview: true });
  }

  closeReviewModal() {
    this.setState({ openReview: false });
  }

  render() {
    const { reservation } = this.props;

    return (
        <li>
          <section className="reservation-list-content">
            <section className="reservation-list-content-left">
              <img
                src={reservation.restaurant_image_url}
                className="reservation-img" />
              <section className="reservation-list-info">
                <p className="restaurant-name">{reservation.restaurant_name}</p>
                <p className="reservation-num-people">{`${reservation.num_people} people`}</p>
                <p className="reservation-date">{reservation.date}</p>
                <p className="reservation-time">{`${reservation.time} PM`}</p>
              </section>
            </section>
            <section className="reservation-list-btns">
              {
                reservation.completed ?
                  <button
                    className="reservation-list-btn"
                    onClick={this.openReviewModal.bind(this)}>
                    Review Reservation
                  </button> :
                  <button
                    className="reservation-list-btn"
                    onClick={this.openUpdateModal.bind(this)}>
                    Update Reservation
                  </button>
              }
              <button
                className="reservation-list-btn"
                onClick={() => this.props.requestDeleteReservation(reservation.id)}>
                Delete Reservation
              </button>
            </section>

            <Modal
              isOpen={this.state.openUpdate}
              onRequestClose={this.closeUpdateModal.bind(this)}
              ariaHideApp={false}
              className={{base: "update-modal"}}>
              <UpdateReservationContainer
                closeUpdateModal={this.closeUpdateModal.bind(this)}
                reservation={reservation} />
            </Modal>
            <Modal
              isOpen={this.state.openReview}
              onRequestClose={this.closeUpdateModal.bind(this)}
              ariaHideApp={false}
              className={{base: "modal"}}>
              <ReviewContainer
                closeUpdateModal={this.closeReviewModal.bind(this)}
                reservation={reservation} />
            </Modal>
          </section>
        </li>
    );
  }
}

export default ReservationListItem;
