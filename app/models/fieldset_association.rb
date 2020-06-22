class FieldsetAssociation < ApplicationRecord
  belongs_to :fieldset
  belongs_to :fieldable, polymorphic: true
end
