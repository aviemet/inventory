class License < ApplicationRecord
  include Purchasable
  include Ownable
end
