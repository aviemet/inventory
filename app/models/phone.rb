class Phone < ApplicationRecord
  belongs_to :contact
  belongs_to :category
end
