import React from 'react';

class UpdateReservation extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    this.time = e.innerText;
  }

  handleSubmit(e) {
    e.preventDefault();
    let reservation = this.props.reservation;
    reservation['time'] = this.time;
    reservation['date'] = document.getElementById('update-date').value;
    let numPeople = parseInt(document.getElementById('update-num-people').value);
    reservation['num_people'] = numPeople;
    reservation['completed'] = false;
    this.props.requestUpdateReservation(reservation)
      .then(this.props.closeUpdateModal());
  }

  componentDidMount() {
    this.time = document.getElementById('update-time').value;
    this.time = `${this.time}:00`;

    let date = new Date(this.props.reservation.date);
    let month = date.getMonth() + 1;
    month = month.length > 9 ? `${month}` : `0${month}`;
    let day = date.getDate();
    day = day > 9 ? `${day}` : `0${day}`;
    date = `${date.getFullYear()}-${month}-${day}`;
    document.getElementById('update-date').value = date;

    document.getElementById('update-date').addEventListener('change',
      () => {
        this.forceUpdate();
    });
    document.getElementById('update-time').addEventListener('change',
      () => {
        this.time = document.getElementById('update-time').value;
        this.time = `${this.time}:00`;
        this.forceUpdate();
    });


    this.forceUpdate();
  }

  render() {
    let date = document.getElementById('update-date');
    if (date) {
      date = date.value;
      date = date.split('-');
      date[2] = `${parseInt(date[2])}`;
      date.join('-');
      date = new Date(date);
      date = date.toString().split(' ');
    }

    let time = document.getElementById('update-time');
    if (time) time = time.value;

    let reservationTimes = [
      time - 1 === 0 ? '12:00' : `${time - 1}:00`,
      time - 1 === 0 ? '12:30' : `${time - 1}:30`,
      `${time}:00`,
      `${time}:30`,
      `${parseInt(time) + 1}:00`,
    ];

    let numPeople = document.getElementById('update-num-people');
    if (numPeople) numPeople = numPeople.value;

    return (
      <section className="update-reservation">
        <h2>Update Reservation!</h2>
        <section className="search-form-container">
          <section className="search-form-top">
            <form className="search-form">
              <section className="time-input search-btn">
                <select
                  id="update-num-people"
                  onChange={this.handleInput}
                  value={this.props.reservation.num_people}>
                  <option value="2">2 people</option>
                  <option value="3">3 people</option>
                  <option value="4">4 people</option>
                  <option value="5">5 people</option>
                  <option value="6">6 people</option>
                  <option value="7">7 people</option>
                  <option value="8">8 people</option>
                </select>
                <img src="https://res.cloudinary.com/mccapes-construction/image/upload/v1517526811/down-arrow_deu6jl.png"/>
              </section>
              <section className="date-input search-btn">
                <input
                  id="update-date"
                  className="date-input-field"
                  type="date"
                  />
              </section>
              <section className="time-input search-btn">
                <select
                  id="update-time"

                  >
                  <option value="1">1:00</option>
                  <option value="2">2:00</option>
                  <option value="3">3:00</option>
                  <option value="4">4:00</option>
                  <option value="5">5:00</option>
                  <option value="6">6:00</option>
                  <option value="7">7:00</option>
                  <option value="8">8:00</option>
                  <option value="9">9:00</option>
                </select>
                <img src="https://res.cloudinary.com/mccapes-construction/image/upload/v1517526811/down-arrow_deu6jl.png"/>
              </section>
              <button
                className="search-form-btn reservation-btn"
                >
                Find a Table
              </button>
            </form>
          </section>
          <section className="search-form-bottom update-form-bottom">
            <ul className="available-reservations">
              {
                reservationTimes.map(reservationTime => (
                  <button
                    className="update-btn"
                    key={reservationTime}
                    onClick={(e) => {
                      this.time = e.target.innerText;
                      this.forceUpdate();
                    }}>
                    {`${reservationTime}`}
                  </button>
                ))
              }
            </ul>
          </section>
          <section className="update-bottom">
            <section className="restaurant-detail-reservation-description">
              {
                date ?
                <p>
                  {`Reservation for ${numPeople} people at
                  ${this.props.reservation.restaurant_name} on
                  ${date.slice(0, 3).join(' ')}, ${date.slice(3, 4)} at
                  ${this.time} PM`}
                </p>
                :
                <p></p>
              }
            </section>
            <section className="restaurant-detail-reservation-btn-holder">
              <button
                className="reservation-btn"
                onClick={this.handleSubmit}>
                Update Your Reservation!</button>
            </section>
        </section>
      </section>
    </section>
    );
  }
}

export default UpdateReservation;
