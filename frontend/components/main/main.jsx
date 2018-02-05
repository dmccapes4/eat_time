import React from 'react';
import SplashContainer from '../splash/splash_container';
import NavBarContainer from '../nav_bar/nav_bar_container';
import BodyContainer from '../body/body_container';
import SearchFormContainer from '../search/search_form_container';
import FooterContainer from '../footer/footer_container';
import RestaurantIndexContainer
  from '../restaurants/restaurant_index_container';

class Main extends React.Component {
  render() {
    return(
      <section className="main">
        <SplashContainer />
      </section>
    );
  }
}

export default Main;
