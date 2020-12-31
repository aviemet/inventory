class Category < ApplicationRecord
  slug :slug_from_category_type

  validates_presence_of :categorizable_type
  validates_presence_of :name

  delegate :to_s, to: :category_with_type

  def category_with_type
    "#{self.categorizable_type} - #{self.name}"
  end

  def slug_from_category_type
    "#{self.categorizable_type}-#{self.name}".downcase
  end
end
