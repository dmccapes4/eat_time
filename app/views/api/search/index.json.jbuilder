json.array! @restaurants do |restaurant|
  json.partial! 'api/restaurants/restaurant', restaurant: restaurant
  json.times @reservation_times
end
