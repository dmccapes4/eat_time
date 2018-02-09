# EatTime

[EatTime Live](https://eattime.herokuapp.com)

EatTime is a full-stack web application that allows users to make and manage reservations at restaurants. EatTime's backend is managed using Ruby on Rails with a PostgreSQL database and uses React/Redux on the frontend.


![splash-page](https://user-images.githubusercontent.com/32603834/36045129-96eb0a34-0d89-11e8-941c-6e93eaedd323.jpg)


## Features

### Search

EatTime allows users to search for restaurants by city, cuisine, or restaurant name. The user also specifies the date, time and number of people for the reservation. This search fetches a list of restaurants matching the parameters.



Search by city only:
![search-filled-more-results](https://user-images.githubusercontent.com/32603834/36045718-7cb41bcc-0d8b-11e8-9191-cfc3239e4afd.jpg)



Search by city, cuisine and restaurant name:
![search-filled-and-results 1](https://user-images.githubusercontent.com/32603834/36045628-296acb00-0d8b-11e8-83f6-08bbb55b5917.jpg)


### Reservations

When users have narrowed their search they can make their reservation. After they have created their reservation they can view it in their profile, and update or cancel it if they wish.



Future reservations on profile:
![future-reservations](https://user-images.githubusercontent.com/32603834/36046084-a9eb36e2-0d8c-11e8-9db3-8dc278b83a5a.jpg)



Updating reservation:
![update-reservation-modal](https://user-images.githubusercontent.com/32603834/36046173-e693a7f0-0d8c-11e8-9f76-b2f8d133d2dd.jpg)


### Reviews

After a reservation has been completed users can view them on their past reservations page. On this page they are able to review their past reservations. They can also edit their reviews by clicking on the link with the review title. They can also delete their reviews.



Updating a review:
![review-modal](https://user-images.githubusercontent.com/32603834/36046404-a5314d2a-0d8d-11e8-9dfc-26e16c40257a.jpg)



### Future additions

* Mark restaurants as favorites
* Map showing restaurant location
* Select ringtone to alert when table is ready
