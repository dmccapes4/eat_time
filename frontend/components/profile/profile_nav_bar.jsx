import React from 'react';
import { Link } from 'react-router-dom';

class ProfileNavBar extends React.Component {
  render () {
    return (
      <section className="profile-nav">
        <Link to="/profile/past">
          <button
            className="profile-btn">
            Past Reservations
          </button>
        </Link>
        <Link to="/profile/future">
          <button
            className="profile-btn">
            Future Reservations
          </button>
        </Link>
      </section>
    );
  }
}

export default ProfileNavBar;
