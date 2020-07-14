class License < ApplicationRecord
  include Ownable
  include Assignable
  include Purchasable
  include Fieldable
end
