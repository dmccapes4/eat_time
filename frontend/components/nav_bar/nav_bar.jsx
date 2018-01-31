import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

export default ({ user, requestLogout }) => {
  const display = user ? (
    <section>
      <button className="nav-btn" onClick={requestLogout}>Log Out</button>
    </section>
  ) : (
    <section>
      <button className="nav-signup-btn">Sign Up</button>
      <button className="nav-login-btn">Sign In</button>
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
    </section>
  );
};
