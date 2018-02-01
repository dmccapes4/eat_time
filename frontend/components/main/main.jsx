import React from 'react';
import SplashContainer from '../splash/splash_container';
import NavBarContainer from '../nav_bar/nav_bar_container';
import BodyContainer from '../body/body_container';
import RestaurantIndexContainer
  from '../restaurants/restaurant_index_container';

class Main extends React.Component {
  render() {
    return(
      <section className="main">
        <SplashContainer />
        <NavBarContainer />
        <RestaurantIndexContainer />
      </section>
    );
  }
}

export default Main;
