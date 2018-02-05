class Api::SearchController < ApplicationController
  def index
    city = search_params[:city]
    cuisine = search_params[:cuisine]
    name = search_params[:restaurant]
    @restaurants = Restaurant.all.to_a

    unless city == ""
      @restaurants.select! do |restaurant|
        restaurant.city == city
      end
    end

    unless name == ""
      @restaurants.select! do |restaurant|
        restaurant.name == name
      end
    end

    unless cuisine == ""
      @restaurants.select! do |restaurant|
        restaurant.cuisine == cuisine
      end
    end

    render :index
  end

  def search_params
    params.require(:search).permit(
      :city, :cuisine, :restaurant
    )
  end
end
