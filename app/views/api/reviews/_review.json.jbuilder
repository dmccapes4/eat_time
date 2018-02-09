json.extract! review,
  :id, :reservation_id, :rating, :title, :body

json.username review.reservation.user.username
