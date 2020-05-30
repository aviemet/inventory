class Department < ApplicationRecord
  include Contactable
  include Ownable

  belongs_to :company
  belongs_to :location, optional: true
end
