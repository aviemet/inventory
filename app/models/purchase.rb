class Purchase < ApplicationRecord
  include Ownable

  audited

  monetize :cost_cents

  belongs_to :item
end
