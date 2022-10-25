class Warranty < ApplicationRecord
  include Contactable

  tracked

  belongs_to :item, required: true
end
