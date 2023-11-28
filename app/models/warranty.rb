class Warranty < ApplicationRecord
  include Contactable

  tracked
  resourcify

  belongs_to :asset, optional: false
end
