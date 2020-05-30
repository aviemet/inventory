class Purchase < ApplicationRecord
  include Ownable
  
  belongs_to :item
end
