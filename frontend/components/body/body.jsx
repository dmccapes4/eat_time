import React from 'react';
import SplashContainer from '../splash/splash_container';
import NavBarContainer from '../nav_bar/nav_bar_container';
import RestaurantContainer from '../restaurants/restaurant_index_container';
import SearchFormContainer from '../search/search_form_container';
import ProfileContainer from '../profile/profile_container';
import RestaurantDetailContainer
  from '../restaurants/restaurant_detail_container';
import FooterContainer from '../footer/footer_container';
import BodyImage from '../body_image';
import RestaurantIndexContainer
  from '../restaurants/restaurant_index_container';

class Body extends React.Component {
  render() {
    console.log(this.props.match.path);
    console.log(this.props.match.path === '/profile');
    return(
      <section className="body">
        <NavBarContainer />
        <BodyImage />
        <SearchFormContainer />
        <RestaurantIndexContainer />
        <FooterContainer />
      </section>
    );
  }
}

export default Body;
