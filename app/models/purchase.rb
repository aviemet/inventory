class Purchase < ApplicationRecord
  include Ownable

  monetize :cost_cents

  belongs_to :item
end
