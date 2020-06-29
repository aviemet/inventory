class Warranty < ApplicationRecord
  include Contactable

  belongs_to :item, required: true
end
