class Model < ApplicationRecord
  include Fieldable
  
  belongs_to :manufacturer
  belongs_to :item_category
end
