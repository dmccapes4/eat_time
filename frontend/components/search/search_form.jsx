import React from 'react';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: { city: ''} };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
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
    console.log(this.state);
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
            <input
              type="text"
              onChange={this.handleInput}
              />
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
