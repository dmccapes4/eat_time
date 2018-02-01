import React from 'react';

export default ({ restaurant }) => {
  return (
    <li>
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
    </li>
  );
};
