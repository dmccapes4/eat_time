import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
  render() {
    return (
      <section className="footer">
        <a href="https://github.com/dmccapes4/eat_time">
          About EatTime
        </a>
        <a href="https://www.linkedin.com/in/dylan-mccapes">
          Contact
        </a>
        <a href="https://www.linkedin.com/in/dylan-mccapes">
          LinkedIn
        </a>
      </section>
    );
  }
}

export default Footer;
