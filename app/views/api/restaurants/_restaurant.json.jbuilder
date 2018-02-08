json.extract! restaurant,
  :id, :name, :state, :city, :cuisine, :max_capacity, :time, :image_url

json.reviews restaurant.reviews

rating = 0
restaurant.reviews.each do |review|
  rating += review.rating
end
rating /= restaurant.reviews.length if restaurant.reviews.length > 0

json.rating rating
json.num_reviews restaurant.reviews.length
