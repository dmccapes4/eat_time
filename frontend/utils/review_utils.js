export const fetchReviews = () => {
  return $.ajax({
    url: 'api/reviews'
  });
};

export const fetchReview = id => {
  return $.ajax({
    url: 'api/reviews',
    data: { id },
  });
};

export const fetchCreateReview = review => {
  return $.ajax({
    method: 'POST',
    url: 'api/reviews',
    data: { review },
  });
};

export const fetchUpdateReview = review => {
  return $.ajax({
    method: 'PATCH',
    url: `api/reviews/${review.id}`,
    data: { review }
  });
};

export const fetchDeleteReview = id => {
  return $.ajax({
    method: 'DELETE',
    url: `api/reviews/${id}`,
  });
};
