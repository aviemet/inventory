class CustomField < ApplicationRecord
  has_and_belongs_to_many :custom_fieldsets
end
