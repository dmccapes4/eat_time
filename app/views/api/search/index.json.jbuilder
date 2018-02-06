json.array! @restaurants do |restaurant|
  json.partial! 'api/restaurants/restaurant', restaurant: restaurant
  json.reservation_times @reservation_times
end
