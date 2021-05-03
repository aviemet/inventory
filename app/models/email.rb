class Email < ApplicationRecord
  audited

  belongs_to :contact
  belongs_to :category
end
