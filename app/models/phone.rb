class Phone < ApplicationRecord
  belongs_to :contact_type
  belongs_to :contact
end
