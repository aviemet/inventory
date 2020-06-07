class License < ApplicationRecord
  include Ownable
  include Purchasable
  include Fieldable
end
