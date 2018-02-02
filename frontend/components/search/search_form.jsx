import React from 'react';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: { city: ''} };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    console.log('input');
    this.setState({
      search: Object.assign(
        {},
        this.state.search,
        { city: e.target.value }
      )
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let dropDown = document.getElementById("cities");
    this.setState({
      search: Object.assign(
        {},
        this.state.search,
        { city: dropDown.value }
      )
    });
    this.props.requestSearchRestaurants(this.state);
  }

  render() {
    return (
      <section className="search-form-container">
        <form className="search-form">
          <section className="num-people-input search-btn">
            <p>2 people</p>
            <img src="https://res.cloudinary.com/mccapes-construction/image/upload/v1517526811/down-arrow_deu6jl.png"/>
          </section>
          <section className="date-input search-btn">
            <p>Feb 1, 2018</p>
            <img src="https://res.cloudinary.com/mccapes-construction/image/upload/v1517526811/down-arrow_deu6jl.png"/>
          </section>
          <section className="time-input search-btn">
            <p>7:00 PM</p>
            <img src="https://res.cloudinary.com/mccapes-construction/image/upload/v1517526811/down-arrow_deu6jl.png"/>
          </section>
          <section className="city-input search-btn">
              <select
                id="cities"
                onChange={this.handleInput}
                value={this.state.search.city}>
                <option value="select">Select a City</option>
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
    );
  }
}

export default SearchForm;
