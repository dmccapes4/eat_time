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

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.props);
    this.props.requestLogin(this.state);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  render () {
    return (
      <section className="login">
        <form>
          <label>Username:
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleInput('username')}
              />
          </label>
          <br />
          <label>Password:
            <input
              type="text"
              value={this.state.password}
              onChange={this.handleInput('password')}
              />
          </label>
          <br />
          <button onClick={this.handleSubmit}>Sign Up</button>
        </form>
      </section>
    );
  }
}

export default Login;
