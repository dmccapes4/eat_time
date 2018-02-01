# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Restaurant.destroy_all

demo = User.create(username: '_', email: '_', password: '______')
user1 = User.create(username: 'Dylan', email: 'dylan@email.com', password: '111111')
user2 = User.create(username: 'Jacqueline', email: 'jacqueline@email.com', password: '111111')
user3 = User.create(username: 'Brandon', email: 'brandon@email.com', password: '111111')
user4 = User.create(username: 'Emma', email: 'emma@email.com', password: '111111')
user5 = User.create(username: 'Kelly', email: 'kelly@email.com', password: '111111')

restaurant1 = Restaurant.create(
  name: 'Sandbar',
  address: '514 State Street',
  state: 'California',
  city: 'Santa Barbara',
  cuisine: 'Mexican',
  max_capacity: 4,
  time: 1,
  image_url: "https://res.cloudinary.com/mccapes-construction/image/upload/v1517498857/sandbar_grrdsk.jpg"
)
restaurant2 = Restaurant.create(
  name: 'Sushi a go go',
  address: '119 Harbor Way',
  state: 'California',
  city: 'Santa Barbara',
  cuisine: 'Japanese',
  max_capacity: 4,
  time: 1,
  image_url: "https://res.cloudinary.com/mccapes-construction/image/upload/v1517502908/sushi_a_go_go_aquufa.jpg"
)
restaurant3 = Restaurant.create(
  name: 'Lure Fish House',
  address: '3815 State Street',
  state: 'California',
  city: 'Santa Barbara',
  cuisine: 'Seafood',
  max_capacity: 3,
  time: 1,
  image_url: "https://res.cloudinary.com/mccapes-construction/image/upload/v1517499162/lure_fish_house_vytkoa.jpg"
)
restaurant4 = Restaurant.create(
  name: 'Toma Restaurant and Bar',
  address: '324 W Cabrillo Blvd',
  state: 'California',
  city: 'Santa Barbara',
  cuisine: 'Italian',
  max_capacity: 3,
  time: 2,
  image_url: "https://res.cloudinary.com/mccapes-construction/image/upload/v1517504203/toma-restaurant_k40wkw.jpg"
)
restaurant5 = Restaurant.create(
  name: 'Tres Hermanas',
  address: '2416 K Street',
  state: 'California',
  city: 'Sacramento',
  cuisine: 'Mexican',
  max_capacity: 3,
  time: 2,
  image_url: "https://res.cloudinary.com/mccapes-construction/image/upload/v1517511767/tres_hermanas_uktmra.jpg"
)
restaurant6 = Restaurant.create(
  name: 'Arigato Sushi',
  address: '1608 Howe Ave',
  state: 'California',
  city: 'Sacramento',
  cuisine: 'Japanese',
  max_capacity: 2,
  time: 1,
  image_url: "https://res.cloudinary.com/mccapes-construction/image/upload/v1517512040/arigato_sushi_dyhpa1.jpg"
)
restaurant7 = Restaurant.create(
  name: 'Scott\'s Seafood on the River',
  address: '4800 Riverside Blvd',
  state: 'California',
  city: 'Sacramento',
  cuisine: 'Seafood',
  max_capacity: 5,
  time: 1,
  image_url: "https://res.cloudinary.com/mccapes-construction/image/upload/v1517513113/scotts-seafood-on-the-river_mjdhav.jpg"
)
restaurant8 = Restaurant.create(
  name: 'La Trattoria Bohemia',
  address: '3649 J St',
  state: 'California',
  city: 'Sacramento',
  cuisine: 'Italian',
  max_capacity: 4,
  time: 1,
  image_url: "http://res.cloudinary.com/mccapes-construction/image/upload/v1517513256/la-trattoria-bohemia_fjecxu.jpg"
)
restaurant9 = Restaurant.create(
  name: 'Hog Island Oyster Company',
  address: 'One Ferry Building, #11',
  state: 'California',
  city: 'San Francisco',
  cuisine: 'Seafood',
  max_capacity: 3,
  time: 1,
  image_url: "https://res.cloudinary.com/mccapes-construction/image/upload/v1517512229/hog-island-oyster-company_xjztef.jpg"
)
restaurant10 = Restaurant.create(
  name: 'E Tutto Qua',
  address: '270 Columbus Ave',
  state: 'California',
  city: 'San Francisco',
  cuisine: 'Italian',
  max_capacity: 3,
  time: 2,
  image_url: "https://res.cloudinary.com/mccapes-construction/image/upload/v1517512403/e_tutto_qua_juyr79.jpg"
)
restaurant11 = Restaurant.create(
  name: 'Betty Lou\'s Seafood & Grill',
  address: '318 Columbus Ave',
  state: 'California',
  city: 'San Francisco',
  cuisine: 'Seafood',
  max_capacity: 3,
  time: 1,
  image_url: "https://res.cloudinary.com/mccapes-construction/image/upload/v1517513416/betty-lous-seafood-_-grill_lxvr7v.jpg"
)

reservation1 = Reservation.create(user_id: 1, restaurant_id: 1, date: "02/12/2018", time: "19:00")
reservation2 = Reservation.create(user_id: 1, restaurant_id: 2, date: "02/15/2018", time: "18:00")
reservation3 = Reservation.create(user_id: 1, restaurant_id: 6, date: "02/17/2018", time: "20:00")
reservation4 = Reservation.create(user_id: 2, restaurant_id: 11, date: "02/12/2018", time: "19:00")
reservation5 = Reservation.create(user_id: 2, restaurant_id: 9, date: "02/15/2018", time: "21:00")
