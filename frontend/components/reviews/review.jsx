import React from 'react';

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reservation_id: this.props.reservation.id,
      rating: 0,
      title: "",
      body: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.requestCreateReview(this.state)
      .then(() => this.props.closeUpdateModal());
  }

  handleInput(type) {
    return e => {
      this.setState({ [type]: e.target.value });
    };
  }

  // renderErrors() {
  //   return (
  //     <ul>
  //       {this.props.errors.map((error, i) => (
  //         <li key={`error-${i}`}>
  //           {error}
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // }

  render() {
    return(
      <section className="session">
        <form>
          <h2>Write a Review!</h2>
          <div className="input-fields">
            <label>Title:</label>
            <input
              type="text"
              value={this.state.title}
              onChange={this.handleInput('title')}
              />
          </div>
          <div className="input-fields">
            <label>Rating:</label>
            <select
              value={this.state.rating}
              onChange={this.handleInput('rating')}>
              <option value="1">1 star</option>
              <option value="2">2 star</option>
              <option value="3">3 star</option>
              <option value="4">4 star</option>
              <option value="5">5 star</option>
            </select>
          </div>
          <div className="input-fields">
            <label>Review:</label>
            <input
              type="textarea"
              value={this.state.password}
              onChange={this.handleInput('body')}
              />
          </div>
          <div className="session-btn-div">
            <button
              className="session-btn"
              onClick={this.handleSubmit}>
              Post Review
            </button>
          </div>
        </form>
      </section>
    );
  }
}

export default Review;
