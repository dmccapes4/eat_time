import React from 'react';

class UpdateReservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.reservation.id,
      user_id: this.props.reservation.user_id,
      restaurant_id: this.props.reservation.restaurant_id,
      completed: this.props.reservation.completed,
      date: this.props.reservation.date,
      num_people: this.props.reservation.num_people,
      time: this.props.reservation.time,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(field) {
    return e => {
      this.setState({
        [field]: e.currentTarget.value
      });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.requestUpdateReservation(this.state)
    .then(this.props.closeUpdateModal());
  }

  componentDidMount() {
    let date = new Date();
    let month = date.getMonth() + 1;
    month = month.length > 9 ? `${month}` : `0${month}`;
    let day = date.getDate();
    day = day > 9 ? `${day}` : `0${day}`;
    date = `${date.getFullYear()}-${month}-${day}`;

    document.getElementById('update-date').min = date;

    date = new Date(this.state.date);
    month = date.getMonth() + 1;
    month = month.length > 9 ? `${month}` : `0${month}`;
    day = date.getDate();
    day = day > 9 ? `${day}` : `0${day}`;
    date = `${date.getFullYear()}-${month}-${day}`;
    this.state.date = date;

    document.getElementById('update-date').value = date;
  }

  render() {
    let date = this.state.date;
    date = date.split('-');
    date[2] = `${parseInt(date[2])}`;
    date.join('-');
    date = new Date(date);
    date = date.toString().split(' ');


    return (
      <section className="update-reservation">
        <h2>Update Reservation!</h2>
        <section className="search-form-container">
          <section className="search-form-top">
            <form className="search-form">
              <section className="time-input search-btn">
                <select
                  id="update-num-people"
                  onChange={this.handleInput('num_people')}
                  value={this.state.num_people}>
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
                  value={this.state.date}
                  onChange={this.handleInput('date')}/>
              </section>
              <section className="time-input search-btn">
                <select
                  id="update-time"
                  value={this.state.time}
                  onChange={this.handleInput('time')}
                  >
                  <option value="12:00">12:00</option>
                  <option value="12:30">12:30</option>
                  <option value="1:00">1:00</option>
                  <option value="1:30">1:30</option>
                  <option value="2:00">2:00</option>
                  <option value="2:30">2:30</option>
                  <option value="3:00">3:00</option>
                  <option value="3:30">3:30</option>
                  <option value="4:00">4:00</option>
                  <option value="4:30">4:30</option>
                  <option value="5:00">5:00</option>
                  <option value="5:30">5:30</option>
                  <option value="6:00">6:00</option>
                  <option value="6:30">6:30</option>
                  <option value="7:00">7:00</option>
                  <option value="7:30">7:30</option>
                  <option value="8:00">8:00</option>
                  <option value="8:30">8:30</option>
                  <option value="9:00">9:00</option>
                  <option value="9:30">9:30</option>
                  <option value="10:00">10:00</option>
                </select>
                <img src="https://res.cloudinary.com/mccapes-construction/image/upload/v1517526811/down-arrow_deu6jl.png"/>
              </section>
            </form>
          </section>
          <section className="update-bottom">
            <section className="restaurant-detail-reservation-description">
              {
                <p>
                  {`Reservation for ${this.state.num_people} people at
                  ${this.props.reservation.restaurant_name} on
                  ${date.slice(0, 3).join(' ')}, ${date.slice(3, 4)} at
                  ${this.state.time} PM`}
                </p>
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
