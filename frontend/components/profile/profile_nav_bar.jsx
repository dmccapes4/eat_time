import React from 'react';

class ProfileNavBar extends React.Component {
  render () {
    return (
      <section className="profile">
        <button
          className="nav-signup-btn">
          Past Reservations
        </button>
        <button
          className="nav-signup-btn">
          Future Reservations
        </button>
      </section>
    );
  }
}

export default ProfileNavBar;
