json.extract! reservation,
  :id, :user_id, :restaurant_id, :date, :time, :num_people, :completed

json.restaurant_name reservation.restaurant.name
json.restaurant_cuisine reservation.restaurant.cuisine
json.restaurant_image_url reservation.restaurant.image_url
json.review reservation.review
json.review_id reservation.review.id if reservation.review
