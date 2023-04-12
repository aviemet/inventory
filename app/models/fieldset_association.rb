class FieldsetAssociation < ApplicationRecord
  tracked
  resourcify

  belongs_to :fieldset
  belongs_to :fieldable, polymorphic: true
end
