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
      openSignup: false
    };
    this.openLoginModal = this.openLoginModal.bind(this);
    this.closeLoginModal = this.closeLoginModal.bind(this);
    this.openSignupModal = this.openSignupModal.bind(this);
    this.closeSignupModal = this.closeSignupModal.bind(this);
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

  render() {
    const display = this.props.user ? (
      <section>
        <button
          className="session-btn"
          onClick={this.props.requestLogout.bind(this)}>
          Log Out
        </button>
      </section>
    ) : (
      <section>
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
        <section className="nav-title">
          <img
            className="nav-logo"
            src="http://res.cloudinary.com/mccapes-construction/image/upload/v1517354018/logo_eevkue.png"
            />
          <h2>EatTime</h2>
        </section>
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
