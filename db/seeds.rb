# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Restaurant.destroy_all

demo = User.create(username: 'Demo', email: '_', password: '______')
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
  image_url: "https://res.cloudinary.com/mccapes-construction/image/upload/v1518061387/sandbar_az757t.jpg"
)
restaurant2 = Restaurant.create(
  name: 'Sushi a go go',
  address: '119 Harbor Way',
  state: 'California',
  city: 'Santa Barbara',
  cuisine: 'Japanese',
  max_capacity: 4,
  time: 1,
  image_url: "https://res.cloudinary.com/mccapes-construction/image/upload/v1518061530/sushi-go-go_znqcj0.jpg"
)
restaurant3 = Restaurant.create(
  name: 'Lure Fish House',
  address: '3815 State Street',
  state: 'California',
  city: 'Santa Barbara',
  cuisine: 'Seafood',
  max_capacity: 3,
  time: 1,
  image_url: "https://res.cloudinary.com/mccapes-construction/image/upload/v1518061630/lure-fish-house_houfix.jpg"
)
restaurant4 = Restaurant.create(
  name: 'Toma Restaurant and Bar',
  address: '324 W Cabrillo Blvd',
  state: 'California',
  city: 'Santa Barbara',
  cuisine: 'Italian',
  max_capacity: 3,
  time: 2,
  image_url: "https://res.cloudinary.com/mccapes-construction/image/upload/v1518061705/toma-restaurant-and-bar_avbg5r.jpg"
)
restaurant5 = Restaurant.create(
  name: 'Tres Hermanas',
  address: '2416 K Street',
  state: 'California',
  city: 'Sacramento',
  cuisine: 'Mexican',
  max_capacity: 3,
  time: 2,
  image_url: "https://res.cloudinary.com/mccapes-construction/image/upload/v1518061792/tres-hermanas_u5xbcr.jpg"
)
restaurant6 = Restaurant.create(
  name: 'Arigato Sushi',
  address: '1608 Howe Ave',
  state: 'California',
  city: 'Sacramento',
  cuisine: 'Japanese',
  max_capacity: 2,
  time: 1,
  image_url: "https://res.cloudinary.com/mccapes-construction/image/upload/v1518061937/arigato-sushi_c6swdb.jpg"
)
restaurant7 = Restaurant.create(
  name: 'Scott\'s Seafood on the River',
  address: '4800 Riverside Blvd',
  state: 'California',
  city: 'Sacramento',
  cuisine: 'Seafood',
  max_capacity: 5,
  time: 1,
  image_url: "https://res.cloudinary.com/mccapes-construction/image/upload/v1518062014/scotts-seafood_ntklbl.jpg"
)
restaurant8 = Restaurant.create(
  name: 'La Trattoria Bohemia',
  address: '3649 J St',
  state: 'California',
  city: 'Sacramento',
  cuisine: 'Italian',
  max_capacity: 4,
  time: 1,
  image_url: "https://res.cloudinary.com/mccapes-construction/image/upload/v1518062108/la-trattoria-bohemia_rjbgdl.jpg"
)
restaurant9 = Restaurant.create(
  name: 'Hog Island Oyster Company',
  address: 'One Ferry Building, #11',
  state: 'California',
  city: 'San Francisco',
  cuisine: 'Seafood',
  max_capacity: 3,
  time: 1,
  image_url: "https://res.cloudinary.com/mccapes-construction/image/upload/v1518062211/hog-island_julkgu.jpg"
)
restaurant10 = Restaurant.create(
  name: 'E Tutto Qua',
  address: '270 Columbus Ave',
  state: 'California',
  city: 'San Francisco',
  cuisine: 'Italian',
  max_capacity: 3,
  time: 2,
  image_url: "https://res.cloudinary.com/mccapes-construction/image/upload/v1518062314/e-tutto-qua_mdmjv2.jpg"
)
restaurant11 = Restaurant.create(
  name: 'Betty Lou\'s Seafood & Grill',
  address: '318 Columbus Ave',
  state: 'California',
  city: 'San Francisco',
  cuisine: 'Seafood',
  max_capacity: 3,
  time: 1,
  image_url: "https://res.cloudinary.com/mccapes-construction/image/upload/v1518062443/betty-lous_zsg6ub.jpg"
)

restaurant12 = Restaurant.create(
  name: 'Outerlands',
  address: '4001 Judah Street',
  state: 'California',
  city: 'San Francisco',
  cuisine: 'American',
  max_capacity: 3,
  time: 1,
  image_url: "https://res.cloudinary.com/mccapes-construction/image/upload/v1518062778/outerlands_dnt2bm.jpg"
)

restaurant13 = Restaurant.create(
  name: 'Hong Kong Lounge II',
  address: '3300 Geary Blvd',
  state: 'California',
  city: 'San Francisco',
  cuisine: 'Chinese',
  max_capacity: 3,
  time: 1,
  image_url: "https://res.cloudinary.com/mccapes-construction/image/upload/v1518062976/hong-kong-lounge_p0ck6y.jpg"
)

restaurant14 = Restaurant.create(
  name: 'SPQR',
  address: '1911 Fillmore Street',
  state: 'California',
  city: 'San Francisco',
  cuisine: 'Italian',
  max_capacity: 3,
  time: 1,
  image_url: "https://res.cloudinary.com/mccapes-construction/image/upload/v1518063246/spqr_b3onrv.jpg"
)

restaurant15 = Restaurant.create(
  name: 'Don Pistos',
  address: '510 Union Street',
  state: 'California',
  city: 'San Francisco',
  cuisine: 'Mexican',
  max_capacity: 3,
  time: 1,
  image_url: "https://res.cloudinary.com/mccapes-construction/image/upload/v1518069354/don-pistos_fmkfn6.jpg"
)

restaurant16 = Restaurant.create(
  name: 'Tropisueno',
  address: '75 Yerba Buena Lane',
  state: 'California',
  city: 'San Francisco',
  cuisine: 'Mexican',
  max_capacity: 3,
  time: 1,
  image_url: "http://res.cloudinary.com/mccapes-construction/image/upload/v1518063728/tropisueno_ottbip.jpg"
)

restaurant17 = Restaurant.create(
  name: 'Los Agaves Restaurant',
  address: '600 North Milpas Street',
  state: 'California',
  city: 'Santa Barbara',
  cuisine: 'Mexican',
  max_capacity: 3,
  time: 1,
  image_url: "https://res.cloudinary.com/mccapes-construction/image/upload/v1518063880/los-agaves_fw3qlx.jpg"
)

restaurant17 = Restaurant.create(
  name: 'Chuck\'s Waterfront Grill',
  address: '113 Harbor Way',
  state: 'California',
  city: 'Santa Barbara',
  cuisine: 'Seafood',
  max_capacity: 3,
  time: 1,
  image_url: "https://res.cloudinary.com/mccapes-construction/image/upload/v1518064121/chucks-waterfront-grill_xpipsf.jpg"
)

restaurant18 = Restaurant.create(
  name: 'Opal Restaurant and Bar',
  address: '1325 State Street',
  state: 'California',
  city: 'Santa Barbara',
  cuisine: 'American',
  max_capacity: 3,
  time: 1,
  image_url: "https://res.cloudinary.com/mccapes-construction/image/upload/v1518064262/opal-restaurant_i7xler.jpg"
)

restaurant19 = Restaurant.create(
  name: 'Rio City Cafe',
  address: '1110 Front Street',
  state: 'California',
  city: 'Sacramento',
  cuisine: 'American',
  max_capacity: 3,
  time: 1,
  image_url: "https://res.cloudinary.com/mccapes-construction/image/upload/v1518102049/rio-city-cafe_idnkyh.jpg"
)

restaurant20 = Restaurant.create(
  name: 'Frank Fat\'s',
  address: '806 L Street',
  state: 'California',
  city: 'Sacramento',
  cuisine: 'Chinese',
  max_capacity: 3,
  time: 1,
  image_url: "https://res.cloudinary.com/mccapes-construction/image/upload/v1518102246/frank-fats_zolfah.jpg"
)

restaurant21 = Restaurant.create(
  name: 'Firehouse Restaurant',
  address: '1112 2nd Street Sacramento',
  state: 'California',
  city: 'Sacramento',
  cuisine: 'American',
  max_capacity: 3,
  time: 1,
  image_url: "https://res.cloudinary.com/mccapes-construction/image/upload/v1518102765/firehouse_grcv1s.jpg"
)

restaurant22 = Restaurant.create(
  name: 'Zocalo Midtown',
  address: '1801 Capial Avenue',
  state: 'California',
  city: 'Sacramento',
  cuisine: 'Mexican',
  max_capacity: 3,
  time: 1,
  image_url: "https://res.cloudinary.com/mccapes-construction/image/upload/v1518102989/zocala_pwdq4t.jpg"
)

restaurant23 = Restaurant.create(
  name: 'Ernesto\'s Mexican Food',
  address: '1901 16th Street',
  state: 'California',
  city: 'Sacramento',
  cuisine: 'Mexican',
  max_capacity: 3,
  time: 1,
  image_url: "https://res.cloudinary.com/mccapes-construction/image/upload/v1518102989/zocala_pwdq4t.jpg"
)

restaurant23 = Restaurant.create(
  name: 'Azul Mexican Food & Tequila Bar',
  address: '1050 20th Street',
  state: 'California',
  city: 'Sacramento',
  cuisine: 'Mexican',
  max_capacity: 3,
  time: 1,
  image_url: "https://res.cloudinary.com/mccapes-construction/image/upload/v1518103346/azul_qbxw9b.jpg"
)

restaurant24 = Restaurant.create(
  name: 'Station 16',
  address: '1118 16th Street',
  state: 'California',
  city: 'Sacramento',
  cuisine: 'Seafood',
  max_capacity: 3,
  time: 1,
  image_url: "https://res.cloudinary.com/mccapes-construction/image/upload/v1518103487/station-16_aaapoy.jpg"
)

restaurant25 = Restaurant.create(
  name: 'Railroad Fish & Chips',
  address: '1100 Front Street',
  state: 'California',
  city: 'Sacramento',
  cuisine: 'Seafood',
  max_capacity: 3,
  time: 1,
  image_url: "https://res.cloudinary.com/mccapes-construction/image/upload/v1518103713/railroad-fish-and-chips_g3u6sz.jpg"
)

restaurant26 = Restaurant.create(
  name: 'Jean-Georges',
  address: '1 Central Park West',
  state: 'New York',
  city: 'New York',
  cuisine: 'French',
  max_capacity: 3,
  time: 1,
  image_url: "https://res.cloudinary.com/mccapes-construction/image/upload/v1518105993/jean-georges_k0ec3n.jpg"
)

restaurant27 = Restaurant.create(
  name: 'Carmine\'s Italian Restaurant - Times Square',
  address: '200 West 44th Street',
  state: 'New York',
  city: 'New York',
  cuisine: 'Italian',
  max_capacity: 3,
  time: 1,
  image_url: "https://res.cloudinary.com/mccapes-construction/image/upload/v1518106133/carmines-italian-restaurant_r0wcge.jpg"
)

restaurant28 = Restaurant.create(
  name: 'Blue Hill',
  address: '75 Washington Place',
  state: 'New York',
  city: 'New York',
  cuisine: 'American',
  max_capacity: 3,
  time: 1,
  image_url: "https://res.cloudinary.com/mccapes-construction/image/upload/v1518106414/blue-hill_d0eaxa.jpg"
)

restaurant29 = Restaurant.create(
  name: 'Eleven Madison Park',
  address: '11 Madison Avenue',
  state: 'New York',
  city: 'New York',
  cuisine: 'American',
  max_capacity: 3,
  time: 1,
  image_url: "https://res.cloudinary.com/mccapes-construction/image/upload/v1518106645/eleven-madison-park_ivlwvx.jpg"
)

restaurant30 = Restaurant.create(
  name: 'Danial',
  address: '60 East 65th Street',
  state: 'New York',
  city: 'New York',
  cuisine: 'French',
  max_capacity: 3,
  time: 1,
  image_url: "https://res.cloudinary.com/mccapes-construction/image/upload/v1518106763/daniel_lyggqq.jpg"
)









reservation1 = Reservation.create(
  user_id: 1,
  restaurant_id: 1,
  date: "02/02/2018",
  time: "7:00",
  completed: true,
  num_people: 2
)
reservation2 = Reservation.create(
  user_id: 1,
  restaurant_id: 2,
  date: "02/05/2018",
  time: "6:00",
  completed: true,
  num_people: 2
)
reservation3 = Reservation.create(
  user_id: 1,
  restaurant_id: 6,
  date: "02/17/2018",
  time: "8:00",
  completed: false,
  num_people: 3
)
reservation4 = Reservation.create(
  user_id: 1,
  restaurant_id: 11,
  date: "02/12/2018",
  time: "7:00",
  completed: false,
  num_people: 5
)
reservation5 = Reservation.create(
  user_id: 1,
  restaurant_id: 9,
  date: "02/15/2018",
  time: "9:00",
  completed: false,
  num_people: 4
)
reservation6 = Reservation.create(
  user_id: 2,
  restaurant_id: 1,
  date: "02/04/2018",
  time: "6:00",
  completed: true,
  num_people: 2
)
reservation7 = Reservation.create(
  user_id: 2,
  restaurant_id: 2,
  date: "02/07/2018",
  time: "8:00",
  completed: true,
  num_people: 2
)
reservation8 = Reservation.create(
  user_id: 2,
  restaurant_id: 6,
  date: "02/18/2018",
  time: "9:00",
  completed: false,
  num_people: 3
)
reservation9 = Reservation.create(
  user_id: 2,
  restaurant_id: 11,
  date: "02/18/2018",
  time: "9:00",
  completed: false,
  num_people: 5
)
reservation10 = Reservation.create(
  user_id: 2,
  restaurant_id: 9,
  date: "02/16/2018",
  time: "10:00",
  completed: false,
  num_people: 4
)
reservation11 = Reservation.create(
  user_id: 2,
  restaurant_id: 3,
  date: "01/21/2018",
  time: "7:00",
  completed: true,
  num_people: 3
)
reservation12 = Reservation.create(
  user_id: 2,
  restaurant_id: 5,
  date: "01/24/2018",
  time: "7:00",
  completed: true,
  num_people: 3
)
reservation13 = Reservation.create(
  user_id: 2,
  restaurant_id: 7,
  date: "01/27/2018",
  time: "7:00",
  completed: true,
  num_people: 3
)
reservation14 = Reservation.create(
  user_id: 2,
  restaurant_id: 9,
  date: "01/28/2018",
  time: "7:00",
  completed: true,
  num_people: 3
)
reservation15 = Reservation.create(
  user_id: 4,
  restaurant_id: 3,
  date: "01/15/2018",
  time: "7:00",
  completed: true,
  num_people: 2
)
reservation16 = Reservation.create(
  user_id: 4,
  restaurant_id: 5,
  date: "01/16/2018",
  time: "7:00",
  completed: true,
  num_people: 2
)
reservation17 = Reservation.create(
  user_id: 4,
  restaurant_id: 1,
  date: "01/18/2018",
  time: "8:00",
  completed: true,
  num_people: 4
)
reservation18 = Reservation.create(
  user_id: 5,
  restaurant_id: 1,
  date: "01/19/2018",
  time: "6:00",
  completed: true,
  num_people: 5
)



review1 = Review.create(
  reservation_id: 1,
  rating: 4,
  title: 'A nice place',
  body: 'My wife and I had a nice meal here.'
)
review2 = Review.create(
  reservation_id: 2,
  rating: 2,
  title: 'A bad place',
  body: 'My wife and I had a bad meal here.'
)
review3 = Review.create(
  reservation_id: 6,
  rating: 3,
  title: 'A decent meal',
  body: 'I had a decent meal.'
)
review4 = Review.create(
  reservation_id: 7,
  rating: 3,
  title: 'An ok meal',
  body: 'I had an ok meal.'
)
review5 = Review.create(
  reservation_id: 17,
  rating: 5,
  title: 'Sandar is great!',
  body: 'Great tacos and sports on tv!'
)
review6 = Review.create(
  reservation_id: 18,
  rating: 2,
  title: 'Poor service',
  body: 'Our waiter was very rude'
)
