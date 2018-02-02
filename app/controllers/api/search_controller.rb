class Api::SearchController < ApplicationController
  def index
    search_restaurants = []
    city = search_params[:city]
    @restaurants = Restaurant.where(city: city)

    @restaurants
    render :index
  end

  def search_params
    params.require(:search).permit(:city, :date, :time, :num_people)
  end
end
