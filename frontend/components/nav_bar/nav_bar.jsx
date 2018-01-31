import React from 'react';
import { Link } from 'react-router-dom';

export default ({ user, requestLogout }) => {
  const display = user ? (
    <section>
      <button className="nav-btn" onClick={requestLogout}>Log Out</button>
    </section>
  ) : (
    <section>
      <button className="nav-btn" to="/signup">Sign Up</button>
      <button
        className="nav-btn"
        to="/login">Sign In</button>
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
