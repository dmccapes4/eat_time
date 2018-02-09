import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
  render() {
    return (
      <section className="footer">
        <Link >
          About Us
        </Link>
        <Link >
          Contact
        </Link>
        <Link >
          LinkedIn
        </Link>
      </section>
    );
  }
}

export default Footer;
