export const fetchRestaurants = () => {
  return $.ajax({
    url: 'api/restaurants',
  });
};

export const fetchRestaurant = id => {
  return $.ajax({
    url: 'api/restaurants/',
    data: { id },
  });
};
