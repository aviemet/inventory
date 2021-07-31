class Purchase < ApplicationRecord
  include Ownable

  resourcify
  audited

  monetize :cost_cents

  belongs_to :item
  belongs_to :order
end
