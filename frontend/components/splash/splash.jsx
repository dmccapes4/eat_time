import React from 'react';
import Modal from 'react-modal';
import LoginContainer from '../session/login_container';
import SignupContainer from '../session/signup_container';
import style from '../modal_style';

class Splash extends React.Component {
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
    this.props.history.push("/home");
  }

  render() {
    return (
      <section
        className="splash">
        <section className="splash-top">
          <section className="splash-logo-box">
            <img
              className="splash-logo"
              src="https://res.cloudinary.com/mccapes-construction/image/upload/v1517768851/eattime_logo_okfz9e.png"
              />
          </section>
          <section className="splash-title">
            <h1>Welcome to</h1>
            <h1>EatTime</h1>
          </section>
          <section className="splash-top-right">
          </section>
        </section>
        <section className="splash-content">
          <section className="splash-content-left">
            <section className="splash-content-desctiption">
              <h2>Automated Restaurant Checkin!</h2>
              <h3>
                Are you tired of waiting in line
                to check in for your reservations?
              </h3>
              <h3>
                Do those loud buzzers startle you when
                your table is ready?
              </h3>
              <h3>
                Let EatTime handle checkin for you with
                automatic location based checkin and a custom
                ring tone to inform you that your table is ready!
              </h3>
            </section>
          </section>
          <section className="splash-content-right">
            <section className="splash-section-btns">
              <button
                onClick={this.openSignupModal}
                className="splash-btn">
                Sign Up
              </button>
              <button
                onClick={this.openLoginModal}
                className="splash-btn">
                Sign In
              </button>
              <button
                onClick={this.demoLogin}
                className="splash-btn">
                Demo
              </button>
            </section>
          </section>
        </section>
        <Modal
          isOpen={this.state.openLogin}
          onRequestClose={this.closeLoginModal}
          ariaHideApp={false}
          className={{base: "modal" }}
          style={style}>
          <LoginContainer

            closeLoginModal={this.closeLoginModal}
            />
        </Modal>
        <Modal isOpen={this.state.openSignup}
          onRequestClose={this.closeSignupModal}
          ariaHideApp={false}
          className={{base: "modal" }}>
          <SignupContainer
            closeSignupModal={this.closeSignupModal}
            />
        </Modal>
      </section>
    );
  }
}

export default Splash;
