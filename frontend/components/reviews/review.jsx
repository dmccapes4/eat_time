import React from 'react';
import StarRating from 'star-rating-react';

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reservation_id: this.props.reservation.id,
      rating: 0,
      title: "",
      body: "",
    };
    if (this.props.review) {
      this.state = this.props.review;
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.review) {
      this.props.requestUpdateReview(this.state)
        .then(() => this.props.closeReviewModal());
    } else {
      this.props.requestCreateReview(this.state)
        .then(() => this.props.closeReviewModal());
    }
  }

  handleInput(type) {
    return e => {
      this.setState({ [type]: e.target.value });
    };
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return(
      <section className="review-session">
        <form>
          <h2>Write a Review!</h2>
            <section className="errors">
              {this.renderErrors()}
            </section>
          <div className="input-fields">
            <label>Title:</label>
            <input
              className="review-title"
              type="text"
              value={this.state.title}
              onChange={this.handleInput('title')}
              />
          </div>
          <div className="input-fields">
            <label>Rating:</label>
            <StarRating
              name="star-rating"
              className="star-rating"
              totalStars={5}
              value={this.state.rating}
              onChange={(val) => { this.setState({ rating: val }); }} />
          </div>
          <div className="input-fields">
            <label>Review:</label>
            <textarea
              className="review-body"
              type="textarea"
              value={this.state.body}
              onChange={this.handleInput('body')}
              />
          </div>
          <div className="session-btn-div">
            {
              this.props.review
              ?
              <button
                className="session-btn review-btn"
                onClick={this.handleSubmit}>
                Update Review
              </button>
              :
              <button
                className="session-btn review-btn"
                onClick={this.handleSubmit}>
                Post Review
              </button>
            }
          </div>
        </form>
      </section>
    );
  }
}

export default Review;
