import React from 'react';
import { Link } from 'react-router-dom';

export default ({ restaurant }) => {
  return (
      <li>
        <Link to={`/restaurant/${restaurant.id}`}>
        <section className="restaurant-content">
          <img
            src={restaurant.image_url}
            className="restaurant-img" />
          <section className="restaurant-info">
            <p className="restaurant-name">{restaurant.name}</p>
            <p className="restaurant-city">{restaurant.city}</p>
            <p className="restaurant-cuisine">{restaurant.cuisine}</p>
          </section>
        </section>
      </Link>
      </li>
  );
};
