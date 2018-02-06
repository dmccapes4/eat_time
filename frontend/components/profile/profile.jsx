import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';
import BodyImage from '../body_image';
import ProfileNavBarContainer from './profile_nav_bar_container';
import FooterContainer from '../footer/footer_container';

class Profile extends React.Component {
  render () {
    return (
      <section className="profile">
        <NavBarContainer />
        <BodyImage />
        <ProfileNavBarContainer />
        <FooterContainer />
      </section>
    );
  }
}

export default Profile;
