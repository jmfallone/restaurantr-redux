class Review < ApplicationRecord
  validates :creator_username, presence: true
  validates :date_created, presence: true
  validates :score, presence: true, inclusion: { in: 1..10 }
  validates :title, presence: true
  validates :description, presence: true
  validates :store_id, presence: true

  serialize :images, JSON

  # Custom setter to ensure images is always an array
  def images=(value)
    super(Array(value))
  end
end
