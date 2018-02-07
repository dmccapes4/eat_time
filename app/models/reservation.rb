class Reservation < ApplicationRecord
  validates :user_id, :restaurant_id, :date, :time, presence: true
  # validate :not_duplicate_reservation

  # def not_duplicate_reservation
  #   user = User.find(:user_id)
  #
  #   user.reservations.each do |reservation|
  #     if reservation.restaurant_id == :restaurant_id &&
  #       reservation.date == :date &&
  #       reservation.time == :time
  #       return false
  #     end
  #   end
  #   return true
  # end

  belongs_to :user
  belongs_to :restaurant

  has_one :review
end
