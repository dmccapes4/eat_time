class Review < ApplicationRecord
  validates :reservation_id, :rating, :title, :body, presence: true
  validates :reservation_id, uniqueness: true

  belongs_to :reservation
end
