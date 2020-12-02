class Category < ApplicationRecord
  validates_presence_of :categorizable_type
  validates_presence_of :name
end
