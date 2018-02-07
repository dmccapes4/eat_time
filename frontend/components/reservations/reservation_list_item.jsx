import React from 'react';
import { Link } from 'react-router-dom';


export default ({ reservation }) => {
  console.log(reservation);
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
              <p className="reservation-time">{reservation.time}</p>
            </section>
          </section>
          <section className="reservation-list-btns">
            {
              reservation.completed ?
                <button
                  className="reservation-list-btn">
                  Review Reservation
                </button> :
                <button
                  className="reservation-list-btn">
                  Update Reservation
                </button>
            }
            <button
              className="reservation-list-btn">
              Delete Reservation
            </button>
          </section>

        </section>
      </li>
  );
};
