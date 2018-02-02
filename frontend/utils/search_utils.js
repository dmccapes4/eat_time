export const fetchSearchRestaurants = searchTerms => {
  return $.ajax({
    url: 'api/search',
    data: searchTerms
  });
};
