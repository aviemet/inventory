class Email < ApplicationRecord
  include Categorizable

  tracked
  resourcify

  belongs_to :contact
end
