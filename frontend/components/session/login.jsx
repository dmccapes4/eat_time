import React from 'react';

class Login extends React.Component {
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
    this.props.requestLogin(this.state)
    .then(() => {
      if (this.props.match.path === "/splash") {
        this.props.history.push("/home");
      } else {
        this.forceUpdate();
      }
      this.props.closeLoginModal();
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
          <h2>Log in!</h2>
          <section className="errors">
            {this.renderErrors()}
          </section>
          <div className="input-fields">
            <label>Username:</label>
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleInput('username')}
              />
          </div>
          <div className="input-fields">
            <label>Password:</label>
            <input
              type="password"
              value={this.state.password}
              onChange={this.handleInput('password')}
              />
          </div>
          <div className="session-btn-div">
            <button
              className="session-btn"
              onClick={this.handleSubmit}>
              Sign In
            </button>
          </div>
        </form>
      </section>
    );
  }
}

export default Login;
