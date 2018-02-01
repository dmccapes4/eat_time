import React from 'react';
import SplashContainer from '../splash/splash_container';
import NavBarContainer from '../nav_bar/nav_bar_container';
import RestaurantContainer from '../restaurants/restaurant_index_container';
import RestaurantIndexContainer
  from '../restaurants/restaurant_index_container';

class Body extends React.Component {
  render() {
    return(
      <section className="body">
        <NavBarContainer />
        <RestaurantIndexContainer />
      </section>
    );
  }
}

export default Body;
