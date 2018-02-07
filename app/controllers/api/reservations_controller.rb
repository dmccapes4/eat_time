class Api::ReservationsController < ApplicationController
  def show
    @reservation = Reservation.find(params[:id])
    @user = User.find(@reservation.user_id)
    @restaurant = Restaurant.find(@reservation.restaurant_id)
  end

  def index
    @reservations = Reservation.all
  end

  def new
    @reservation = Reservation.new
  end

  def create
    @reservation = Reservation.new(reservation_params)

    if @reservation.save
      render :show
    else
      render json: @reservation.errors.full_messages, status: 422
    end
  end

  def destroy
    @reservation = Reservation.find(params[:id])
    @reservation.destroy
  end

  def reservation_params
    params.require(:reservation).permit(
      :user_id,
      :restaurant_id,
      :date,
      :time,
      :num_people,
    )
  end
end
