class Restaurant < ApplicationRecord
  validates :name, :address, :state, :city, :cuisine, :max_capacity,
            :time, :image_url, presence: true

  has_many :reservations
  has_many :users, through: :reservations
  has_many :reviews, through: :reservations
end
