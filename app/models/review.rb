class Review < ApplicationRecord
  validates :reservation_id, :rating, :title, :body, presence: true

  belongs_to :reservation
end
