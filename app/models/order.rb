class Order < ApplicationRecord
  include Ownable
  
  belongs_to :user
  belongs_to :vendor
end
