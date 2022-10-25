class FieldsetAssociation < ApplicationRecord
  tracked

  belongs_to :fieldset
  belongs_to :fieldable, polymorphic: true
end
