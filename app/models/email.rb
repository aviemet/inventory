class Email < ApplicationRecord
  belongs_to :contact
  has_one :contact_type
end
