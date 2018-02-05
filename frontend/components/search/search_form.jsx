import React from 'react';
import Calendar from 'react-input-calendar';
import Modal from 'react-modal';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search:
      { city: '' ,
        cuisine: '',
        restaurant: '',
        time: '',
        num_people: '',
        date: new Date(),
      },
      openCalendarModal: false,
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.openCalendarModal = this.openCalendarModal.bind(this);
    this.closeCalendarModal = this.closeCalendarModal.bind(this);
  }

  openCalendarModal() {
    this.setState({ openCalendarModal: true });
  }

  closeCalendarModal() {
    this.setState({ openCalendarModal: false });
  }

  handleInput(e) {
    this.setState({
      search: Object.assign(
        {},
        this.state.search,
        { [e.target.id]: e.target.value }
      )
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let city = document.getElementById("city");
    let restaurant = document.getElementById("restaurant");
    let cuisine = document.getElementById("cuisine");
    let time = document.getElementById("time");
    let num_people = document.getElementById("num_people");
    // let date = document.getElementById("date");
    this.setState({
      search: Object.assign(
        {},
        this.state.search,
        {
          city: city.value,
          restaurant: restaurant.value,
          cuisine: cuisine.value,
          time: time.value,
          num_people: num_people.value,
        }
      )
    });
    this.props.requestSearchRestaurants(this.state);
  }

  render() {
    return (
      <section className="search-form-container">
        <section className="search-form-top">
          <form className="search-form">
            <section className="time-input search-btn">
              <select
                id="num_people"
                value={this.state.search.num_people}
                onChange={this.handleInput}>
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
                id="date"
                className="date-input-field"
                type="text"
                onChange={this.handleInput}
                placeholder="Date"/>
            </section>
            <section className="time-input search-btn">
              <select
                id="time"
                value={this.state.search.time}
                onChange={this.handleInput}>
                <option value="1:00">1:00</option>
                <option value="2:00">2:00</option>
                <option value="3:00">3:00</option>
                <option value="4:00">4:00</option>
                <option value="5:30">5:00</option>
                <option value="6:00">6:00</option>
                <option value="7:00">7:00</option>
                <option value="8:00">8:00</option>
                <option value="9:00">9:00</option>
              </select>
              <img src="https://res.cloudinary.com/mccapes-construction/image/upload/v1517526811/down-arrow_deu6jl.png"/>
            </section>
            <section className="city-input search-btn">
                <select
                  id="city"
                  value={this.state.search.city}
                  onChange={this.handleInput}>
                  <option value="">Select a City</option>
                  <option value="Sacramento">Sacramento</option>
                  <option value="San Francisco">San Francisco</option>
                  <option value="Santa Barbara">Santa Barbara</option>
                </select>
            </section>
            <button
              className="search-form-btn reservation-btn"
              onClick={this.handleSubmit}>
              Find a Table
            </button>
          </form>
        </section>
        <section className="search-form-bottom">
          <form className="refine-search-form">
            <section className="cuisine-search search-btn">
              <select
                id="cuisine"
                value={this.state.search.cuisine}
                onChange={this.handleInput}>
                <option value="">Select a Cuisine</option>
                <option value="Mexican">Mexican</option>
                <option value="Italian">Italian</option>
                <option value="Seafood">Seafood</option>
                <option value="Japanese">Japanese</option>
              </select>
            </section>
            <section className="restaurant-search search-btn">
              <input
                id="restaurant"
                className="restaurant-input"
                type="text"
                onChange={this.handleInput}
                placeholder="Restaurant"/>
            </section>
          </form>
        </section>
      </section>
    );
  }
}

export default SearchForm;
