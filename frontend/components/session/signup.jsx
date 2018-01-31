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

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.props);
    this.props.requestSignup(this.state);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  render () {
    return (
      <section className="signup">
        <form>
          <label>Username:
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleInput('username')}
              />
          </label>
          <br />
          <label>Email:
            <input
              type="text"
              value={this.state.email}
              onChange={this.handleInput('email')}
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
          <button onClick={this.handleSubmit}>Sign Up</button>
        </form>
        <br />
      </section>
    );
  }
}

export default Signup;
