import React from 'react';
import SplashContainer from '../splash/splash_container';
import NavBarContainer from '../nav_bar/nav_bar_container';

class Main extends React.Component {
  render() {
    return(
      <section className="main">
        <NavBarContainer />
      </section>
    );
  }
}

export default Main;
