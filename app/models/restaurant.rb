class Restaurant < ApplicationRecord
  validates :name, :address, :state, :city, :cuisine, :max_capacity,
            :time, :image_url, presence: true
end
