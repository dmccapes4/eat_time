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

  componentDidMount() {
    let date = new Date();
    let month = date.getMonth() + 1;
    month = month.length > 9 ? `${month}` : `0${month}`;
    let day = date.getDate();
    day = day > 9 ? `${day}` : `0${day}`;
    date = `${date.getFullYear()}-${month}-${day}`;

    document.getElementById('date').value = date;
    document.getElementById('date').min = date;
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
    this.setState({
      search: Object.assign(
        {},
        this.state.search,
        {
          city: city.value,
          restaurant: restaurant.value,
          cuisine: cuisine.value,
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
            </section>
            <section className="date-input search-btn">
              <input
                id="date"
                className="date-input-field"
                type="date"
                onChange={(e) => {
                  this.handleInput(e);
                  this.forceUpdate();
                }}/>
            </section>
            <section className="time-input search-btn">
              <select
                id="time"
                value={this.state.search.time}
                onChange={this.handleInput}>
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
                  <option value="San Diego">San Diego</option>
                  <option value="New York">New York</option>
                  <option value="Davis">Davis</option>
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
                <option value="French">French</option>
                <option value="American">American</option>
                <option value="Californian">Californian</option>
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
