class Address < ApplicationRecord
  include Categorizable

  tracked
  resourcify

  belongs_to :contact

  # def self.find_by_category(category)
  #   self.where(category:)
  # end
end
