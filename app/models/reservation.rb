class Reservation < ApplicationRecord
  validates :user_id, :restaurant_id, :date, :time, presence: true

  belongs_to :user
  belongs_to :restaurant

  has_one :review
end
