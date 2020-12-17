class Category < ApplicationRecord
  slug :slug_from_category_type

  validates_presence_of :categorizable_type
  validates_presence_of :name

  def slug_from_category_type
    "#{self.categorizable_type}-#{self.name}"
  end
end
