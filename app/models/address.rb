class Address < ApplicationRecord
  tracked

  belongs_to :contact
  belongs_to :category

  def self.find_by_category(category)
    self.where(category:)
  end
end
