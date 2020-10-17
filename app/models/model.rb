class Model < ApplicationRecord
  include Fieldable
  
  belongs_to :manufacturer
  belongs_to :item_category

  validates_presence_of :name
end
