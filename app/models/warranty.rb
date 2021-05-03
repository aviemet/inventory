class Warranty < ApplicationRecord
  include Contactable

  audited

  belongs_to :item, required: true
end
