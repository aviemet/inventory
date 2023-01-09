class Warranty < ApplicationRecord
  include Contactable

  tracked

  belongs_to :asset, required: true
end
