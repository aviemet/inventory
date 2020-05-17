class Asset < ApplicationRecord
  belongs_to :asset_category
  belongs_to :brand
  belongs_to :purchase
end
