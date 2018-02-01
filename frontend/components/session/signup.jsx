import React from 'react';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.requestClearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.requestSignup(this.state)
    .then(() => {
      this.props.history.push("/home");
      this.props.closeSignupModal();
    });
  }

  handleInput(type) {
    return (e) => {
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

  render () {
    return (
      <section className="session">
        <form>
          <section className="errors">
            {this.renderErrors()}
          </section>
          <br />
          <div className="input-fields">
            <label>Username:</label>
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleInput('username')}
              />
          </div>
          <br />
          <div className="input-fields">
            <label>Email:</label>
            <input
              type="text"
              value={this.state.email}
              onChange={this.handleInput('email')}
              />
          </div>
            <br />
          <div className="input-fields">
            <label>Password:</label>
            <input
              type="text"
              value={this.state.password}
              onChange={this.handleInput('password')}
              />
          </div>
          <br />
          <div className="session-btn-div">
            <button
              className="session-btn"
              onClick={this.handleSubmit}>
              Sign Up
            </button>
          </div>
        </form>
      </section>
    );
  }
}

export default Signup;
