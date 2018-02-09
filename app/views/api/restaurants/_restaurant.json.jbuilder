json.extract! restaurant,
  :id, :name, :state, :city, :cuisine, :max_capacity, :time, :image_url

json.reviews restaurant.reviews.each do |review|
  json.extract! review,
    :id, :reservation_id, :rating, :title, :body

  json.username review.reservation.user.username
end

rating = 0
restaurant.reviews.each do |review|
  rating += review.rating
end
rating /= restaurant.reviews.length if restaurant.reviews.length > 0

json.rating rating
json.num_reviews restaurant.reviews.length
