class Warranty < ApplicationRecord
  include Contactable

  tracked
  resourcify

  belongs_to :asset, required: true
end
