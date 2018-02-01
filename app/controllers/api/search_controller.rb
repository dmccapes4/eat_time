class Api::SearchController < ApplicationController
  def index
    search_restaurants = []
    @restaurants = Restaurant.all
    city = search_params(:city)

    @restaurants.each do |restaurant|
      search_restaurants << restaurant if city == restaurant.city
    end

    @restaurants = search_restaurants
    render :index
  end

  def search_params
    params.require(:search).permit(:city, :date, :time, :num_people)
  end
end
