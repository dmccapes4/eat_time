import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import LoginContainer from '../session/login_container';
import SignupContainer from '../session/signup_container';
import _ from 'lodash';
import Root from '../root';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openLogin: false,
      openSignup: false,
    };
    this.openLoginModal = this.openLoginModal.bind(this);
    this.closeLoginModal = this.closeLoginModal.bind(this);
    this.openSignupModal = this.openSignupModal.bind(this);
    this.closeSignupModal = this.closeSignupModal.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  openLoginModal() {
    this.setState({ openLogin: true });
  }

  closeLoginModal() {
    this.props.requestClearErrors();
    this.setState({ openLogin: false });
  }

  openSignupModal() {
    this.setState({ openSignup: true });
  }

  closeSignupModal() {
    this.props.requestClearErrors();
    this.setState({ openSignup: false });
  }

  demoLogin() {
    this.props.requestLogin({username: 'Demo', email: '_', password: '______'});
    this.forceUpdate();
  }

  render() {
    const display = this.props.user ? (
      <section className="logout-welcome">
        <p>Welcome, {this.props.user.username}</p>
        {
          (this.props.match.path === '/profile' ||
           this.props.match.path === '/profile/past' ||
           this.props.match.path === '/profile/future') ?
          <Link to="/restaurant/1">
            <button
              className="nav-signup-btn view-profile-btn">
              Home
            </button>
          </Link>
          :
          <Link to="/profile">
            <button
              className="nav-signup-btn view-profile-btn">
              Profile
            </button>
          </Link>
        }
        <button
          className="nav-signup-btn"
          onClick={this.props.requestLogout.bind(this)}>
          Log Out
        </button>
      </section>
    ) : (
      <section className="session-btns">
        <button
          onClick={this.demoLogin.bind(this)}
          className="nav-signup-btn demo-btn">
          Demo
        </button>
        <button
          onClick={this.openSignupModal.bind(this)}
          className="nav-signup-btn">
          Sign Up
        </button>
        <button
          onClick={this.openLoginModal.bind(this)}
          className="nav-login-btn">
          Sign In
        </button>
      </section>
    );

     return (
      <section className="nav-bar">
        <Link to="/">
          <section className="nav-title">
            <img
              className="nav-logo"
              src="https://res.cloudinary.com/mccapes-construction/image/upload/v1517768851/eattime_logo_okfz9e.png"
              />
            <h2>EatTime</h2>
          </section>
        </Link>
        <section className="nav-btns">
          {display}
        </section>
        <Modal
          isOpen={this.state.openLogin}
          onRequestClose={this.closeLoginModal}
          ariaHideApp={false}
          className={{base: "modal"}}>
          <LoginContainer closeLoginModal={this.closeLoginModal} />
        </Modal>
        <Modal isOpen={this.state.openSignup}
          onRequestClose={this.closeSignupModal}
          ariaHideApp={false}
          className={{base: "modal"}}>
          <SignupContainer closeSignupModal={this.closeSignupModal} />
        </Modal>
      </section>
    );
  }
}

export default NavBar;
