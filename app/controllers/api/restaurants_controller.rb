class Api::RestaurantsController < ApplicationController
  def new
    @restaurant = Restaurant.new
  end

  def create
    @restaurant = Restaurant.new(restaurant_params)

    if @restaurant.save
      render :show
    else
      render json: @restaurant.errors.full_messages, status: 401
    end
  end

  def edit
    @restaurant = Restaurant.find(params[:id])
  end

  def update
    @restaurant = Restaurant.find(params[:id])

    if @restaurant && @restaurant.update_attributes(restaurant_params)
      render :show
    elsif !@restaurant
      render json: ['Could not find restaurant'], status: 400
    else
      render json: @restaurant.errors.full_messages, status: 401
    end
  end

  def show
    @restaurant = Restaurant.find(params[:id])
  end

  def index
    @restaurants = Restaurant.all
  end

  def destroy
    @restaurant = Restaurant.find(params[:id])

    if @restaurant
      @restaurant.destroy
      render :show
    else
      render ['Could not find restaurant'], status: 401
    end
  end

  def restaurant_params
    params.require(:restaurant).permit(
      :name, :address, :state, :city, :cuisine, :max_capacity, :time
    )
  end
end
