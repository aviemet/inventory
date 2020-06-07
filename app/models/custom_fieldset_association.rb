class CustomFieldsetAssociation < ApplicationRecord
  belongs_to :custom_fieldset
  belongs_to :fieldable, polymorphic: true
end
